require('dotenv').config();
const express = require('express');
const server = express();
const PORT = process.env.PORT || 3001;
server.use(express.json());

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
