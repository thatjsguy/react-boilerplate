import express from 'express';
const app = express();

import path from 'path';

const getPort = () => {
  switch(process.env.NODE_ENV) {
    case 'production':
      return 80;
    break;
    default:
      return 3000;
    break;
  }
};
const port = getPort();
app.use(express.static(path.join(__dirname, 'public'), {maxAge: '14d'}));
app.use('/api', require('./api/index').default);
app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
