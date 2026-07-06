const URLS = {
  WEATHER_API: (latitude, longitude) => `http://api.weatherapi.com/v1/current.json?key={API_KEY}&q=${latitude},${longitude}`,
};
module.exports = { URLS };
