fetch('https://api.npoint.io/7bbd3a59c401f616bb89/places/')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const CityCard = document.getElementById('cards_section');

        // Iterate over each place and create a new <div> element for each place
        data.forEach(place => {
            const card = document.createElement('div');
            card.classList.add('card'); // Add a class to style the card if needed

            // Set the HTML content for the card
            card.innerHTML = `
                <h2>${place.name}</h2>
                <img src="${place.image}" alt="${place.name}">
                <p>${place.info}</p>
            `;

            // Append the card to the container
            CityCard.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
