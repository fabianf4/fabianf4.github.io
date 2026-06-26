// main.js — Inicialización del sitio
// Carga preferencias guardadas del usuario y aplica idioma y tema

// Carga el idioma guardado (o inglés por defecto)
var savedLang = localStorage.getItem('lang') || 'en';

// Carga el tema guardado, o respeta la preferencia del sistema
var savedTheme = localStorage.getItem('theme');
if (!savedTheme) {
    savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Aplica configuración inicial
setLang(savedLang);
setTheme(savedTheme);
