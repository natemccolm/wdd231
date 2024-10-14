const current_url=window.location.href;

console.log(current_url);

const everything=current_url.split('?');

console.log(everything);

let form_data=everything[1].split('&');

console.log(form_data);

function show(cup){

console.log(cup)
form_data.forEach((element)=>{
    console.log(element)
    if (element.startsWith(cup)){
        console.log("Found a match")
        result=element.split('=')[1].replace("%40","@")
    }


    })
    return result;
};

const showInfo=document.querySelector('#results');
showInfo.innerHTML=`
<p>Appointment for ${show("first")} ${show("last")}</p>
<p>Phone number: ${show("phone")}             </p>
<p>Confirmed for ${show("ordinance")} on ${show("fecha")} at ${show("location")}</p>
<p>Email: ${show("email")}             </p>

`


