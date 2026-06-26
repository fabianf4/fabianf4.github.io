// i18n.js — Traducciones y cambio de idioma (EN / ES)
// Las traducciones persisten en localStorage y se actualizan via atributo data-i18n

const i18n = {
    'skip': { en: 'Skip to content', es: 'Saltar al contenido' },
    'nav-about': { en: 'About me', es: 'Sobre m\u00ed' },
    'nav-skills': { en: 'Skills', es: 'Habilidades' },
    'nav-experience': { en: 'Experience', es: 'Experiencia' },
    'nav-education': { en: 'Education', es: 'Educaci\u00f3n' },
    'nav-courses': { en: 'Courses', es: 'Cursos' },
    'nav-projects': { en: 'Projects', es: 'Proyectos' },
    'nav-contact': { en: 'Contact', es: 'Contacto' },
    'hero-greeting': { en: "👋 Hi, I'm", es: '👋 Hola, soy' },
    'hero-tagline': { en: '⚡ Systems Engineer with experience in enterprise application development and process automation using Power Platform, Python, and SQL Server.', es: '⚡ Ingeniero de Sistemas con experiencia en desarrollo de aplicaciones empresariales y automatizaci\u00f3n de procesos utilizando Power Platform, Python y SQL Server.' },
    'hero-cta-resume': { en: 'Download Resume', es: 'Descargar HV' },
    'hero-cta-contact': { en: 'Get in touch', es: 'Cont\u00e1ctame' },
    'hero-location': { en: 'Colombia based', es: 'Colombia' },
    'hero-availability': { en: 'Available for opportunities', es: 'Disponible para oportunidades' },
    'about-title': { en: '🙋\u00a0About me', es: '🙋\u00a0Sobre m\u00ed' },
    'about-p1': { en: 'I am a Systems and Computer Engineering graduate from the Universidad Pedag\u00f3gica y Tecnol\u00f3gica de Colombia. I enjoy challenges and stand out for my perseverance when tackling complex problems.', es: 'Soy graduado de Ingenier\u00eda de Sistemas y Computaci\u00f3n de la Universidad Pedag\u00f3gica y Tecnol\u00f3gica de Colombia. Disfruto los desaf\u00edos y me destaco por mi perseverancia al abordar problemas complejos.' },
    'about-p2': { en: 'I am passionate about technology and software development, with hands-on experience in enterprise application development and process automation using Power Platform, Python, and SQL Server. I seek opportunities for professional and personal growth, applying my knowledge to deliver innovative solutions that optimize processes and generate value in every project I am involved in.', es: 'Me apasiona la tecnolog\u00eda y el desarrollo de software, con experiencia pr\u00e1ctica en desarrollo de aplicaciones empresariales y automatizaci\u00f3n de procesos usando Power Platform, Python y SQL Server. Busco oportunidades de crecimiento profesional y personal, aplicando mis conocimientos para ofrecer soluciones innovadoras que optimicen procesos y generen valor en cada proyecto en el que participo.' },
    'skills-title': { en: '🛠️\u00a0Skills', es: '🛠️\u00a0Habilidades' },
    'skills-languages': { en: 'Languages', es: 'Lenguajes' },
    'skills-frameworks': { en: 'Frameworks', es: 'Frameworks' },
    'skills-databases': { en: 'Databases & Storage', es: 'Bases de Datos y Almacenamiento' },
    'skills-tools': { en: 'Tools', es: 'Herramientas' },
    'experience-title': { en: '💼\u00a0Experience', es: '💼\u00a0Experiencia' },
    'exp-1-title': { en: 'Professional \u2014 Banco de la Rep\u00fablica de Colombia', es: 'Profesional \u2014 Banco de la Rep\u00fablica de Colombia' },
    'exp-1-date': { en: 'Feb 2025 \u2014 Feb 2026', es: 'Febrero 2025 \u2014 Febrero 2026' },
    'exp-1-b1': { en: 'Developed, updated, and supported internal applications with Power Platform for loan redenomination, statement and credit certificate delivery, and corporate email automation.', es: 'Desarroll\u00e9, actualic\u00e9 y brind\u00e9 soporte a aplicaciones internas con Power Platform para redenominaci\u00f3n de pr\u00e9stamos, env\u00edo de extractos y certificados de cr\u00e9dito, y automatizaci\u00f3n de correos corporativos.' },
    'exp-1-b2': { en: 'Designed and implemented a Python solution to automate reporting, extracting and filtering data from multiple Excel files, PDFs, and digitally signed documents (.p7z).', es: 'Dise\u00f1\u00e9 e implement\u00e9 una soluci\u00f3n en Python para automatizar informes, extrayendo y filtrando datos desde m\u00faltiples archivos Excel, PDF y documentos firmados digitalmente (.p7z).' },
    'exp-1-b3': { en: 'Built a Copilot Studio bot to automatically generate an activity planner, assigning dates and organizing user tasks.', es: 'Constru\u00ed un bot en Copilot Studio para generar autom\u00e1ticamente un planificador de actividades, asignando fechas y organizando tareas de los usuarios.' },
    'exp-1-b4': { en: 'Trained and mentored intern students in solution development, error resolution, coding best practices, and interface building.', es: 'Capacit\u00e9 y gui\u00e9 a estudiantes en pr\u00e1ctica en desarrollo de soluciones, resoluci\u00f3n de errores, buenas pr\u00e1cticas de c\u00f3digo y construcci\u00f3n de interfaces.' },
    'exp-2-title': { en: 'Intern \u2014 Banco de la Rep\u00fablica de Colombia', es: 'Practicante \u2014 Banco de la Rep\u00fablica de Colombia' },
    'exp-2-date': { en: 'Jul 2024 \u2014 Dec 2024', es: 'Julio 2024 \u2014 Diciembre 2024' },
    'exp-2-b1': { en: 'Performed maintenance and optimization of a loan application built with Power Apps, Power Automate, SharePoint, SQL Server, and Azure Blob Storage.', es: 'Realic\u00e9 mantenimiento y optimizaci\u00f3n de una aplicaci\u00f3n de solicitud de cr\u00e9dito construida con Power Apps, Power Automate, SharePoint, SQL Server y Azure Blob Storage.' },
    'exp-2-b2': { en: 'Fixed file upload failures, optimized automated flows, and improved overall application performance.', es: 'Correg\u00ed fallas en la carga de archivos, optimic\u00e9 flujos automatizados y mejor\u00e9 el rendimiento general de la aplicaci\u00f3n.' },
    'exp-2-b3': { en: 'Developed a service order request application with Power Apps and SharePoint, complemented with a monthly Power BI dashboard.', es: 'Desarroll\u00e9 una aplicaci\u00f3n para solicitud de \u00f3rdenes de servicio con Power Apps y SharePoint, complementada con un tablero mensual en Power BI.' },
    'exp-2-b4': { en: 'Led requirements gathering, design, and development of a service certificate request module using Power Pages, Power Automate, and Dataverse.', es: 'Lider\u00e9 el levantamiento de requisitos, dise\u00f1o y desarrollo de un m\u00f3dulo para solicitud de certificados de prestaci\u00f3n de servicios usando Power Pages, Power Automate y Dataverse.' },
    'education-title': { en: '🎓\u00a0Education', es: '🎓\u00a0Educaci\u00f3n' },
    'edu-1-title': { en: "Bachelor's degree in Systems Engineering and Computing", es: 'Pregrado en Ingenier\u00eda de Sistemas y Computaci\u00f3n' },
    'edu-4-title': { en: 'High School Diploma with Systems Technician', es: 'Bachiller con T\u00e9cnico en Sistemas' },
    'courses-title': { en: '📚\u00a0Courses & Training', es: '📚\u00a0Cursos y Formaci\u00f3n' },
    'edu-2-title': { en: 'Diploma in Software and Web Application Development', es: 'Diplomado en Desarrollo de Software y Aplicaciones WEB' },
    'edu-3-title': { en: 'Training in Web Development', es: 'Formaci\u00f3n en desarrollo WEB' },
    'projects-title': { en: '🚀\u00a0Projects', es: '🚀\u00a0Proyectos' },
    'proj-1-desc': { en: 'Website for an electrical services company built with Next.js.', es: 'Sitio web para una empresa de servicios el\u00e9ctricos construido con Next.js.' },
    'proj-2-desc': { en: 'Frontend Mentor challenge \u2014 news homepage layout with CSS Grid.', es: 'Challenge de Frontend Mentor \u2014 p\u00e1gina de noticias con CSS Grid.' },
    'proj-3-desc': { en: 'Frontend Mentor challenge \u2014 responsive landing page with alternating feature blocks.', es: 'Challenge de Frontend Mentor \u2014 landing page responsive con bloques alternados.' },
    'proj-repo': { en: 'Repository', es: 'Repositorio' },
    'proj-live': { en: 'Live', es: 'Demo' },
    'hobbies-title': { en: '🎮\u00a0Hobbies', es: '🎮\u00a0Pasatiempos' },
    'hobby-1': { en: '🎮 Play VideoGames', es: '🎮 Videojuegos' },
    'hobby-2': { en: '📺 Watch series', es: '📺 Ver series' },
    'hobby-3': { en: '🎵 Listen to music', es: '🎵 Escuchar m\u00fasica' },
    'hobby-4': { en: '📖 Learn', es: '📖 Aprender' },
    'hobby-5': { en: '💃 Dance', es: '💃 Bailar' },
    'hobby-6': { en: '🏊 Swim', es: '🏊 Nadar' },
    'contact-title': { en: '✉️\u00a0Contact', es: '✉️\u00a0Contacto' },
    'toast-success': { en: 'Thanks for reaching out! I\'ll get back to you soon', es: '\u00a1Gracias por escribirme! Me pondr\u00e9 en contacto contigo pronto' },
    'toast-error': { en: 'Oops, something went wrong. Email me at fabianfa.munoz@gmail.com', es: 'Oops, algo sali\u00f3 mal. Escr\u00edbeme a fabianfa.munoz@gmail.com' },
    'form-name': { en: 'Name', es: 'Nombre' },
    'form-email': { en: 'Email', es: 'Correo' },
    'form-subject': { en: 'Subject', es: 'Asunto' },
    'form-message': { en: 'Message', es: 'Mensaje' },
    'form-send': { en: 'Send', es: 'Enviar' },
    'contact-direct': { en: 'Or email me directly:', es: 'O escr\u00edbeme directamente:' },
    'footer-text': { en: 'Made with ❤️ by Fabian Esteban Mu\u00f1oz Lopez', es: 'Hecho con ❤️ por Fabian Esteban Mu\u00f1oz Lopez' }
};

