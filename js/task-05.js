const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
    }
 
 
 refs.input.addEventListener('input', print);
 
 function print (event) {
 // if (event.currentTarget.value === '') {
 //    refs.nameLabel.textContent = 'Anonymous'; 
 // }
 // else {
 //  refs.nameLabel.textContent = event.currentTarget.value;  
 // }
 event.currentTarget.value === '' ? refs.nameLabel.textContent = 'Anonymous' : refs.nameLabel.textContent = event.currentTarget.value;
 };