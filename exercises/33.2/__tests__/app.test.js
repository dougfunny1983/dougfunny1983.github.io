const axiosist = require('axiosist');
const app = require('../api/app');
const testerEmail = require('../mock');

jest.setTimeout(6000);

describe('brincando com o Axiosist', () => {
  const axios = axiosist(app);

  describe('será que funciona?', () => {
    let response;

    beforeAll(async () => {
      response = await axios.get('/');
    });

    test('testando uma call ', () => {
      const res = 'Hello World!';
      const {
        data: { message },
        status,
      } = response;
      expect(status).toEqual(200);
      expect(message).toEqual(res);
    });
  });

  describe('rota login', () => {
    let response;

    beforeAll(async () => {
      response = await axios.post(
        '/login',
        testerEmail('doug@gmail.com', '13345'),
      );
    });

    test('a rota login com valores errados ', () => {
      const res = 'error';
      const {
        data: { message },
        status,
      } = response;
      expect(status).toEqual(500);
      expect(message).toEqual(res);
    });
  });

  describe('rota login', () => {
    let response;

    beforeAll(async () => {
      response = await axios.post(
        '/login',
        testerEmail('doug@gmail.com', '133456'),
      );
    });

    test('a rota login com valores certos', () => {
      const res = testerEmail('doug@gmail.com', '133456');
      const { data, status } = response;
      expect(status).toEqual(200);
      expect(data).toEqual(res);
    });
  });
});
