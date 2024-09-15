const axios = require('axios');

/**
 * Функція для виконання GET запиту.
 * @param {string} url - URL для запиту.
 * @returns {Promise} - Обіцянка з результатами запиту.
 */
async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Не вдалося отримати дані: ' + error.message);
  }
}

module.exports = fetchData;
