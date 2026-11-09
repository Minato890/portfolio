# Deepak Patel | Portfolio

Bilingual (English / 日本語) portfolio with light/dark theme. Plain HTML, CSS, JavaScript. Hosted on GitHub Pages.

## Structure

```
portfolio/
├── index.html
├── .nojekyll
└── assets/
    ├── css/style.css          Styling (colors at the top)
    ├── img/                   profile.jpg (optional photo), screenshots
    └── js/
        ├── data.js            Links, email, skills, language levels, project/experience/hobby lists
        ├── icons.js           Icon set
        ├── i18n.js            Language switching
        ├── main.js            Tabs, toggles, rendering
        └── lang/en.js, ja.js  All visible text (keep both in sync)
```

## Where to edit what

| Change | File |
|---|---|
| Links, email, skills, language bars | `assets/js/data.js` |
| Add a project / job / hobby | `data.js` (links, tech) + `lang/en.js` and `lang/ja.js` (text) |
| Wording | `lang/en.js` and `lang/ja.js` |
| Profile photo | save as `assets/img/profile.jpg` (it appears automatically) |
| Colors | top of `assets/css/style.css` |

## Run locally
VS Code → Live Server extension → right-click `index.html` → Open with Live Server.

## Deploy
Push to GitHub, then Settings → Pages → Deploy from branch → `main` → `/ (root)`.
