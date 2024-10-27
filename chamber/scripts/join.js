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


// Select all cards and close buttons
const modalCards = document.querySelectorAll('.card');
const closeButtons = document.querySelectorAll('.close');

// Function to open modal with fade-in effect
function openModal(modal) {
  modal.classList.add('show'); // Add the show class to fade in
  modal.classList.remove('fade-out'); // Ensure fade-out class is removed
}

// Function to close modal with fade-out effect
function closeModal(modal) {
  modal.classList.add('fade-out'); // Start fade-out transition
  modal.classList.remove('show'); // Remove the show class for opacity transition
  setTimeout(() => {
    modal.style.display = 'none'; // Fully hide after fade-out
    modal.classList.remove('fade-out'); // Reset fade-out class
  }, 300); // Duration matches the fade-out transition
}

// Loop through each card and add click event to open corresponding modal
modalCards.forEach((card) => {
  card.addEventListener('click', () => {
    const modalId = card.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'flex'; // Make modal visible before applying fade
      openModal(modal);
    }
  });
});

// Close modals when close button is clicked
closeButtons.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    const modal = closeBtn.closest('.modal');
    if (modal) closeModal(modal);
  });
});

// Close modal when clicking outside of modal content
window.addEventListener('click', (event) => {
  const modals = document.querySelectorAll('.modal');
  modals.forEach((modal) => {
    if (event.target === modal) closeModal(modal);
  });
});

