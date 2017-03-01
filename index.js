import express from 'express';
const app = express();

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

app.get('/', (req, res) => {
  res.send('Hi!');
});

app.use('/api', require('./api/index').default);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
