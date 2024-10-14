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


const title_regex = new RegExp('[a-zA-Z]{7,}');

function test_org_title () {
    const title=document.getElementById('orgTitle')
    
    title_regex.test(title)
        if (title==true ()
                
        ) 
        if (title!==true()
        )
    
        title='placeholder'    
}


currentyear.innerHTML='&copy; ' + year.getFullYear() + ' Nate McColm,IDAHO'
lastmodified.innerHTML=todaysdate


const cards=document.querySelectorAll('.card')

cards.forEach((card)=>{

    card.addEventListener('click',()=>{
        const modal_id=card.getAttribute('data-modal')
        const modal=document.getElementById(modal_id)

        if (modal) {
            modal.style.display='block';
        }
    });
});

const close_buttons=document.querySelectorAll('.close')

close_buttons.forEach((close_x) =>{
    close_x.addEventListener('click',()=> {
        close_x.closest('.modal').style.display='none';
    });
});


window.addEventListener('click', (event) => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });







    const mainnav=document.querySelector('.nav')
    const hambutton=document.querySelector('#menu')
 

    hambutton.addEventListener('click', () =>{
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

/*business_spotlight();*/
