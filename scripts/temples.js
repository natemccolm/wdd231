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