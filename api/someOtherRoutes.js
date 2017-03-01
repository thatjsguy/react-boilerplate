import { Router } from 'express';
const server = new Router();

server.get('/thing', (req, res, next) => {
  res.json({thing: true});
});

export default server;
