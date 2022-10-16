# Initialisation du projet

### 💡 Description longue de l'exercice

## 📝 Tes notes

Detaille ce que tu as appris ici `src/exercise/01.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Comme nous l’avons vu dans les modules précédents, pour utiliser TypeScript dans un projet JavaScript, il faut l’initialiser avec de la configuration.

Dans notre HTML nous allons appeler notre fichier app.js dans le répertoire :

```html
<script src="./built/app.js" defer></script>
```

Pour la solution

## Exercice

Nous voulons la configuration suivantes.

- Les fichiers sources dans le dossier `/src`
- Les fichiers compilés dans le dossier `/built`
- Pourvoir utiliser les version avancés de ECMAScript (ES2015 min)

🐶 Initialise le projet avec

```bash
tsc --init
```

Modifie le fichier `tsconfig.json` et ajoute

```bash
"target": "es2015"
"outDir": "./built"
"rootDir": "./src"
```

Créé un fichier `App.ts` dans `src` avec une instruction basique (`console.log(), alert()` …)

Compile le résultat avec

```bash
tsc -w
```

Dans HTML ajoute

```html
<script src="./built/app.js" defer></script>
```

Et vérifie que ton instruction est exécuté correctement

📑 Le lien vers la doc [TSConfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack](https://go.mikecodeur.com/cours-react-avis).
