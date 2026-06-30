// contact.js — Envío del formulario de contacto via fetch a formsubmit.co
// Maneja éxito/error con toasts, evita doble submit con aria-busy + disabled

var form = document.querySelector('.contact__form');
var toast = document.getElementById('toast');
var toastError = document.getElementById('toast-error');
var formStatus = document.getElementById('form-status');
var submitBtn = form.querySelector('.contact__submit');

function showToast(toastEl) {
    if (!toastEl) return;
    toastEl.classList.add('toast--visible');
    setTimeout(function() {
        toastEl.classList.remove('toast--visible');
    }, 5000);
}

function setBusy(busy) {
    submitBtn.disabled = busy;
    if (busy) {
        submitBtn.setAttribute('aria-busy', 'true');
    } else {
        submitBtn.removeAttribute('aria-busy');
    }
}

setupFormValidation(form);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    var firstInvalid = validateForm(form);
    if (firstInvalid) {
        if (formStatus) formStatus.textContent = t('form-status-invalid');
        firstInvalid.focus();
        return;
    }
    if (formStatus) formStatus.textContent = '';

    setBusy(true);

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    })
    .then(function(r) {
        if (r.ok) {
            showToast(toast);
            form.reset();
        } else {
            showToast(toastError);
        }
    })
    .catch(function() {
        showToast(toastError);
    })
    .then(function() {
        setBusy(false);
    });
});
