// contact.js — Envío del formulario de contacto via iframe (sin CORS)
// Usa un iframe oculto como target para evitar problemas con formsubmit.co

var iframe = document.createElement('iframe');
iframe.name = 'form-hidden-frame';
iframe.style.display = 'none';
document.body.appendChild(iframe);

var form = document.querySelector('.contact__form');
var toast = document.getElementById('toast');
var toastError = document.getElementById('toast-error');
var formStatus = document.getElementById('form-status');

form.target = 'form-hidden-frame';

function getLang() {
    return document.documentElement.lang || 'en';
}

function t(key) {
    return (i18n[key] && i18n[key][getLang()]) || '';
}

function setError(field, message) {
    var errorEl = document.getElementById(field.id + '-error');
    if (errorEl) errorEl.textContent = message || '';
    if (message) {
        field.setAttribute('aria-invalid', 'true');
    } else {
        field.removeAttribute('aria-invalid');
    }
}

function clearErrors() {
    form.querySelectorAll('.contact__error').forEach(function(el) { el.textContent = ''; });
    form.querySelectorAll('[aria-invalid]').forEach(function(el) { el.removeAttribute('aria-invalid'); });
    if (formStatus) formStatus.textContent = '';
}

form.querySelectorAll('.contact__input, .contact__textarea').forEach(function(input) {
    input.addEventListener('input', function() {
        if (input.getAttribute('aria-invalid') === 'true' && input.checkValidity()) {
            setError(input, '');
        }
    });
    input.addEventListener('blur', function() {
        if (input.hasAttribute('required') && !input.checkValidity()) {
            var key = 'form-' + input.id + '-error';
            setError(input, t(key));
        }
    });
});

function validateForm() {
    clearErrors();
    var fields = form.querySelectorAll('.contact__input, .contact__textarea');
    var firstInvalid = null;
    fields.forEach(function(field) {
        if (!field.checkValidity()) {
            var key = 'form-' + field.id + '-error';
            setError(field, t(key));
            if (!firstInvalid) firstInvalid = field;
        }
    });
    return firstInvalid;
}

form.addEventListener('submit', function(e) {
    var firstInvalid = validateForm();
    if (firstInvalid) {
        e.preventDefault();
        if (formStatus) formStatus.textContent = t('form-status-invalid');
        firstInvalid.focus();
        return;
    }
    if (formStatus) formStatus.textContent = '';
});

var iframeLoaded = false;
iframe.addEventListener('load', function() {
    iframeLoaded = true;
    toast.classList.add('toast--visible');
    setTimeout(function() {
        toast.classList.remove('toast--visible');
    }, 5000);
});
