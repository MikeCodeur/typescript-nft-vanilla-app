// 🐶 début de l'exercice en bas de fichier
import { nftType } from "./types/types";
import { nftsList } from "./bdd/nft.js";

function cloneCard() {
  const cardContainer = document.querySelector(".main-card") as Element;
  const clone = cardContainer.cloneNode(true);
  document.querySelector(".card-container")?.appendChild(clone);
  return clone;
}

// 🐶 change le type any par le bon type (un element du tableau 'nftsList')
function createCard(data: any) {
  // 🐶 Appelle la fonction 'cloneCard()' et affecte le clone dans une variable "card"
  // ⛏️ décommente la fonction 'populateCard' : pense au cast
  // populateCard(card, data);
}

// 🐶 change le type any par le bon type (un element du tableau 'nftsList')
function populateCard(currentCard: Element, data: any) {
  //   📝 pour rappel : data à les propriété suivantes
  //   title: string;
  //   description: string;
  //   creator: string;
  //   img: string;
  //   price: string;
  //   expire: string;
  //   avatar: string;
  // 🐶 tu vas devoir recuperer chaque element de la Card et y mettre la bonne valeur
  // 🐶 Commençons par l'image
  // - récupere avec 'querySelector' et la classe ".main-image" l'element image
  // - ensuite affecte lui la valeur de src
  // exemple :
  // 🤖 img.src = data.img;
  //
  // 🐶 mais attention : 'querySelector' retourne un 'Element' et un 'Element' ne connais pas 'src'
  // pense à caster de la bonne manière
  // 📝 https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.htmlimageelement.html
  // 🐶 fais la même chose pour le titre
  // - classe title
  // - data.title
  // exemple :
  // 🤖 title.textContent = data.title;
  // cast de la bonne manière
  // 📝 https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.htmlheadelement.html
  // 🐶 fais la même chose pour la description
  // - classe description
  // - data.description;
  // 🐶 fais la même chose pour le prix
  // - classe eth
  // - data.price;
  // 🐶 fais la même chose pour l'expiration
  // 🐶 fais la même chose pour le createur
  // 🐶 fais la même chose pour l'avatar
}

export default function init() {
  console.log(nftsList);
  // 🐶 Appelle 'createCard' avec le premier element du tableau 'nftsList'
  // 🐶 Appelle 'createCard' avec le deuxieme element du tableau 'nftsList'
  // 🐶 constate l'affichage à l'écran
}
