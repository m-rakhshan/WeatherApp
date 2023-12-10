const URLS = {
  WEATHER_API: (latitude, longitude) => `http://api.weatherapi.com/v1/current.json?key=e23f9fb184bc4b1a8ff124910230808&q=${latitude},${longitude}`,
};
module.exports = { URLS };
