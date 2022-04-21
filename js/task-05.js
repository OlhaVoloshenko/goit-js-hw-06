 const reactionText = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
    }
 
    reactionText.input.addEventListener('input', print);
 
 function print (event) {

 event.currentTarget.value === '' ? reactionText.nameLabel.textContent = 'Anonymous' : reactionText.nameLabel.textContent = event.currentTarget.value;
 };