# Remplir une Card avec les données

### 💡 Remplir une Card avec les données

## 📝 Tes notes

Detaille ce que tu as appris ici `src/instructions.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Nous avons vu précédemment comment cloner une `card`, nous allons maintenant avoir besoin de la remplir avec les données NFT venant de notre BDD.

- Pour simplifier la lisibilité du code nous avons déplacer `nftList` dans `/src/bdd/nft.ts`. On peut maintenant l’utiliser directement de la manière suivante :

```tsx
import { nftsList } from "./bdd/nft";
```

## Exercice

🐶 Dans cet exercice tu vas devoir créer une super fonction qui appelle `cloneCard` et `populateCard`

Exemple :

```tsx
function createCard(data: any) {
  const card = cloneCard();
  populateCard(card, data);
}
```

## Bonus

### 1. 🚀 Afficher toutes les cards dynamiquement

Plutôt que d’appeler de manière statique chaque création de `card`

```tsx
createCard(nftsList[0]);
createCard(nftsList[1]);
...
```

🐶 Parcours tous les éléments `nftsList` et affiche les à l’écran

- utilise `.map`

###

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack.](https://go.mikecodeur.com/cours-react-avis?entry.1912869708=TypeScript%20PRO&entry.1430994900=3.NFT-Vaniila&entry.533578441=05%20Remplir%20CardNFT)
