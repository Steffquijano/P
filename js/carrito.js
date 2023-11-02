const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'pinare2008';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Pedido';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Enviar Pedido';
      alert(JSON.stringify(err));
    });
});