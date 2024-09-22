const currentyear=document.querySelector('#currentyear')
const lastmodified=document.querySelector('#lastModified')


const year=new Date();
const todaysdate=new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(year)

currentyear.innerHTML='&copy; ' + year.getFullYear() + ' Nate McColm,IDAHO'
lastmodified.innerHTML=todaysdate


const mainnav=document.querySelector('.nav')
const hambutton=document.querySelector('#menu')

hambutton.addEventListener('click', () =>{
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},

	{
		templeName: "Oakland, California",
		location: "Oakland, California",
		dedicated: "1964, November, 17th",
		area: 80157,
		imageUrl:
		"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Oaklandfront.JPG/1280px-Oaklandfront.JPG"
	  },

	  {
		templeName: "Pocatello, Idaho",
		location: "Pocatello, Idaho",
		dedicated: "2021, November, 7th",
		area: 71725,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/pocatello-idaho-temple/pocatello-idaho-temple-23276-main.jpg"
	  },

	  {
		templeName: "Indianapolis, Indiana",
		location: "Indianapolis, Indiana",
		dedicated: "2015, August, 23rd",
		area: 116642,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/indianapolis-indiana-temple/indianapolis-indiana-temple-11080.jpg"
	  },
  ];




createTempleCard(temples);

  function createTempleCard(templesToDisplay) {
	document.querySelector('.res-grid').innerHTML='';
	templesToDisplay.forEach(temple => {
	let card = document.createElement('Section');
	let name = document.createElement('h3');
	let location = document.createElement('p');
	let dedication = document.createElement('p');
	let area = document.createElement('p');
	let img = document.createElement('img');

	name.textContent=temple.templeName
	location.innerHTML=`<span class='label'>Location: </span>${temple.location}`;
	dedication.innerHTML=`<span class='label'>Dedicated: </span> ${temple.dedicated}`;
	area.innerHTML=`<span class='label'>Size: </span>${temple.area} sq ft`;
	img.setAttribute('src', temple.imageUrl);
	img.setAttribute('alt', `${temple.templeName} Temple`);
	img.setAttribute('loading','lazy');
	img.setAttribute('class','templeImage');

	card.appendChild(name);
	card.appendChild(location);
	card.appendChild(dedication);
	card.appendChild(area);
	card.appendChild(img);

	document.querySelector('.res-grid').appendChild(card);
	})
  	}

const templeOld=document.querySelector('#temple-old');

templeOld.addEventListener('click', () => {
	let oldTemple=temples.filter (temples => temples.dedicated.split(',')[0].includes('18'));
	createTempleCard(oldTemple);
	})

const templeNew=document.querySelector('#temple-new');


templeNew.addEventListener('click', () => {
	let newTemple=temples.filter (temples => temples.dedicated.split(',')[0].includes('20'));
	createTempleCard(newTemple);
	})

const templeLarge=document.querySelector('#temple-large');


	templeLarge.addEventListener('click', () => {
	let largeTemple=temples.filter (temples => temples.area>90000);
	createTempleCard(largeTemple);
	})

const templeSmall=document.querySelector('#temple-small');

templeSmall.addEventListener('click', () => {
	let smallTemple=temples.filter (temples => temples.area<10000);
	createTempleCard(smallTemple);
	})

const templeHome=document.querySelector('#temple-home');

templeHome.addEventListener('click', () => {
	createTempleCard(temples);
	})


