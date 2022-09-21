const axios = require('axios').default;

const transactions = async () => {
  const transactionsResults = await axios.get('/transactions', {
    params: {
      limit: 2, until: new Date().getTime(),
    },
  });

  return transactionsResults.data.resources;
};

module.exports = { transactions };
