const currentyear=document.querySelector('#currentyear')
const lastmodified=document.querySelector('#lastModified')
const headingCategory=document.querySelector('#category')



const year=new Date();
const todaysdate=new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(year)


async function loadweather() {
    const api_key='5905ae91e1231e40f69bbe8513baa58c';
    const lat='42.86'
    const lon='-112.44'
    const weather_url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=imperial`

    const response=await fetch (weather_url)
    
    
    const data=await response.json();
    const post_temp=document.querySelector('.current-temp');
    const temperature=Math.round(data.main.temp);

    let title=document.createElement('h2');
    let current_temp=document.createElement('p');
    let feels_like=document.createElement('p')
    let humidity=document.createElement('p')
    let max_temp=document.createElement('p')
    let min_temp=document.createElement('p')
    
    title.innerHTML='Current Weather in Pocatello';
    current_temp.innerHTML=`Current temperature: ${temperature}`
    feels_like.innerHTML=`Feels like: ${Math.round(data.main.feels_like)}`
    humidity.innerHTML=`Humidity: ${data.main.humidity}`
    max_temp.innerHTML=`Today's high: ${Math.round(data.main.temp_max)}`
    min_temp.innerHTML=`Today's low: ${Math.round(data.main.temp_min)}`

    post_temp.appendChild(title);
    post_temp.appendChild(current_temp);
    post_temp.appendChild(feels_like);
    post_temp.appendChild(humidity);
    post_temp.appendChild(max_temp);
    post_temp.appendChild(min_temp);

}


async function getForecast() {
    const api_key='00822621da60b10ce62d8c5edbef2979'
    const lat='42.86'
    const lon='-112.44'
    const weather_url=`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=imperial`

    const response=await fetch (weather_url)
    const post_forecast=document.getElementsByClassName('3_day_forecast');
    
    const data=await response.json();



    // Get today and the next two days' temperatures
    const forecastData = data.list.filter(item => item.dt_txt.includes("12:00:00")); // Get data for midday each day

    // Get day names (today + next two days)
    const today = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Generate HTML for each day's forecast
    const forecastHTML = forecastData.slice(0, 3).map((dayData, index) => {
        const dayName = days[(today.getDay() + index) % 7];  // Get current day and next two days
        return `<p>${dayName}: ${Math.round(dayData.main.temp_max)}°F</p>`;
    });

    let title=document.createElement('h2');
    let forecast=forecastHTML;

    title.innerHTML="Current forecast: ";

    post_forecast[0].appendChild(title);
    forecast.forEach(element => {
        post_forecast[0].innerHTML+=element
    });

   
}


loadweather();
getForecast();


async function loadSpotlights() {
    try {
        const response = await fetch('../chamber/data/members.json'); 
        const members = await response.json();

        const goldAndSilver = members.filter(member => member.membership === 'Gold' || member.membership === 'Silver');
        
        // Select 2-3 random members
        const randomMembers = shuffleArray(goldAndSilver).slice(0, 3);

        const spotlightContainer = document.getElementById('spotlight');

        randomMembers.forEach(element => {
            let box=document.createElement('div');
            let business_logo=document.createElement('img');
            let business_name=document.createElement ('h2');
            let phone=document.createElement('p');
            let description=document.createElement('p');
            let website=document.createElement('a');
    
    
            box.setAttribute('class','random_businesses');
            business_logo.setAttribute('src', element.logo);
            business_logo.setAttribute('alt', element.name);
            business_logo.setAttribute('loading', 'lazy');
            website.setAttribute('href',element.website)

            business_name.innerHTML=`Business name: ${element.name}`;
            phone.innerHTML=`Phone number: ${element.phone}`;
            description.innerHTML=`About: ${element.description}`;
            website.innerHTML=`${element.name}`
    
            box.appendChild(business_logo);
            box.appendChild(business_name);
            box.appendChild(phone);
            box.appendChild(description);
            box.appendChild(website);
    
            spotlightContainer.appendChild(box);
        })}
     catch (error) {
        console.error('Error loading spotlights:', error);
    }
}




function shuffleArray(array) {
    return array.sort(() => 0.5 - Math.random());
}

loadSpotlights();


currentyear.innerHTML='&copy; ' + year.getFullYear() + ' Nate McColm,IDAHO'
lastmodified.innerHTML=todaysdate








    const mainnav=document.querySelector('.nav')
    const hambutton=document.querySelector('#menu')
 

    hambutton.addEventListener('click', () =>{
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

/*business_spotlight();*/
