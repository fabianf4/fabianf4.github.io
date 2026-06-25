# fabianf4.github.io

Personal portfolio of Fabian Esteban Muñoz Lopez — Systems Engineer.  
🌐 [fabianf4.is-a.dev](https://fabianf4.is-a.dev)

## Tech

- HTML5, CSS3 (custom properties, dark mode, fluid type)
- Vanilla JavaScript i18n EN/ES, theme toggle, persistence via localStorage
- Google Fonts: Inter + JetBrains Mono
- Contact form via [formsubmit.co](https://formsubmit.co)
- Hosting: GitHub Pages + custom domain via is-a.dev

## Features

- Bilingual EN/ES with persistent toggle
- Dark/light mode with persistent toggle and `prefers-color-scheme`
- Responsive mobile-first layout
- Accessible: WCAG AA, ARIA labels, skip link, keyboard nav, `prefers-reduced-motion`
- SEO: JSON-LD Person schema, OpenGraph tags, dynamic `<html lang>`

## Local development

No build step needed. Open `index.html` directly or use a local server:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

## Deploy

Push to `main` → GitHub Pages auto-deploys. Custom domain managed via `CNAME`.

## Structure

```
.
├── index.html
├── CNAME
├── assets/
│   ├── css/
│   │   ├── styles.css       # All site styles
│   │   └── resume.css       # Print styles for CV PDF
│   ├── img/                 # Images (avatar, screenshots, logos)
│   ├── pdf/
│   │   ├── resume.pdf       # CV in Spanish
│   │   └── resume-en.pdf    # CV in English
│   └── icons/               # SVG icons (unused, for future skill icons)
├── content/
│   ├── resume.md            # CV source in Spanish
│   └── resume-en.md         # CV source in English
└── README.md
```

## Contact

fabianfa.munoz@gmail.com · [@fabianf4](https://github.com/fabianf4) · [LinkedIn](https://www.linkedin.com/in/fabian-mu%C3%B1oz-dev/)
