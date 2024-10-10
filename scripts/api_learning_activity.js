


async function loadweather () {

const api_key='00822621da60b10ce62d8c5edbef2979'
const lat='49.7'
const lon='6.6'
const weather_url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=imperial`

const response=await fetch (weather_url)
console.log(response)

const data=await response.json();
const post_temp=document.getElementById('current-temp');
const temperature=Math.round(data.main.temp);
post_temp.innerHTML=`${temperature}`

}

loadweather ();