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
        
        data.forEach(place => {
            const card = document.createElement('div');
            card.classList.add('card'); 
            
            card.innerHTML = `
                <h2>${place.name}</h2>
                <img src="${place.image}" alt="${place.name}">
                <p>${place.info}</p>
            `;
            
            CityCard.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
