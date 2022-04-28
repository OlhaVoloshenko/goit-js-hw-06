const inputEl = document.querySelector('#validation-input');

const refs = {
input: inputEl,
check: inputEl.getAttribute('data-length'),
};

refs.input.addEventListener('blur', print);

function print(event) {
  
   if (event.currentTarget.value.length == refs.check) {
      refs.input.classList.remove('invalid');
      refs.input.classList.add('valid');      
   }
   else {
      refs.input.classList.remove('valid');
      refs.input.classList.add('invalid');
   }
  
};

