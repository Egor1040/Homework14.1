const axios = require('axios');

/**
 * Функція для виконання запиту з кастомними заголовками та параметрами.
 * @param {string} url - URL для запиту.
 * @param {Object} headers - Об'єкт кастомних заголовків.
 * @param {Object} params - Об'єкт параметрів URL.
 * @returns {Promise} - Обіцянка з результатами запиту.
 */
async function fetchData(url, headers, params) {
  try {
    const response = await axios.get(url, {
      headers: headers,
      params: params
    });
    return response.data;
  } catch (error) {
    throw new Error('Запит не вдався: ' + error.message);
  }
}

module.exports = fetchData;
