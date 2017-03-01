import { Router } from 'express';
const server = new Router();

server.get('/hello', (req, res, next) => {
  res.json({hello: 'world'});
});

export default server;
