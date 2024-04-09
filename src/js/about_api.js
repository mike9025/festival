console.log('My JavaScript api is alive!');
const baseUrl = 'https://api.open-meteo.com/v1/forecast'

const queryParams = {
    latitude: '-27.5',
    longitude: '153',
    current_weather: true
}

const queryString = new URLSearchParams(queryParams).toString();

const urlWithParams = baseUrl + "?" + queryString;

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
}

fetch(urlWithParams, requestOptions)
.then(response => response.json())
.then(data => {
    const weather = data.current_weather;
    console.log("Current temperature: " + weather.temperature + 'C');
    const temperature_element = document.getElementById('current_temperature');
const windspeed_element = document.getElementById('current_windspeed');
temperature_element.innerText = weather.temperature + "C";
windspeed_element.innerText = weather.windspeed + "kph";
})
.catch(error => console.log('error', error));


