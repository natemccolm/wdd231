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

const pullList=document.querySelector('#productID')




const products = [
	{
	  id: 'fc-1888',
	  name: "flux capacitor",
	  averagerating: 4.5
	},
	{
	  id: 'fc-2050',
	  name: "power laces",
	  averagerating: 4.7
	},
	{
	  id: 'fs-1987',
	  name: "time circuits",
	  averagerating: 3.5
	},
	{
	  id: 'ac-2000',
	  name: "low voltage reactor",
	  averagerating: 3.9
	},
	{
	  id: 'jj-1969',
	  name: "warp equalizer",
	  averagerating: 5.0
	}
  ];

  for (element in products) {
	var opt=document.createElement('option')
	opt.value=products[element].id;
	opt.innerHTML=products[element].name;
	pullList.appendChild(opt)
  }

  
if 
