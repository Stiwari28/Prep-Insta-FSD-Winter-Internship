document.addEventListener('DOMContentLoaded', function () {
    const sortBy = document.getElementById('sort');

    if (sortBy) {
        sortBy.addEventListener('change', function () {
            const productList = document.querySelector('.maindiv');
            const productCards = Array.from(document.querySelectorAll('.productCard'));

            const sortedCards = productCards.sort((a, b) => {
                const aPrice = parseInt(a.querySelector('.price-value').innerText.replace('₹', '').replace(',', ''), 10);
                const bPrice = parseInt(b.querySelector('.price-value').innerText.replace('₹', '').replace(',', ''), 10);

                if (sortBy.value === 'lowToHigh') {
                    return aPrice - bPrice;
                } else if (sortBy.value === 'highToLow') {
                    return bPrice - aPrice;
                }
            });

            productList.innerHTML = ''; // Clear existing content

            let row;
            sortedCards.forEach((card, index) => {
                if (index % 5 === 0) {
                    row = document.createElement('div');
                    row.className = 'rowsection';
                    productList.appendChild(row);
                }

                row.appendChild(card.cloneNode(true)); // Clone the node to avoid moving it
            });
        });
    }
});
