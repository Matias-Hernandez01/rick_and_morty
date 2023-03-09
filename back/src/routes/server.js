const http = require('http');
const characters = require('../utils/data');

const PORT = 3001;

http
  .createServer((req, res) => {
    if (req.url.includes('rickandmorty/characters')) {
      let id = req.url.split('/').at(-1);
    }
  })
  .listen(3001, 'localhost');
