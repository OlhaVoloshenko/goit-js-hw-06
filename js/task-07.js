const refs = {
    control: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
 }
 
 refs.control.addEventListener('input', font);
 
 function font (event) {
    refs.text.style.fontSize = event.currentTarget.value + "px";  
};