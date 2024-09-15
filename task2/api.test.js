const fetchData = require('./api');
const axios = require('axios');

// Мокування Axios
jest.mock('axios');

describe('fetchData', () => {
  it('повинен включати кастомні заголовки та параметри у запит', async () => {
    // Налаштування мока для axios
    const mockResponse = { data: 'response data' };
    axios.get.mockResolvedValue(mockResponse);

    const url = 'https://example.com/api';
    const headers = { 'Authorization': 'Bearer token' };
    const params = { search: 'test' };

    // Виклик функції
    const result = await fetchData(url, headers, params);

    // Перевірка результату
    expect(result).toBe('response data');
    
    // Перевірка, що axios.get був викликаний з правильними параметрами
    expect(axios.get).toHaveBeenCalledWith(url, {
      headers: headers,
      params: params
    });
  });
});
