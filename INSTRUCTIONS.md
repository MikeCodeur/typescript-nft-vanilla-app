# Cloner une Card

### 💡 Cloner des Element du DOM avec TypeScript

## 📝 Tes notes

Detaille ce que tu as appris ici `src/instructions.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

L’idée dans cette section et de savoir `cloner` une `card`. Nous allons avoir une `Card` HTML _‘vide’_ et _masquée_ qui nous servira de `card` de référence. Nous pourrons ensuite la dupliquer autant de fois que nécessaire en fonctions des résultats dans le formulaire de recherche.

- Nous allons utiliser `cloneNode` qui permet de copier des noeud entier du DOM

📑 Le lien vers la doc de [cloneNode](https://www.w3schools.com/jsref/met_node_clonenode.asp)

## Exercice

🐶 Dans un premier temps supprime les `cards` en trop pour ne garder qu’une seule `card` qui sera la `card` de référence. Ensuite wrap cette `card` d’une div masquée pour ne plus l’afficher : utilise un `style : display: none` : Aucune card ne devrait maintenant être visible

```html
<!-- index.html -->
<div style="display: none">
  <section class="main-card">...</section>
</div>
```

🐶 Dans un deuxième temps tu vas devoir créer une fonction qui clone la `card` de référence

- Créé une fonction `cloneCard` qui clone la `card` de référence.

Fichier :

- `/src/app.ts`
- `/index.html`

## Aller plus loin

📑 Le lien vers la doc cloneNode

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack](https://go.mikecodeur.com/cours-react-avis?entry.1912869708=TypeScript%20PRO&entry.1430994900=3.NFT-Vaniila&entry.533578441=04%20Cloner%20Card).
