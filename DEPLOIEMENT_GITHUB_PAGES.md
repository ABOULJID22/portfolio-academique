# Deploiement GitHub Pages

Ce document explique les etapes suivies pour heberger le portfolio React/Vite avec GitHub Pages.

## Lien public propose

https://abouljid22.github.io/portfolio-academique/pr-abouljidmohamed/

Le segment `pr-abouljidmohamed` est ajoute comme route publique du site, comme demande.

## Etapes suivies

1. Initialiser le depot Git local dans le dossier du projet.

```bash
git init
git branch -M main
git remote add origin https://github.com/ABOULJID22/portfolio-academique.git
```

2. Ajouter un `.gitignore` pour ne pas publier les fichiers locaux inutiles.

```gitignore
node_modules/
dist/
*.log
.env
.env.*
```

3. Configurer Vite pour GitHub Pages.

Le site est publie sous le depot `portfolio-academique`, donc `vite.config.js` utilise :

```js
base: '/portfolio-academique/'
```

4. Configurer React Router avec le meme chemin de base.

`src/main.jsx` lit `import.meta.env.BASE_URL` et le passe a `BrowserRouter` avec `basename`.

5. Ajouter la route publique obligatoire.

Dans `src/App.jsx`, la route suivante affiche la page d'accueil :

```jsx
<Route path="pr-abouljidmohamed" element={<HomePage />} />
```

6. Ajouter un fallback SPA pour GitHub Pages.

Le script `scripts/create-spa-404.mjs` copie `dist/index.html` vers `dist/404.html` apres le build. Cela permet aux routes React d'etre rechargees directement depuis le navigateur.

7. Ajouter le workflow GitHub Actions.

Le fichier `.github/workflows/deploy.yml` :

- installe les dependances avec `npm ci`
- construit le projet avec `npm run build`
- publie le dossier `dist` sur GitHub Pages

8. Activer GitHub Pages.

Dans GitHub, aller dans :

`Settings` -> `Pages` -> `Build and deployment` -> `Source` -> `GitHub Actions`

9. Pousser les changements.

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push
```

Apres le push, GitHub Actions lance automatiquement le deploiement.

## Commandes de verification locale

```bash
npm run build
npm run preview
```

## References officielles

- GitHub Pages avec workflows personnalises : https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- Deploiement Vite sur GitHub Pages : https://vite.dev/guide/static-deploy.html#github-pages
- `BrowserRouter` et `basename` : https://reactrouter.com/api/declarative-routers/BrowserRouter
