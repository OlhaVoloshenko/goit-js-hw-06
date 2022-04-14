const butonEl = document.querySelector('.change-color'),
textColorEl = document.querySelector('.color');

butonEl.addEventListener("click", () => {
  console.log("Button was clicked");
  document.body.style.backgroundColor = getRandomHexColor();
  textColorEl.textContent = getRandomHexColor();
})
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());
