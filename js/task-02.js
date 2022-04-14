const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemIngredientsList = document.querySelector('#ingredients');

const itemIngredientsPotatoes =  document.createElement('li');
const itemIngredientsMushrooms =  document.createElement('li');
const itemIngredientsGarlic =  document.createElement('li');
const itemIngredientsTomatos =  document.createElement('li');
const itemIngredientsHerbs =  document.createElement('li');
const itemIngredientsCondiments =  document.createElement('li');


itemIngredientsPotatoes.textContent =  ingredients[0];
itemIngredientsMushrooms.textContent =  ingredients[1];
itemIngredientsGarlic.textContent =  ingredients[2];
itemIngredientsTomatos.textContent =  ingredients[3];
itemIngredientsHerbs.textContent =  ingredients[4];
itemIngredientsCondiments.textContent =  ingredients[5];

itemIngredientsPotatoes.classList.add('item');
itemIngredientsMushrooms.classList.add('item');
itemIngredientsGarlic.classList.add('item');
itemIngredientsTomatos.classList.add('item');
itemIngredientsHerbs.classList.add('item');
itemIngredientsCondiments.classList.add('item');

itemIngredientsList.append(itemIngredientsPotatoes, itemIngredientsMushrooms, itemIngredientsGarlic, itemIngredientsTomatos, itemIngredientsHerbs, itemIngredientsCondiments);