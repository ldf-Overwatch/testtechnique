const axios = require("axios").default;

const transactions = async () => {
    const transactions = await axios.get('/transactions', {
        params: {
            limit: 2, until: new Date().getTime()
        }
    });

    return transactions.data.resources;
}


module.exports = { transactions };
