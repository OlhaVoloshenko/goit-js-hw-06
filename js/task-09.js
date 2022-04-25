const buttonEl = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');

buttonEl.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  textColorEl.textContent = getRandomHexColor();
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor());
