//we sort out the array
const buttonConteynerEl = document.querySelector('#counter');
//we create variable items
const dctBtn = buttonConteynerEl.firstElementChild;
const ictBtn = buttonConteynerEl.lastElementChild;
const valueEl = document.querySelector('#value');
//we create variable and initialize its meaning
const counterValue = 0;

const counter = {
   value: counterValue,

   decrement() {
      this.value -= 1;
   },

   increment() {
     this.value += 1; 
   },
}
const dctBtnLeft = () => {
   counter.decrement();
   valueEl.textContent = counter.value;
};
const dctbtnRigth = () => {
   counter.increment();
   valueEl.textContent = counter.value;
};

dctBtn.addEventListener('click', dctBtnLeft);
ictBtn.addEventListener('click', dctbtnRigth);
