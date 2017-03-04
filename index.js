import express from 'express';
import path from 'path';
import httpProxy from 'http-proxy';

const app = express();
const proxy = httpProxy.createProxyServer();

const isProd = process.env.NODE_ENV === 'production';
const port = isProd ? process.env.PORT : 3000;

if(!isProd) {
  const bundle = require('./bundle.js');
  bundle();
  app.all('/dist/*', function (req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    })
  })
}

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
})

app.use(express.static(path.join(__dirname, 'public'), {maxAge: '14d'}));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', require('./api/index').default);

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/app/index.html`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
