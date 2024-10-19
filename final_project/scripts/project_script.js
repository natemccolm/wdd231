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


const mainnav=document.querySelector('.nav')
const hambutton=document.querySelector('#menu')
const sortNav=document.querySelector('#subNav')

hambutton.addEventListener('click', () =>{
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
	sortNav.classList.toggle('show');
});


  function createDeck(cardsToDisplay) {
	document.querySelector('.res-grid').innerHTML='';
	cardsToDisplay.forEach(cards => {
	let card = document.createElement('Section');
	let cardName = document.createElement('h3');
	let manaCost = document.createElement('p');
    let deck=document.createElement('p');
    let type=document.createElement('p');
	let img = document.createElement('img');

	cardName.textContent=cards.cardName
	manaCost.innerHTML=`<span class='label'>Mana Cost: </span>${cards.manaCost}`;
	deck.innerHTML=`<span class='label'>Deck: </span> ${cards.deck.toUpperCase()}`;
	type.innerHTML=`<span class='label'>Type: </span>${cards.type.toUpperCase()}`;
	img.setAttribute('src', cards.imageUrl);
	img.setAttribute('alt', `${cards.cardName}`);
	img.setAttribute('loading','lazy');
	img.setAttribute('class','cardImage');

	card.appendChild(cardName);
	card.appendChild(manaCost);
	card.appendChild(deck);
	card.appendChild(type);
	card.appendChild(img);

	document.querySelector('.res-grid').appendChild(card);
	})
  	}

const homeLink=document.querySelector('#home')
const vampireDeck=document.querySelector('#vampire');
const dinosaurDeck=document.querySelector('#dinosaur');
const counterDeck=document.querySelector('#counter');
const sliverDeck=document.querySelector('#sliver');
const angelDeck=document.querySelector('#angel');
const artifacts=document.querySelector('#artifacts');
const creatures=document.querySelector('#creatures');
const enchantments=document.querySelector('#enchantments');
const instants=document.querySelector('#instants');
const lands=document.querySelector('#land');
const other=document.querySelector('#other');
const planeswalkers=document.querySelector('#planeswalker');
const sorcery=document.querySelector('#sorcery');


artifacts.addEventListener('click', ()=>{
	if (headingCategory.innerHTML.toLowerCase()=='home'){
	createDeck(cards)
	let artifactQuantity=cards.filter(cards=>cards.type=='artifact')
	cardCount.innerHTML=`There are ${artifactQuantity.length} cards of this type across all decks.`
	createDeck(artifactQuantity)		
	}
	if (headingCategory.innerHTML.toLocaleLowerCase() !=='home'){
	let deckBuild=cards.filter(cards=>cards.deck==(headingCategory.innerHTML.toLowerCase()))
    let artifactQuantity=deckBuild.filter(deckBuild=>deckBuild.type=='artifact')
	cardCount.innerHTML=`There are ${artifactQuantity.length} cards of this type in this deck.`
    createDeck(artifactQuantity)}

})

creatures.addEventListener('click', ()=>{

	if (headingCategory.innerHTML.toLowerCase()=='home'){
		createDeck(cards)
		let creatureQuantity=cards.filter(cards=>cards.type=='creature')
		cardCount.innerHTML=`There are ${creatureQuantity.length} cards of this type in this deck.`
		createDeck(creatureQuantity)		
		}
	if (headingCategory.innerHTML.toLocaleLowerCase() !=='home'){
	let deckBuild=cards.filter(cards=>cards.deck==(headingCategory.innerHTML.toLowerCase()))
	let creatureQuantity=deckBuild.filter(deckBuild=>deckBuild.type=='creature')
	cardCount.innerHTML=`There are ${creatureQuantity.length} cards of this type in this deck.`
	createDeck(creatureQuantity)}
})

