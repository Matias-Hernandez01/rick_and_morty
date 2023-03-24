const http = require('http');
const PORT = 3001;
const getCharById = require('../controllers/getCharById');

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes('detail')) {
      let id = req.url.split('/').at(-1);
      getCharById(res, id);
    }
  })
  .listen(PORT, 'localhost'); //Agregamos puerto y localhost
