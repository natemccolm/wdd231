const currentyear=document.querySelector('#currentyear')
const lastmodified=document.querySelector('#lastModified')
const headingCategory=document.querySelector('#category')
const cardCount=document.querySelector('#cardNum')


const year=new Date();
const todaysdate=new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(year)

currentyear.innerHTML='&copy; ' + year.getFullYear() + ' Nate McColm,IDAHO'
lastmodified.innerHTML=todaysdate

const sort_classes=document.querySelector('.classes');
const sort_all=document.querySelector('#all');
const sort_wdd=document.querySelector('#wdd');
const sort_cse=document.querySelector('#cse');

function sorting(classes_sorting){
    document.querySelector('.classes').innerHTML='';
    let total_credits=0
    classes_sorting.forEach(fitlered_courses => {
    let class_section=document.createElement('li');
    let class_button=`${fitlered_courses.subject} ${fitlered_courses.number}`;
    class_section.innerHTML=class_button;
    if (fitlered_courses.completed) {
        class_section.setAttribute('class','green')
        
    }
    else {class_section.setAttribute('class', 'red')} 
    total_credits=fitlered_courses.credits + total_credits


    document.querySelector('.classes').appendChild(class_section)

    });
    document.querySelector('#credits').innerHTML=`-${total_credits} credits remaining.`
}

sort_all.addEventListener('click', ()=>{
        sorting(courses);
    

}) 

sort_wdd.addEventListener('click', () =>{
    let sorted_classes=courses.filter(courses=>courses.subject=='WDD')
        sorting(sorted_classes)
}
)

sort_cse.addEventListener('click', () =>{
    let sorted_classes=courses.filter(courses=>courses.subject=='CSE')
        sorting(sorted_classes)
}



)

const mainnav=document.querySelector('.nav')
const hambutton=document.querySelector('#menu')


hambutton.addEventListener('click', () =>{
mainnav.classList.toggle('show');
hambutton.classList.toggle('show');
});