const axios = require('axios').default;

const { authenticate } = require('../src/bridge/authenticate');

axios.defaults.baseURL = 'https://api.bridgeapi.io/v2/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['client-id'] = '945a08c761804ac1983536463fc4a7f6';
axios.defaults.headers.common['client-secret'] = 'YqUINh5B5pYlp7UzlENutajikoDX1gIW4pNObUCn9sEXLXGm39Mm1Yq8JKUFaHUD';
axios.defaults.headers.get['Accept-Language'] = 'FR';
axios.defaults.headers.get.Accept = 'application/json';
axios.defaults.headers.common['bridge-version'] = '2021-06-01';

describe('authenticate bridget', () => {
  test('la donnée est john.doe@email.com', async () => {
    const user = await authenticate('john.doe@email.com', 'password123');
    expect(user).toBeDefined();
    expect(user.data.user.email).toEqual('john.doe@email.com');
  });
});
