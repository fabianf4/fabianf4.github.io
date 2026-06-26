// theme.js — Cambio de tema claro/oscuro
// Persiste la preferencia en localStorage y respeta prefers-color-scheme

// Aplica un tema (light/dark) al HTML, lo persiste en localStorage
// y actualiza el meta theme-color y el aria-label del botón
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#ffffff');
    var btn = document.querySelector('.theme-toggle');
    if (btn) {
        btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
}

// Alterna entre light y dark al hacer clic en el botón de tema
document.querySelector('.theme-toggle').addEventListener('click', function() {
    var current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});
