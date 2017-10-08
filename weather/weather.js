const request = require('request')

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/82128900d1c4f56667d3364a7c17881c/${lat},${lng}`,
    json: true
  
  }, (error,response,body) => {
    if (!error && response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      
      })
    } else{
      callback('Unable to fetch weather')
    }
  })
}

module.exports = {
  getWeather
}