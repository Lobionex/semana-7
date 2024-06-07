const form = document.getElementById('formato');

form.addEventListener('enviar', function(event){
  event.preventDefault();

  const name = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;

  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
});