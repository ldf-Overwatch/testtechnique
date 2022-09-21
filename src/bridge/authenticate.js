const axios = require('axios').default;

const authenticate = async (email, password) => {
    return await axios.post('/authenticate', {
        email,
        password
    });
};

module.exports = { authenticate };
