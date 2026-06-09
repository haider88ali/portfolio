# Haider Ali — Portfolio

Static portfolio site deployable on GitHub Pages.

**Live site:** [haider88ali.github.io/portfolio](https://haider88ali.github.io/portfolio/)

## Local development

```bash
# Install dependencies (one time)
npm install

# Compile SCSS → css/main.css
npm run build

# Auto-recompile on save
npm run watch

# Preview locally
python3 -m http.server 8080
# Open http://localhost:8080
```

## Deploy to GitHub Pages

### Option A — Automatic (recommended)

1. Push your code to the `main` branch on GitHub.
2. Go to **Settings → Pages** in your repo.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Every push to `main` will compile SCSS and deploy automatically.

### Option B — Manual

1. Run `npm run build` locally.
2. Commit all files (including `css/main.css`).
3. Push to `main`.
4. In **Settings → Pages**, set **Source** to **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`.

## Project structure

```
portfolio/
├── index.html          # Main page
├── css/main.css        # Compiled styles (run npm run build)
├── javascript/         # Scripts (Three.js scene, tilt, scroll reveal)
├── assets/             # Images & icons
├── style/              # SCSS source files
├── CNAME               # Custom domain (optional)
└── .nojekyll           # Disables Jekyll on GitHub Pages
```

## Custom domain

To use a custom domain, edit `CNAME` with your domain and configure DNS in your domain provider. To use only `username.github.io/portfolio`, delete the `CNAME` file.
