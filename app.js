const axios = require('axios').default;
const fs = require('fs');

const { addAccountsOnItems } = require('./src/bridge/accounts');
const { authenticate } = require('./src/bridge/authenticate');
const { getItems } = require('./src/bridge/items');
const { transactions } = require('./src/bridge/transactions');

axios.defaults.baseURL = 'https://api.bridgeapi.io/v2/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['client-id'] = '945a08c761804ac1983536463fc4a7f6';
axios.defaults.headers.common['client-secret'] = 'YqUINh5B5pYlp7UzlENutajikoDX1gIW4pNObUCn9sEXLXGm39Mm1Yq8JKUFaHUD';
axios.defaults.headers.get['Accept-Language'] = 'FR';
axios.defaults.headers.get.Accept = 'application/json';
axios.defaults.headers.common['bridge-version'] = '2021-06-01';

async function main() {
  try {
    const output = {};

    const response = await authenticate('john.doe@email.com', 'password123');

    axios.defaults.headers.common.Authorization = `Bearer ${response.data.access_token}`;

    output.access_token = {
      value: response.data.access_token,
      expires_at: response.data.expires_at,
    };

    const items = await getItems();

    output.items = await addAccountsOnItems(items);
    output.transactions = await transactions();

    const jsonDatas = JSON.stringify(output);

    fs.writeFileSync('./resultat.json', jsonDatas, (err) => {
      if (err) {
        console.log(err);
      }
    });
  } catch (e) {
    throw new Error(e);
  }
}

main();
