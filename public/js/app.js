console.log('This is client side app.js');

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')
const errMsg = document.querySelector('#errMsg')



weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log(search.value);
    const location = search.value;

    errMsg.textContent = ''
    message1.textContent = 'Loading...'
    message2.textContent = ''
    
    fetch(`http://localhost:3000/weather?address=${search.value}`).then((response) => {
        response.json().then((data) => {

            
            if (data.error) {
                errMsg.textContent = data.error
                message1.textContent = ''
                message2.textContent = ''
            } else {
                forecastData = {...data.forecast}
                
                errMsg.textContent = ''
                message1.textContent = `Location is ${data.place}.`
                message2.textContent = `It is ${forecastData.weather_descriptions[0]} outsode. Temperature is ${forecastData.temperature}°C and it feels like ${forecastData.feelslike}°C. ${forecastData.precip}% cance of rain today.`
                console.log(forecastData);
            }

        })
    })
})

// fetch('http://localhost:3000/weather?address=gandhinagar').then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     })
// })