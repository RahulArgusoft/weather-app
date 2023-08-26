const request = require('request')

const geoCode = (address, callbackFxn) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/encodeURIComponent(${address}).json?access_token=pk.eyJ1Ijoicmt1bWFyMjAwMSIsImEiOiJjbGxveHpvcHkwMTJrM2pyNGdnYWk1YjcxIn0.Pt72s97srhSHI-9Wjg2Pug&limit=1`;

    request({url, json: true}, (error, { body } = {}) => {    //here, shorthand syntax of ES6 is used with url and (body) is taken after destructuring response object, also body is assigned an undefined value as default value if in case response object is undefined.
        if(error) {
            callbackFxn('Unable to fetch the geocode location!!', undefined)
        } else if(body.features.length === 0) {
            callbackFxn('Location not found!!', undefined)
        } else {
            const data = {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                place: body.features[0].place_name
            }
            callbackFxn(undefined,data)
        }
    })
}


module.exports = geoCode