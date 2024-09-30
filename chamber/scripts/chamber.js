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


document.addEventListener("DOMContentLoaded", async () => {
    const member_grid = document.getElementById("member_spread");
    const view_swap = document.getElementById("view_swap");

    async function fetch_members() {
        const response = await fetch('../chamber/data/members.json');
        const members = await response.json();
        return members;
    }

    function pull_members(members, isGridView) {
        member_grid.innerHTML = "";  
        member_grid.className = isGridView ? 'grid_view' : 'list_view';

        members.forEach(member => {
            const member_card = document.createElement("div");
            member_card.classList.add("member_card");

            member_card.innerHTML = `
                <img src=${member.logo} alt="${member.name}">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${member.membership}</p>
                <p>${member.description}</p>
                `;
            member_grid.appendChild(member_card);
        });
    }

    const members = await fetch_members();
    let isGridView = true;
    pull_members(members, isGridView);

    view_swap.addEventListener("click", () => {
        isGridView = !isGridView;
        pull_members(members, isGridView);
    });

    const mainnav=document.querySelector('#navSpacing')
    const hambutton=document.querySelector('#menu')
 

    hambutton.addEventListener('click', () =>{
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});
});
