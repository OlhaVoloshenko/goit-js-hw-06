const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const navItemEl = document.createElement('li');
/*navItemEl.forEach((ingredients) => )*/
navItemEl.classList.add('ingredients');

console.log(navItemEl);
const navLinkEl = document.createElement('a');
navLinkEl.classList.add('item__link');
navLinkEl.textContent = '';
navLinkEl.href = '#ingredients';

navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

const navEl = document.querySelector('#ingredients');
navEl.appendChild(navItemEl);

/*categoriesEl.forEach((category) => {
  console.log(`Categorys: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});*/