// contact.js — Envío del formulario de contacto con fetch + toasts de feedback
// Envía los datos a formsubmit.co sin recargar la página y muestra un toast

var form = document.querySelector('.contact__form');
var toast = document.getElementById('toast');
var toastError = document.getElementById('toast-error');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    var formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    }).then(function(response) {
        // Respuesta exitosa → toast verde + reset del formulario
        if (response.ok) {
            form.reset();
            toast.classList.add('toast--visible');
            setTimeout(function() {
                toast.classList.remove('toast--visible');
            }, 5000);
        } else {
            // Error del servidor → toast rojo
            toastError.classList.add('toast--visible');
            setTimeout(function() {
                toastError.classList.remove('toast--visible');
            }, 5000);
        }
    }).catch(function() {
        // Error de red → toast rojo
        toastError.classList.add('toast--visible');
        setTimeout(function() {
            toastError.classList.remove('toast--visible');
        }, 5000);
    });
});
