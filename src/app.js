const express = require('express');
const { v4 } = require('uuid');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).send('Welcome');
});
server.get('/ping', (req, res) => {
  res.status(200).send('Pong');
});
server.get('/tasks', (req, res) => {
  res.status(200).send([]);
});
server.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) return res.sendStatus(400);
  console.log(v4());
  res.status(200).json({ title, description, id: v4() });
});

module.exports = server;
