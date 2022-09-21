const axios = require('axios').default;

const authenticate = async (email, password) => await axios.post('/authenticate', {
  email,
  password,
});

module.exports = { authenticate };
