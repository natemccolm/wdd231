const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


async function loadweather() {
    const api_key='00822621da60b10ce62d8c5edbef2979'
    const lat='49.7'
    const lon='6.6'
    const weather_url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`

    const pull_weather=await fetch(weather_url);
    const weather_data=await Response.json();

    


}





  