const refunctions = {
    control: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
 }
 
 refunctions.control.addEventListener('input', fonts);
 
 function fonts (event) {
    refunctions.text.style.fontSize = event.currentTarget.value + "px";  
};