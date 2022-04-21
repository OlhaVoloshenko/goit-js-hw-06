const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener('input', (print) => {
 nameOutput.textContent = print.currentTarget.value;
});