// contact.js — Envío del formulario de contacto via iframe (sin CORS)
// Usa un iframe oculto como target para evitar problemas con formsubmit.co

// Crea un iframe oculto para recibir la respuesta del formulario sin recargar la página
var iframe = document.createElement('iframe');
iframe.name = 'form-hidden-frame';
iframe.style.display = 'none';
document.body.appendChild(iframe);

var form = document.querySelector('.contact__form');
var toast = document.getElementById('toast');

form.target = 'form-hidden-frame';

form.addEventListener('submit', function() {
    // Muestra toast de éxito de forma optimista
    toast.classList.add('toast--visible');
    setTimeout(function() {
        toast.classList.remove('toast--visible');
    }, 5000);
});
