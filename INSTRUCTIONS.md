# Recherche de cards

### 💡Savoir rechercher / filtrer des éléments

## 📝 Tes notes

Detaille ce que tu as appris ici `src/instructions.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Nous avons préparer le terrain en affichant, supprimant des cards venant d’une BDD. Maintenant tu vas devoir les filtrer dynamiquement les NFT en fonction des termes de recherches.

Algorithme :

```tsx
- sur chaque nouvelle saisie dans le champs input
- suppression de toutes les cards
- filtre des éléments de la BDD qui matchent sur les critères
	- nom
	- description
	- création
- Affichage des cards filtrés
```

## Exercice

🐶 Pour pouvoir détecter un changement dans le champs `input` tu vas devoir ajouter un `eventListner` avec la fonction `addEventListener`

📑 Lien vers la doc [addEventListnener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

```tsx
input.addEventListener("input", handleChange);
//handleChange fonction qui sera executée sur chaque saisie
```

🐶 Utilise la fonction `filter` pour te retourner un `array` filtré

📑 Doc de [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

🐶 Modifie la signature de la fonction `init()` pour qu’elle accepte un un paramètre `list` initialiser par défaut à `nftsList`. Appelle `init()` avec le tableau filtré sur chaque saisie de champs input

Fichier :

- `src/app.ts`

##

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack.](https://go.mikecodeur.com/cours-react-avis?entry.1912869708=TypeScript%20PRO&entry.1430994900=3.NFT-Vaniila&entry.533578441=07%20Recherche%20NFT)
