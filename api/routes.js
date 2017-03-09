import { Router } from 'express';
const server = new Router();

import todos from './todos';
server.use('/todos', todos);

server.get('/hello', (req, res, next) => {
  res.json({hello: 'world'});
});

export default server;
