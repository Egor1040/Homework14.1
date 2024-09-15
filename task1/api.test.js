const fetchData = require('./api');
const axios = require('axios');

// Мокування Axios
jest.mock('axios');

describe('fetchData', () => {
  it('повинен обробляти помилку з неправильної URL-адреси', async () => {
    // Налаштування мока для axios, щоб він завжди кидав помилку
    axios.get.mockRejectedValue(new Error('Network Error'));

    // Очікування, що функція буде кидати помилку
    await expect(fetchData()).rejects.toThrow('Не вдалося отримати дані: Network Error');
  });
});