instants.addEventListener('click', ()=>{
	if (headingCategory.innerHTML.toLowerCase()=='home'){
	createDeck(cards)
	let instantQuantity=cards.filter(cards=>cards.type=='instant')
	cardCount.innerHTML=`There are ${instantQuantity.length} cards of this type across all decks.`
	createDeck(instantQuantity)		
	}
	if (headingCategory.innerHTML.toLocaleLowerCase() !=='home'){
	let deckBuild=cards.filter(cards=>cards.deck==(headingCategory.innerHTML.toLowerCase()))
	let instantQuantity=deckBuild.filter(deckBuild=>deckBuild.type=='instant')
	cardCount.innerHTML=`There are ${instantQuantity.length} cards of this type in this deck.`
	createDeck(instantQuantity)}
})

enchantments.addEventListener('click', ()=>{
	if (headingCategory.innerHTML.toLowerCase()=='home'){
		createDeck(cards)
		let enchantmentQuantity=cards.filter(cards=>cards.type=='enchantment')
		cardCount.innerHTML=`There are ${enchantmentQuantity.length} cards of this type across all decks.`
		createDeck(enchantmentQuantity)		
		}
		if (headingCategory.innerHTML.toLocaleLowerCase() !=='home'){
		let deckBuild=cards.filter(cards=>cards.deck==(headingCategory.innerHTML.toLowerCase()))
		let enchantmentQuantity=deckBuild.filter(deckBuild=>deckBuild.type=='enchantment')
		cardCount.innerHTML=`There are ${enchantmentQuantity.length} cards of this type in this deck.`
		createDeck(enchantmentQuantity)}
})

lands.addEventListener('click', ()=>{
	if (headingCategory.innerHTML.toLowerCase()=='home'){
		createDeck(cards)
		let landQuantity=cards.filter(cards=>cards.type=='land')
		cardCount.innerHTML=`There are ${landQuantity.length} cards of this type across all decks.`
		createDeck(landQuantity)		
		}
		if (headingCategory.innerHTML.toLocaleLowerCase() !=='home'){
		let deckBuild=cards.filter(cards=>cards.deck==(headingCategory.innerHTML.toLowerCase()))
		let landQuantity=deckBuild.filter(deckBuild=>deckBuild.type=='land')
		cardCount.innerHTML=`There are ${landQuantity.length} cards of this type in this deck.`
		createDeck(landQuantity)}
})

other.addEventListener('click', ()=>{
	if (headingCategory.innerHTML.toLowerCase()=='home'){
		createDeck(cards)
		let otherQuantity=cards.filter(cards=>cards.type=='other')
		cardCount.innerHTML=`There are ${otherQuantity.length} cards of this type across all decks.`
		createDeck(otherQuantity)		
		}
		if (headingCategory.innerHTML.toLocaleLowerCase() !=='home'){
		let deckBuild=cards.filter(cards=>cards.deck==(headingCategory.innerHTML.toLowerCase()))
		let otherQuantity=deckBuild.filter(deckBuild=>deckBuild.type=='other')
		cardCount.innerHTML=`There are ${otherQuantity.length} cards of this type in this deck.`
		createDeck(otherQuantity)}
})

planeswalkers.addEventListener('click', ()=>{
	if (headingCategory.innerHTML.toLowerCase()=='home'){
		createDeck(cards)
		let planeswalkerQuantity=cards.filter(cards=>cards.type=='planeswalker')
		cardCount.innerHTML=`There are ${planeswalkerQuantity.length} cards of this type across all decks.`
		createDeck(planeswalkerQuantity)		
		}
		if (headingCategory.innerHTML.toLocaleLowerCase() !=='home'){
		let deckBuild=cards.filter(cards=>cards.deck==(headingCategory.innerHTML.toLowerCase()))
		let planeswalkerQuantity=deckBuild.filter(deckBuild=>deckBuild.type=='planeswalker')
		cardCount.innerHTML=`There are ${planeswalkerQuantity.length} cards of this type in this deck.`
		createDeck(planeswalkerQuantity)}
})

