const axios = require('axios');

const getCharById = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.data)
    .then((data) => {
      let characters = {
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
      };
      res
        .writeHead(200, { 'Content-Type': 'application/json' })
        .end(JSON.stringify(characters));
    })
    .catch((err) =>
      res
        .writeHead(500, { 'Content-Type': 'text/plain' })
        .end(`The character with the id ${id} is not available`)
    );
};

module.exports = getCharById; //Contr
