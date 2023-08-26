const request = require('request')

const foreCast = (latitude, longitude, callbackFxn) => {
    const WeatherUrl = `http://api.weatherstack.com/current?access_key=376dccda59e553dc9be73e2604e0b0d1&query=${latitude},${longitude}`;

    request({url: WeatherUrl, json: true}, (error, response) => {
        if (error) {
            callbackFxn('Unable to fetch weather forecast', undefined)
        } else if(response.body.error) {
            callbackFxn(`Error: ${response.body.error.type}`)
        } else {
            const data = response.body.current
            callbackFxn(undefined, data)
            
        }        
    })

}


module.exports = foreCast