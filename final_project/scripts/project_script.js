const currentyear = document.querySelector('#currentyear');
const lastmodified = document.querySelector('#lastModified');
const headingCategory = document.querySelector('#category');
const cardCount = document.querySelector('#cardNum');

const year = new Date();
const todaysdate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(year);

currentyear.innerHTML = '&copy; ' + year.getFullYear() + ' Nate McColm, IDAHO';
lastmodified.innerHTML = todaysdate;

const mainnav = document.querySelector('.nav');
const hambutton = document.querySelector('#menu');
const sortNav = document.querySelector('#subNav');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    sortNav.classList.toggle('show');
});


function createDeck(cardsToDisplay) {
    document.querySelector('.res-grid').innerHTML = '';
    cardsToDisplay.forEach(cards => {
        let card = document.createElement('section');
        let cardName = document.createElement('h3');
        let manaCost = document.createElement('p');
        let deck = document.createElement('p');
        let type = document.createElement('p');
        let img = document.createElement('img');

        cardName.textContent = cards.cardName;
        manaCost.innerHTML = `<span class='label'>Mana Cost: </span>${cards.manaCost}`;
        deck.innerHTML = `<span class='label'>Deck: </span> ${cards.deck.toUpperCase()}`;
        type.innerHTML = `<span class='label'>Type: </span>${cards.type.toUpperCase()}`;
        img.setAttribute('src', cards.imageUrl);
        img.setAttribute('alt', `${cards.cardName}`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('class', 'cardImage');

        img.addEventListener('click', () => fetchAndDisplayCard(cards.cardName));

        card.appendChild(cardName);
        card.appendChild(manaCost);
        card.appendChild(deck);
        card.appendChild(type);
        card.appendChild(img);

        document.querySelector('.res-grid').appendChild(card);
    });
}

const homeLink = document.querySelector('#home');
const vampireDeck = document.querySelector('#vampire');
const dinosaurDeck = document.querySelector('#dinosaur');
const counterDeck = document.querySelector('#counter');
const sliverDeck = document.querySelector('#sliver');
const angelDeck = document.querySelector('#angel');
const artifacts = document.querySelector('#artifacts');
const creatures = document.querySelector('#creatures');
const enchantments = document.querySelector('#enchantments');
const instants = document.querySelector('#instants');
const lands = document.querySelector('#land');
const other = document.querySelector('#other');
const planeswalkers = document.querySelector('#planeswalker');
const sorcery = document.querySelector('#sorcery');

window.addEventListener("load", (event) => {
    console.log(window.location.href);
    var currentPage = window.location.href;

    if (currentPage.includes('index')) {
        cardCount.innerHTML = `Thank you for visiting. Please click a deck in the above menu, or a type in the submenu, to view the contents.`;
        createDeck(cards);
    }

    if (currentPage.includes('vampire')) {
        let vampireDeckBuild = cards.filter(cards => cards.deck == 'vampire');
        cardCount.innerHTML = `There are ${vampireDeckBuild.length} unique cards in this deck.`;
        headingCategory.innerHTML = 'Vampire';
        createDeck(vampireDeckBuild);
    }

    if (currentPage.includes('dinosaur')) {
        let dinosaurDeckBuild = cards.filter(cards => cards.deck == 'dinosaur');
        cardCount.innerHTML = `There are ${dinosaurDeckBuild.length} unique cards in this deck.`;
        headingCategory.innerHTML = 'Dinosaur';
        createDeck(dinosaurDeckBuild);
    }

    if (currentPage.includes('counter')) {
        let counterDeckBuild = cards.filter(cards => cards.deck == 'counter');
        cardCount.innerHTML = `There are ${counterDeckBuild.length} unique cards in this deck.`;
        headingCategory.innerHTML = 'Counter';
        createDeck(counterDeckBuild);
    }

    if (currentPage.includes('sliver')) {
        let sliverDeckBuild = cards.filter(cards => cards.deck == 'sliver');
        cardCount.innerHTML = `There are ${sliverDeckBuild.length} unique cards in this deck.`;
        headingCategory.innerHTML = 'Sliver';
        createDeck(sliverDeckBuild);
    }

    if (currentPage.includes('angel')) {
        let angelDeckBuild = cards.filter(cards => cards.deck == 'angel');
        cardCount.innerHTML = `There are ${angelDeckBuild.length} unique cards in this deck.`;
        headingCategory.innerHTML = 'Angel';
        createDeck(angelDeckBuild);
    }
});

function handleCardTypeClick(cardType) {
    const isHome = headingCategory.innerHTML.toLowerCase() === 'home';
    const currentCards = isHome ? cards : cards.filter(card => card.deck === headingCategory.innerHTML.toLowerCase());
    const filteredCards = currentCards.filter(card => card.type === cardType);
    
    cardCount.innerHTML = isHome 
        ? `There are ${filteredCards.length} cards of this type across all decks.`
        : `There are ${filteredCards.length} cards of this type in this deck.`;

    createDeck(filteredCards);
}

artifacts.addEventListener('click', () => handleCardTypeClick('artifact'));
creatures.addEventListener('click', () => handleCardTypeClick('creature'));
instants.addEventListener('click', () => handleCardTypeClick('instant'));
enchantments.addEventListener('click', () => handleCardTypeClick('enchantment'));
lands.addEventListener('click', () => handleCardTypeClick('land'));
other.addEventListener('click', () => handleCardTypeClick('other'));
planeswalkers.addEventListener('click', () => handleCardTypeClick('planeswalker'));
sorcery.addEventListener('click', () => handleCardTypeClick('sorcery'));

all.addEventListener('click', () => {
    const isHome = headingCategory.innerHTML.toLowerCase() === 'home';
    const count = isHome ? cards.length : cards.filter(card => card.deck === headingCategory.innerHTML.toLowerCase()).length;
    cardCount.innerHTML = `There are ${count} cards ${isHome ? 'across all decks' : 'in this deck'}.`;
    createDeck(isHome ? cards : cards.filter(card => card.deck === headingCategory.innerHTML.toLowerCase()));
});





const modal = document.getElementById('cardModal');
const modalContent = document.getElementById('modalContent');
modal.style.display = 'none'; // Hidden by default

async function fetchAndDisplayCard(cardName) {
    const sanitizedCardName = cardName.replace(/,\s*$/, '').trim();

    try {
        const response = await fetch(`https://api.scryfall.com/cards/named?exact=${encodeURIComponent(sanitizedCardName)}`);
        
        if (!response.ok) throw new Error('Card not found');

        const card = await response.json();

        displayCardData(card);
    } catch (error) {
        console.error('Error fetching card data:', error);

        if (error.message.includes('CORS') || error.message.includes('Card not found')) {
            console.log('Attempting to retrieve card data from local array.');

            const matchingCard = cards.find(c => c.cardName.toLowerCase() === sanitizedCardName.toLowerCase());

            if (matchingCard) {
                displayCardData(matchingCard);
            } else {
                showErrorMessage(error.message);
            }
        } else {
            showErrorMessage(error.message); 
        }
    }
}


function displayCardData(card) {
    modalContent.innerHTML = ''; 

    const cardNameElement = document.createElement('h2');
    cardNameElement.textContent = card.name;

    const cardImage = document.createElement('img');
    cardImage.src = card.image_uris ? card.image_uris.normal : 'placeholder-image.jpg'; 

    const cardDetails = document.createElement('p');
    cardDetails.textContent = `Type: ${card.type_line}, Mana Cost: ${card.mana_cost || 'N/A'}`;

    modalContent.appendChild(cardNameElement);
    modalContent.appendChild(cardImage);
    modalContent.appendChild(cardDetails);

    displayModal(); 
}

function displayModal() {
    modal.classList.add('show'); 
    modal.style.display = 'flex'; 
}


function showErrorMessage(message) {
    modalContent.innerHTML = `<p>Error: ${message}</p>`; 
    displayModal(); 
}


document.body.addEventListener('click', (event) => {
    if (event.target.id === 'closeModal' || event.target.classList.contains('close')) {
        modal.classList.remove('show'); 
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500); 
    }

    
    if (event.target === modal) {
        modal.classList.remove('show'); 
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500); 
    }
});




