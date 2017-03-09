import { Router } from 'express';
const server = new Router();

const incomplete = require('./mockData/todos-incomplete.json');
const completed = require('./mockData/todos-complete.json');

server.get('/all.json', (req, res, next) => {
  const allTodos = incomplete.concat(completed);
  res.json(allTodos);
});

server.get('/complete.json', (req, res, next) => {
  res.json(completed);
});

server.get('/incomplete.json', (req, res, next) => {
  res.json(completed);
});

export default server;
