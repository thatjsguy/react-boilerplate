import { Router } from 'express';
const server = new Router();

import someOtherRoutes from './someOtherRoutes';
server.use('/someOtherRoutes', someOtherRoutes);

server.get('/hello', (req, res, next) => {
  res.json({hello: 'world'});
});

export default server;
