// nav.js — Menú de navegación (hamburguesa) y resaltado de sección activa

// Abre/cierra el menú móvil al hacer clic en el botón hamburguesa
document.querySelector('.hamburger').addEventListener('click', function() {
    var nav = this.closest('.nav');
    var expanded = this.getAttribute('aria-expanded') === 'true' ? false : true;
    nav.classList.toggle('nav--open', expanded);
    this.setAttribute('aria-expanded', expanded);
});

// Cierra el menú al hacer clic en cualquier enlace de navegación
document.querySelector('.nav__list').addEventListener('click', function() {
    var hamburger = document.querySelector('.hamburger');
    var nav = hamburger.closest('.nav');
    nav.classList.remove('nav--open');
    hamburger.setAttribute('aria-expanded', 'false');
});

// IntersectionObserver: resalta el enlace de la sección visible en el nav
var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            document.querySelectorAll('.nav__link').forEach(function(link) {
                link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
            });
        }
    });
}, { rootMargin: '-50% 0px -50% 0px' });
document.querySelectorAll('section[id]').forEach(function(section) {
    observer.observe(section);
});
