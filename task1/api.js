const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://invalid.url.com');
    return response.data;
  } catch (error) {
    throw new Error('Не вдалося отримати дані: ' + error.message);
  }
}

module.exports = fetchData;
