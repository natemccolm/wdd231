const axios = require('axios');

const fetchCardData = async (cardName) => {
    try {
        const response = await axios.get(`https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(cardName)}`);
        const card = response.data;
        console.log(`Name: ${card.name}`);
        console.log(`Set: ${card.set_name}`);
        console.log(`Type: ${card.type_line}`);
        console.log(`Mana Cost: ${card.mana_cost || 'N/A'}`);
        console.log(`Image URL: ${card.image_uris?.normal || 'No image available'}`);
    } catch (error) {
        if (error.response) {
            console.error(`Error: ${error.response.data.details}`);
        } else {
            console.error('Error fetching data:', error.message);
        }
    }
};

fetchCardData('Black Lotus');