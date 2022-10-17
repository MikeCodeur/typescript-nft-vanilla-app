import { nftType } from "./types/types";
import { nftsList } from "./bdd/nft.js";

// 🐶 début de l'exercice en bas
function clearCards() {
  const cardsContainer = document.querySelector(".card-container");
  while (cardsContainer?.firstChild) {
    cardsContainer.removeChild(cardsContainer.firstChild);
  }
}

function cloneCard() {
  const cardContainer = document.querySelector(".main-card") as Element;
  const clone = cardContainer.cloneNode(true);
  document.querySelector(".card-container")?.appendChild(clone);
  return clone;
}

function populateCard(currentCard: Element, data: nftType) {
  const img = currentCard.querySelector(".main-image") as HTMLImageElement;
  img.src = data.img;

  const title = currentCard.querySelector(".title") as HTMLHeadElement;
  title.textContent = data.title;

  const description = currentCard.querySelector(
    ".description"
  ) as HTMLParagraphElement;
  description.textContent = data.description;

  const eth = currentCard.querySelector(".eth") as HTMLSpanElement;
  eth.textContent = data.price;

  const expire = currentCard.querySelector(".expire") as HTMLSpanElement;
  expire.textContent = data.expire;

  const creator = currentCard.querySelector(".creator-name") as HTMLSpanElement;
  creator.textContent = data.creator;

  const avatar = currentCard.querySelector(".avatar") as HTMLImageElement;
  avatar.src = data.avatar;
}

function createCard(data: nftType) {
  const card = cloneCard();
  populateCard(card as Element, data);
}

// 🐶 implemente la fonction 'handleChange'
// Change le type 'any' pour le bon type d'Event
function handleChange(event: Event) {
  // 🐶 pour récuperer la valeur du champs saisie en Javascript il suffit de faire
  // 🤖
  // const value = event.target.value
  //
  // Sauf qu'ici nous avons l'erreur : La propriété 'value' n'existe pas sur le type 'EventTarget'
  // 🐶 il faut donc caster avec le bon Element : dans notre cas 'HTMLInputElement' pour avec accès 'value'
  // 🐶 filtrage
  // utilise la fonction 'filter' sur 'nftsList' avec le resultat dans une variable 'filteredList'
  // règles de filtrage :
  // - Insensible à la casse 🤖 `toLowerCase()`
  // - Que 'value' soir présent dans au moins un des 3 champs
  //   - title
  //   - description
  //   - creator
  // 🐶 appelle 'init' avec 'filteredList' en parameter
}

// 🐶 ajoute un paramètre 'list' à la fonction 'init', initialise par defaut à 'nftsList'
export default function init() {
  // 🐶 log list 'list' et non 'nftsList'
  console.log(nftsList);

  // 🐶 récupère le champs 'input' : class ".input-search" et ajoute le dans une variable 'input'
  const input = document.querySelector(".input-search") as HTMLInputElement;

  // 🐶 Ajoute un 'eventListener' de type 'input' sur input grace à "addEventListener" spécifie lui 'handleChange'
  // 📝 Lien doc addEventListnener https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
  // Attention à bien caster 'input' pour que la fonction 'addEventListnener' soit reconnue

  clearCards();
  // 🐶 n'utilise plus 'nftsList' (la liste complete) mais utilise 'list' la liste filtrée
  nftsList.map((nftData) => {
    createCard(nftData);
  });
}
