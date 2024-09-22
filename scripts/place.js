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

let temperature=52
let windSpeed=7
const windchillTotal= 5.74 + 0.6215 * temperature - 35.75 * windSpeed ** 0.16 + 0.4275 * temperature * windSpeed ** 0.16
if ((temperature<=50) && (windSpeed>3)){
    calculateWindchill.innerHTML=Math.round(windchillTotal) + ' MPH'}
else {
    calculateWindchill.innerHTML="NA"
}