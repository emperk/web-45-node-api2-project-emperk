// implement your server here
// require your posts router and connect it here

const express = require('express');
const server = express();

server.use(express.json());
server.use('*', (req, res) => {
  res.status(404).json({
    message: '404 Error. Not Found.'
  })
})

module.exports = server;