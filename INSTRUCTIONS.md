# Construction d’une base de données de NFT

### 💡 Construction d’une base de données de NFT

## 📝 Tes notes

Detaille ce que tu as appris ici `src/instructions.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Nous allons maintenant avoir un comportement dynamique, avec des données diverses et variées venant d’une base de données. Généralement ces bases de données sont sur des serveurs et accessibles via des API (REST, GraphQL etc …). Pour notre exercices nous allons les stocker dans un `array`

Avant de commencer nous allons modifier la config pour pouvoir gérer des modules JavaScript. Les modules permettent d’utiliser les `import / export` pour rendre notre code plus modulable.

- La première étape est d’ajouter le `type="module"` à la balise `script`

```bash
<script src="./built/app.js" type="module" defer></script>
```

- Ensuite nous allons changer le type de module généré. Par default c’est \***\*`CommonJS`, nous allons le configurer en `**es2020`dans`tsconfig`

```bash
//tsconfig
"module": "es2020"
```

Pour utiliser ton code `exercice` ou la `solution` tu n’auras plus commenter / décommenter

```tsx
// fichier app.ts

// Exercice
// import init from "./app.exercice.js";

// Solution
import init from "./app.final.js";
```

## Exercice

👨‍✈️ Hugo le chef de projets nous informe que les données venant des développeurs backend via des API ne sont pas prête mais que nous connaissons le format d’échanges. Il s’agit d’un tableau contenant plusieurs objets correspondant à des cards.

```bash
- title: string;
- description: string;
- creator: string;
- img: string;
- price: string;
- expire: string;
- avatar: string;
```

🐶 dans cet exercice tu vas devoir définir un type `nftType` et créé un array avec 6 éléments minimum. Choisis valeurs les plus varié possibles (nom, prix author)

- La description ne dois pas dépasser les 145 charactères
- Utilise le dossier `/images/avartar` pour avoir des avatars varié
- Utilise `/images/primate 1 2 3 4 5 6.png` pour avoir des images variés

fait un console log pour vérifier que tout fonctionne correctement

<aside>
⚠️ Pour l’exercice nous avons couper`app.ts` en 2 fichier `src/app.exercise.ts` et la solution dans `src/app.final.ts`. Modifie l’import dans `app.ts` pour switcher vers la solution

</aside>

<aside>
💡 pense à lancer le watcher typescript avec `tsc -w`

</aside>

Fichier

- `src/app.exercice.ts`

## Bonus

### 1. 🚀 Import de types

Les types sont souvent utiliser plusieurs fois dans une application, il peut être judicieux de le mettre dans un fichier à part.

🐶 Dans cette exercice déplace le type `nftType` dans un répertoire `/types/types.ts`

Et importe le dans `app.ts` de la manière suivante

```tsx
import { nftType } from "./types/types";
```

Fichiers :

- `src/app.exercice.ts`
- `src/types/types.exercise.ts`

###

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack.](https://go.mikecodeur.com/cours-react-avis?entry.1912869708=TypeScript%20PRO&entry.1430994900=3.NFT-Vaniila&entry.533578441=03%20BDD%20NFT)