sorcery.addEventListener('click', ()=>{
	if (headingCategory.innerHTML.toLowerCase()=='home'){
		createDeck(cards)
		let sorceryQuantity=cards.filter(cards=>cards.type=='sorcery')
		cardCount.innerHTML=`There are ${sorceryQuantity.length} cards of this type across all decks.`
		createDeck(sorceryQuantity)		
		}
		if (headingCategory.innerHTML.toLocaleLowerCase() !=='home'){
		let deckBuild=cards.filter(cards=>cards.deck==(headingCategory.innerHTML.toLowerCase()))
		let sorceryQuantity=deckBuild.filter(deckBuild=>deckBuild.type=='sorcery')
		cardCount.innerHTML=`There are ${sorceryQuantity.length} cards of this type in this deck.`
		createDeck(sorceryQuantity)}
})

all.addEventListener('click', ()=>{
	if (headingCategory.innerHTML.toLowerCase()=='home'){
		createDeck(cards)
		cardCount.innerHTML='There are ' +cards.length + ' cards across all decks.'		
		}
		if (headingCategory.innerHTML.toLocaleLowerCase() !=='home'){
		let deckBuild=cards.filter(cards=>cards.deck==(headingCategory.innerHTML.toLowerCase()))
		cardCount.innerHTML='There are ' +deckBuild.length + ' cards in this deck.'
		createDeck(deckBuild)}
})

window.addEventListener("load", (event) => {

	console.log(window.location.href)
	var currentPage=window.location.href
	 if (currentPage.includes('index')) {
		cardCount.innerHTML=`Thank you for visiting. Please click a deck in the above menu, or a type in the submenu, to view the contents.`
		createDeck(cards);
	 }

	 if (currentPage.includes('vampire')) {

		let vampireDeckBuild=cards.filter(cards => cards.deck=='vampire');
		cardCount.innerHTML=`There are ${vampireDeckBuild.length} unique cards in this deck.`
		headingCategory.innerHTML='Vampire';
		createDeck(vampireDeckBuild);
	 }


	 if (currentPage.includes('dinosaur')) {
		let dinosaurDeckBuild=cards.filter(cards => cards.deck=='dinosaur');
		createDeck(dinosaurDeckBuild);
		cardCount.innerHTML=`There are ${dinosaurDeckBuild.length} unique cards in this deck.`
		headingCategory.innerHTML='Dinosaur';
	 }

	 if (currentPage.includes('counter')) {
		let counterDeckBuild=cards.filter(cards=> cards.deck=='counter');
		createDeck(counterDeckBuild);
		cardCount.innerHTML=`There are ${counterDeckBuild.length} unique cards in this deck.`
		headingCategory.innerHTML='Counter';
	 }

	 if (currentPage.includes('sliver')) {
		let sliverDeckBuild=cards.filter(cards=> cards.deck=='sliver');
		createDeck(sliverDeckBuild);
		cardCount.innerHTML=`There are ${sliverDeckBuild.length} unique cards in this deck.`
		headingCategory.innerHTML='Sliver';
	 }

	 if (currentPage.includes('angel')) {
		let angelDeckBuild=cards.filter(cards=> cards.deck=='angel');
		createDeck(angelDeckBuild);
		cardCount.innerHTML=`There are ${angelDeckBuild.length} unique cards in this deck.`
		headingCategory.innerHTML='Angel';
	 }
	 
});


const reviewsDisplay = document.querySelector("#review")
let numReviews = GetReviews()

if (document.title === "Deck Review") {
	addEventListener('DOMContentLoaded', function() {
	  numReviews++
	  DisplayReviews(numReviews);
	  SetReviews();
	})
	}
	
	function GetReviews() {
	return JSON.parse(this.localStorage.getItem("numReviews"))
	}
	
	function DisplayReviews(reviews) {
	reviewsDisplay.innerHTML = reviews;
	}
	
	function SetReviews() {
	this.localStorage.setItem("numReviews", JSON.stringify(numReviews))
	}

	