const cardModal = document.getElementById('cardModal');
const closeModalButton = document.getElementById('closeModal');
const closeButtonSpan = document.querySelector('.close');


if (document.querySelector('.norris')) {
	const jokeDisplay = document.getElementById('joke');
	const jokeButton = document.getElementById('jokeButton');

	jokeButton.addEventListener('click', fetchJoke);

	async function fetchJoke() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        jokeDisplay.textContent = data.value; 
    } catch (error) {
        jokeDisplay.textContent = 'Failed to fetch a joke. Please try again later.';
        console.error('Error fetching joke:', error);
    }
}
}

function storeReview(newReview) {
    let reviews = getReviews();
    reviews.push(newReview); 
    localStorage.setItem('reviews', JSON.stringify(reviews)); 
    localStorage.setItem('recentReview', newReview); 
}


function getReviews() {
    let reviews = localStorage.getItem('reviews');
    return reviews ? JSON.parse(reviews) : []; 
}

function getRecentReview() {
    return localStorage.getItem('recentReview'); 
}

function submitReview(rating, review, name) {
    const newReview = `Rating: ${rating}, Review: ${review}, Name: ${name || 'Anonymous'}`; // 
    storeReview(newReview); 
}


if (document.title !== 'Deck Review') {
    document.querySelector('#submit-button').addEventListener('click', (event) => {
        event.preventDefault(); 

        const userReview = document.querySelector('#reviewInput').value;
        const userName = document.querySelector('#name-input').value; 
        const rating = document.querySelector('input[name="rating"]:checked'); 

        if (userReview.trim() !== '' && rating) { 
            submitReview(rating.id.charAt(0), userReview, userName); 
            window.location.href = '../final_project/deckReview.html'; 
        }
    });
}


if (document.title === 'Deck Review') {
    function displayRecentReviewOnDeckPage() {
        const recentReview = getRecentReview(); 
        const recentReviewElement = document.querySelector('#recentReview'); 

        if (recentReviewElement) {
            if (recentReview) {
                recentReviewElement.textContent = recentReview; 
            } else {
                recentReviewElement.textContent = 'No recent review available.';
            }
        } else {
            console.error("Element with ID 'recentReview' not found.");
        }
    }

    document.addEventListener('DOMContentLoaded', displayRecentReviewOnDeckPage);
}
