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

// Function to handle card type filtering
function handleCardTypeClick(cardType) {
    const isHome = headingCategory.innerHTML.toLowerCase() === 'home';
    const currentCards = isHome ? cards : cards.filter(card => card.deck === headingCategory.innerHTML.toLowerCase());
    const filteredCards = currentCards.filter(card => card.type === cardType);
    
    cardCount.innerHTML = isHome 
        ? `There are ${filteredCards.length} cards of this type across all decks.`
        : `There are ${filteredCards.length} cards of this type in this deck.`;

    createDeck(filteredCards);
}

// Event listeners for each card type
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

const reviewsDisplay = document.querySelector("#review");
let numReviews = GetReviews();

if (document.title === "Deck Review") {
    addEventListener('DOMContentLoaded', function () {
        numReviews++;
        DisplayReviews(numReviews);
        SetReviews();
    });
}

function GetReviews() {
    return JSON.parse(this.localStorage.getItem("numReviews"));
}

function DisplayReviews(reviews) {
    reviewsDisplay.innerHTML = reviews;
}

function SetReviews() {
    this.localStorage.setItem("numReviews", JSON.stringify(numReviews));
}

// Modal functionality
const modal = document.getElementById('cardModal');
const modalContent = document.getElementById('modalContent');
modal.style.display = 'none'; // Hidden by default

// Function to fetch card data and display it in the modal
async function fetchAndDisplayCard(cardName) {
    // Sanitize the card name by removing commas and trimming spaces
    const sanitizedCardName = cardName.replace(/,\s*$/, '').trim();

    try {
        // Attempt to fetch card data from Scryfall API
        const response = await fetch(`https://api.scryfall.com/cards/named?exact=${encodeURIComponent(sanitizedCardName)}`);
        
        // Handle the response
        if (!response.ok) throw new Error('Card not found');

        const card = await response.json();

        // Display card data in modal
        displayCardData(card);
    } catch (error) {
        console.error('Error fetching card data:', error);

        // Check for CORS error or any other error
        if (error.message.includes('CORS') || error.message.includes('Card not found')) {
            console.log('Attempting to retrieve card data from local array.');

            // Try to find the card in the local array
            const matchingCard = cards.find(c => c.cardName.toLowerCase() === sanitizedCardName.toLowerCase());

            if (matchingCard) {
                displayCardData(matchingCard); // Use local data to display in the modal
            } else {
                showErrorMessage(error.message); // Show error if no card found locally
            }
        } else {
            showErrorMessage(error.message); // Show error message
        }
    }
}

// Function to display card data in the modal
function displayCardData(card) {
    modalContent.innerHTML = ''; // Clear existing content

    const cardNameElement = document.createElement('h2');
    cardNameElement.textContent = card.name;

    const cardImage = document.createElement('img');
    cardImage.src = card.image_uris ? card.image_uris.normal : 'placeholder-image.jpg'; // Use normal image or a placeholder

    const cardDetails = document.createElement('p');
    cardDetails.textContent = `Type: ${card.type_line}, Mana Cost: ${card.mana_cost || 'N/A'}`;

    modalContent.appendChild(cardNameElement);
    modalContent.appendChild(cardImage);
    modalContent.appendChild(cardDetails);

    displayModal(); // Show the modal after content is prepared
}

// Function to display the modal
function displayModal() {
    modal.classList.add('show'); // Add class for fade-in
    modal.style.display = 'flex'; // Show the modal
}

// Function to show an error message in the modal
function showErrorMessage(message) {
    modalContent.innerHTML = `<p>Error: ${message}</p>`; // Display error message
    displayModal(); // Show the modal with the error message
}

// Close modal functionality
document.body.addEventListener('click', (event) => {
    // Close the modal if the close button is clicked
    if (event.target.id === 'closeModal' || event.target.classList.contains('close')) {
        modal.classList.remove('show'); // Remove class for fade-out
        setTimeout(() => {
            modal.style.display = 'none'; // Set display to none after fade-out transition
        }, 500); // Match this duration with your CSS transition duration
    }

    // Close the modal when clicking outside of the modal content
    if (event.target === modal) {
        modal.classList.remove('show'); // Remove class for fade-out
        setTimeout(() => {
            modal.style.display = 'none'; // Set display to none after fade-out transition
        }, 500); // Match this duration with your CSS transition duration
    }
});




const cardModal = document.getElementById('cardModal');
const closeModalButton = document.getElementById('closeModal');
const closeButtonSpan = document.querySelector('.close');
