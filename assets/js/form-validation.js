// form-validation.js — Validación accesible de formularios
// Mensajes de error via i18n.js (claves form-{id}-error)
// API pública: validateForm(form), clearErrors(form), setError(field, message),
//              setupFormValidation(form), getLang(), t(key)

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

function clearErrors(form) {
    form.querySelectorAll('.contact__error').forEach(function(el) { el.textContent = ''; });
    form.querySelectorAll('[aria-invalid]').forEach(function(el) { el.removeAttribute('aria-invalid'); });
    var status = form.querySelector('[role="status"]');
    if (status) status.textContent = '';
}

function validateForm(form) {
    clearErrors(form);
    var fields = form.querySelectorAll('.contact__input, .contact__textarea');
    var firstInvalid = null;
    fields.forEach(function(field) {
        if (!field.checkValidity()) {
            setError(field, t('form-' + field.id + '-error'));
            if (!firstInvalid) firstInvalid = field;
        }
    });
    return firstInvalid;
}

function setupFormValidation(form) {
    form.querySelectorAll('.contact__input, .contact__textarea').forEach(function(input) {
        input.addEventListener('input', function() {
            if (input.getAttribute('aria-invalid') === 'true' && input.checkValidity()) {
                setError(input, '');
            }
        });
        input.addEventListener('blur', function() {
            if (input.hasAttribute('required') && !input.checkValidity()) {
                setError(input, t('form-' + input.id + '-error'));
            }
        });
    });
}
