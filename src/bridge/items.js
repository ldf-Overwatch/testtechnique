const axios = require("axios").default;

const getItems = async () => {
    const items = await axios.get('/items', {
        params: {
            limit: 50
        }
    });

    return items.data.resources;
}

module.exports = { getItems };
