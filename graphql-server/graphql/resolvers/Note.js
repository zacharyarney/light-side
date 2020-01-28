const axios = require('axios');

const resolvers = {
  Query: {
    notes: () =>
      axios
        .get('http://localhost:5000/notes/')
        .then((notes) => notes)
        .catch((err) => console.log(err)),
  },
};

module.exports = resolvers;
