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


const current_url=window.location.href;
const everything=current_url.split('?');
let form_data=everything[1].split('&');

function show(cup){
form_data.forEach((element)=>{  
    console.log(element)  
    if (element.startsWith(cup)){
        console.log("Found a match")
        result=element.split('=')[1].replace("%40","@")
            }
        })
    return result;
    };

const info_filled=document.querySelector('#info_display');
info_filled.innerHTML=`
<p>First name: ${show("firstName")} ${show('lastName')}</p>
<p>Organization: ${show("orgName")}</p>
<p>Title: ${show("orgTitle")}</p>
<p>Email: ${show("email")}</p>
<p>Membership option: ${show("member_level")}</p>
<p>Description: ${show("description")}</p>

`

const mainnav=document.querySelector('.nav')
const hambutton=document.querySelector('#menu')


hambutton.addEventListener('click', () =>{
mainnav.classList.toggle('show');
hambutton.classList.toggle('show');
});
