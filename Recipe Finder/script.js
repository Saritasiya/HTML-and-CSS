// script.js
document.getElementById('recipe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('query').value;
    fetchRecipes(query);
});

async function fetchRecipes(query) {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=af0da5bc&app_key=YOUR_APP_KEY`);
    const data = await response.json();
    displayRecipes(data.hits);
}

function displayRecipes(recipes) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = '';
    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        recipeElement.innerHTML = `
            <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
            <h3>${recipe.recipe.label}</h3>
            <p>${recipe.recipe.source}</p>
        `;
        recipesContainer.appendChild(recipeElement);
    });
}
