# Supprimer toutes les cards

### 💡 Savoir détruire des éléments du DOM

## 📝 Tes notes

Detaille ce que tu as appris ici `src/instructions.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Notre application va devoir afficher des NFT mais nous allons également devoir en supprimer à l’écran lors de recherche par nom. Nous allons donc devoir faire une fonction qui supprime des `cards` et l’appeler au démarrage dans `init()`

```tsx
function clearCards() {}
```

## Exercice

🐶 Créé une fonction `clearCards`qui va supprimer tous les `Elements` enfants du container de cards : `card-container`.

- Pour cela tu vas devoir récupérer ce container
- le parcourir avec une boucle `while`
- Tant qu’il y a un enfant (`firstChild`), on le supprime
- On le supprime avec `removechild`

📝 Le lien vers la doc `firstChild` : [https://www.w3schools.com/jsref/prop_node_firstchild.asp](https://www.w3schools.com/jsref/prop_node_firstchild.asp)

📝 Le lien vers la doc `removechild` : [https://www.w3schools.com/jsref/met_node_removechild.asp](https://www.w3schools.com/jsref/met_node_removechild.asp)

<aside>
💡 Dans la fonction `init()` appelle clearCards() puis recréé des cards plusieurs fois pour s’assurer qu’il n’y a pas de problème

</aside>

Fichier :

- `src/app.ts`

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack](https://go.mikecodeur.com/cours-react-avis?entry.1912869708=TypeScript%20PRO&entry.1430994900=3.NFT-Vaniila&entry.533578441=06%20Remove%20Cards).
