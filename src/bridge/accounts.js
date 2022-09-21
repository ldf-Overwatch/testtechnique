const axios = require("axios").default;
const _ = require("lodash");

const addAccountsOnItems = async (items) => {

    let outputItems = [];

    for await (let item of items) {

        const accounts = await axios.get('/accounts', {
            params: {
                limit: 50, item_id: item.id
            }
        });

        let accountsFilterFields = accounts.data.resources.map(account => _.pick(account,
            ['id', 'name', 'balance', 'status', 'status_code_info', 'status_code_description',
                'updated_at', 'type', 'currency_code', 'iban']));

        const newItem = {
            "id": item.id,
            "status": item.status,
            "status_code_description": item.status_code_description,
            "bank_id": item.bank_id,
            "accounts": accountsFilterFields
        }

        outputItems.push(newItem);


    }

    return outputItems;
}

module.exports = { addAccountsOnItems };
