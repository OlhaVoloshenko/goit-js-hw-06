const valueToInput = document.querySelector('input')
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divsContainer = document.querySelector('#boxes');

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const CreateCounterValue = (value) => {
  valueToInput.setAttribute('counter', value.currentTarget.value)
};

const CreateInBoxes = () => {
  let firstBoxSizing = 30;
  let allDivsEl = [];
  for (let i = 1; i <= valueToInput.getAttribute('counter'); i += 1) {
    
    firstBoxSizing += 10;
    const creatDivs = document.createElement('div');
   
    creatDivs.classList.add('box-item')
    creatDivs.style.width = `${firstBoxSizing}px`
    creatDivs.style.height = `${firstBoxSizing}px`
    creatDivs.style.marginTop = '8px'
    creatDivs.style.verticalAlign = 'middle'
    creatDivs.style.backgroundColor = `${getRandomHexColor()}`
    creatDivs.style.border = '2px solid black'

  allDivsEl.push(creatDivs);
  }
  divsContainer.append(...allDivsEl)
};

const DestroyOnBtn = () => {
  divsContainer.innerHTML = '';
  valueToInput.removeAttribute('counter');
  valueToInput.value = '';
};
  
valueToInput.addEventListener('input', CreateCounterValue);
createBtn.addEventListener('click', CreateInBoxes);
destroyBtn.addEventListener('click', DestroyOnBtn);