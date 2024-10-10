async function business_spotlight () {
    
    const get_data=await fetch('../chamber/data/members.json')
    const members=await get_data.json
    
    try {

        const ranking=members.filter(members=> members.membership=='Gold' || membership=='Silver')
        const random_select=shuffle_members(ranking).slice(0,3)

        const spotlight_div=document.getElementById('#spotlight');
        spotlight_div.innerHTML=random_select.map(members =>`
            <div class="business_spotlight">
            <img src="../images${members.logo}" alt="${members.name} logo">
            <h3>${members.name}</h3>
            <p>Phone: ${members.phone}</p>
            <p>Additional Info: ${members.description}</p>
            <a href="${members.website}">${members.website}></a>            
            </div>
            `).join('');}
    
    catch (error) {
        console.error('Error loading spotlights:', error)
    }
    }
    
function random_select(array){
    return array.sort(()=> 0.5-Math.random)
}

/*async function loadweather() {
    const api_key='00822621da60b10ce62d8c5edbef2979'
    const city='Pocatello'
    const lat='42.86'
    const lon='-112.44'
    const weather_url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`


    const pull_weather=await fetch(weather_url);
    const weather_data=await Response.json();




}*/
