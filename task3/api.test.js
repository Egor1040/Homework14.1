const fetchData = require('./api');
const axios = require('axios');

// Мокування Axios
jest.mock('axios');

describe('fetchData', () => {
  
  // Тест для успішного запиту
  it('повинен повертати дані при успішному запиті', async () => {
    // Налаштування мока для axios.get
    const mockData = { data: 'some data' };
    axios.get.mockResolvedValue(mockData);

    // Виклик функції
    const result = await fetchData('https://example.com/api');

    // Перевірка результату
    expect(result).toBe('some data');
    expect(axios.get).toHaveBeenCalledWith('https://example.com/api');
  });

  // Тест для невдалого запиту
  it('повинен кидати помилку при невдалому запиті', async () => {
    // Налаштування мока для axios.get, щоб він кидав помилку
    axios.get.mockRejectedValue(new Error('Network Error'));

    // Очікування, що функція буде кидати помилку
    await expect(fetchData('https://example.com/api')).rejects.toThrow('Не вдалося отримати дані: Network Error');
  });
});