// Cambia el idioma de la página (en/es)
// Actualiza textos via data-i18n, configura el botón de descarga de HV,
// persiste en localStorage y actualiza el botón de cambio de idioma
function setLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        var key = el.getAttribute('data-i18n');
        if (i18n[key] && i18n[key][lang]) {
            el.textContent = i18n[key][lang];
        }
    });

    // Vincula la descarga de HV (solo una vez)
    var link = document.getElementById('resume-link');
    if (link && !link._downloadBound) {
        link._downloadBound = true;
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var currentLang = document.documentElement.lang || 'en';
            var filename = currentLang === 'es'
                ? link.getAttribute('data-i18n-download-es')
                : 'CV Fabian Mu\u00f1oz.pdf';
            var url = currentLang === 'es' ? 'assets/pdf/resume.pdf' : 'assets/pdf/resume-en.pdf';
            fetch(url)
                .then(function(r) { return r.blob(); })
                .then(function(blob) {
                    var a = document.createElement('a');
                    a.href = URL.createObjectURL(blob);
                    a.download = filename;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(a.href);
                });
        });
    }

    localStorage.setItem('lang', lang);
    var btn = document.querySelector('.lang-toggle');
    if (btn) {
        btn.textContent = lang === 'en' ? 'ES' : 'EN';
        btn.setAttribute('aria-label', lang === 'en' ? 'Switch to Spanish' : 'Cambiar a ingl\u00e9s');
    }
}

// Alterna el idioma al hacer clic en el botón
document.querySelector('.lang-toggle').addEventListener('click', function() {
    var current = document.documentElement.lang;
    setLang(current === 'en' ? 'es' : 'en');
});
