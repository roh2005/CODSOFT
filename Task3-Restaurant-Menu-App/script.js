// Sample Data based on image specifics
const menuData = [
    {
        id: 1,
        title: "Pear & Orange",
        category: "breakfast",
        time: "20",
        rating: "4.8",
        price: "25.00",
        image: "https://images.unsplash.com/photo-1554522723-b2a47cb105e3?auto=format&fit=crop&w=600&q=80",
        description: "As a rule, pancakes are served for breakfast with various sweet sauces, chocolate, berries, maple syrup. Pancakes were a very popular breakfast only in the USA and Canada, but now pancakes enjoy breakfast all over the world."
    },
    {
        id: 2,
        title: "Meat & Mushrooms",
        category: "lunch",
        time: "30",
        rating: "5.0",
        price: "37.00",
        image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=600&q=80",
        description: "A hearty and fulfilling lunch option. Sautéed wild mushrooms served on grilled artisan bread, topped with a perfectly poached egg and seasoned ground meat. A rich combination of earthy flavors."
    },
    {
        id: 3,
        title: "Egg & Bread",
        category: "breakfast",
        time: "10",
        rating: "4.7",
        price: "25.00",
        image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=600&q=80",
        description: "Simple yet perfect. A sunny-side-up organic farm egg placed delicately on toasted sourdough bread, garnished with fresh herbs and a crack of black pepper."
    },
    {
        id: 4,
        title: "Sweet Pancake",
        category: "dessert",
        time: "10",
        rating: "4.9",
        price: "13.00",
        image: "https://images.unsplash.com/photo-1554494583-c4e1649bfe71?auto=format&fit=crop&w=600&q=80",
        description: "Fluffy, light pancakes dusted with powdered sugar and drizzled with a sweet vanilla icing. Perfect for a quick treat or a light dessert."
    },
    {
        id: 5,
        title: "Seafood Pasta",
        category: "lunch",
        time: "25",
        rating: "4.9",
        price: "32.00",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80",
        description: "Fresh linguine tossed with shrimp, mussels, and a light garlic white wine sauce. A taste of the Mediterranean."
    },
    {
        id: 6,
        title: "Fresh Lemonade",
        category: "drinks",
        time: "5",
        rating: "4.6",
        price: "8.00",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
        description: "Freshly squeezed lemons, a hint of mint, and just the right amount of sweetness over craft ice."
    }
];

// DOM Elements
const menuList = document.getElementById('menu-list');
const catBtns = document.querySelectorAll('.cat-btn');

// View Containers
const viewMenu = document.getElementById('view-menu');
const viewDetail = document.getElementById('view-detail');
const bottomNav = document.getElementById('bottom-nav');

// Detail Elements
const detailImg = document.getElementById('detail-img');
const detailTitle = document.getElementById('detail-title');
const detailPrice = document.getElementById('detail-price');
const detailTime = document.getElementById('detail-time');
const detailRating = document.getElementById('detail-rating');
const detailDesc = document.getElementById('detail-desc');

// Buttons
const btnBack = document.getElementById('btn-back');
const btnFav = document.getElementById('btn-fav');

// Render Menu Cards
function renderMenu(category = 'all') {
    menuList.innerHTML = '';

    const filteredData = category === 'all'
        ? menuData
        : menuData.filter(item => item.category === category);

    filteredData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="card-img">
            <h3 class="card-title">${item.title}</h3>
            <div class="card-meta">
                <span class="time"><i class="fa-regular fa-clock"></i> ${item.time} min</span>
                <span class="rating"><i class="fa-regular fa-star"></i> ${item.rating}</span>
            </div>
            <div class="card-price">${item.price}$</div>
        `;

        // Add click event to open details view
        card.addEventListener('click', () => openDetailView(item));

        menuList.appendChild(card);
    });
}

// Open Detail View Logic
function openDetailView(item) {
    // Populate data
    detailImg.src = item.image;
    detailTitle.textContent = item.title;
    detailPrice.textContent = `${item.price}$`;
    detailTime.textContent = `${item.time} min`;
    detailRating.textContent = item.rating;
    detailDesc.textContent = item.description;

    // Switch views
    viewDetail.classList.add('active');
    bottomNav.style.display = 'none'; // Hide bottom nav in detail view
}

// Close Detail View Logic
btnBack.addEventListener('click', () => {
    viewDetail.classList.remove('active');
    setTimeout(() => {
        bottomNav.style.display = 'flex';
    }, 300); // Wait for transition out
});

// Category Filtering Logic
catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active class
        catBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter and re-render
        const category = btn.getAttribute('data-cat');
        renderMenu(category);
    });
});

// Favorite Toggle
btnFav.addEventListener('click', () => {
    btnFav.classList.toggle('active');
});

// Initialize
renderMenu();
