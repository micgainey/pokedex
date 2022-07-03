const axios = require('axios').default;

let pokemon;

axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50')
  .then(function (response) {
    pokemon = response
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

export {pokemon};