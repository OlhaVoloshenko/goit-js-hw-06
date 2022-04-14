const battonConteynerEl = document.querySelector('#counter');
const decrementBtn = battonConteynerEl.firstElementChild;
const incrementBtn = battonConteynerEl.lastElementChild;
const valueEl = document.querySelector('#value');

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

decrementBtn.addEventListener('click', function () {
counter.decrement();
valueEl.textContent = counter.value;
});
incrementBtn.addEventListener('click', function () {
counter.increment();
valueEl.textContent = counter.value;
});
