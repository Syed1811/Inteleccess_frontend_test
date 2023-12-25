async function fetchData() {
    try {
        const response = await fetch('https://65886f2a90fa4d3dabf9e918.mockapi.io/AppleProduct/AppleProduct');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

async function renderData(categoryFilter = 'all') {
    const container = document.querySelector('.store');
    container.innerHTML = ''; // Clear the previous content

    const data = await fetchData();

    if (!data || data.length === 0) {
        const errorElement = document.createElement('p');
        errorElement.textContent = 'No data available';
        container.appendChild(errorElement);
        return;
    }

    data.forEach(item => {
        if (categoryFilter !== 'all' && item.category !== categoryFilter) {
            return; // Skip items not matching the selected category
        }

        const card = document.createElement('div');
        card.classList.add('storecard');

        const title = document.createElement('h2');
        title.textContent = item.name;

        const price = document.createElement('p');
        price.textContent = `Price: $${item.price}`;

        const features = document.createElement('p');
        features.textContent = `Features: ${item.features}`;

        const stock = document.createElement('p');
        const stockButton = document.createElement('button');
        const disabledButton = document.createElement('button');

        disabledButton.textContent = 'Out of Stock';
        disabledButton.style.backgroundColor = 'red';
        disabledButton.disabled = true;
        disabledButton.style.borderRadius = '12px';

        stockButton.textContent = 'Add to Cart';
        stockButton.style.borderRadius = '12px';
        stock.appendChild(item.stock ? stockButton : disabledButton);

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;

        card.appendChild(title);
        card.appendChild(img);
        card.appendChild(features);
        card.appendChild(price);
        card.appendChild(stock);

        container.appendChild(card);
    });
}

// Event listener for category dropdown
const categorySelect = document.querySelector('.category-select');
categorySelect.addEventListener('change', function () {
    const selectedCategory = this.value;
    renderData(selectedCategory); // Pass the selected category to the render function
});

// Initially render all products
renderData();
