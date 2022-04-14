const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
   event.preventDefault();
  //  document.forms.form.reset();
   const formElements = event.currentTarget.elements;
 
  if (formElements.email.value === "" || formElements.password.value === "") {
   return alert("Будь ласка заповніть усі поля");
 }
 const email = formElements.email.value;
 const password = formElements.password.value;
  const formData = {
   email, password, 
  }
  console.log(formData);
  formElements.email.value = '';
  formElements.password.value = '';
  // form.defaultValue();
  // formElements.getElementById('myform').reset();
};

