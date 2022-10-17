import { nftType } from "./types/types";
import { nftsList } from "./bdd/nft.js";

// 🐶 Fais une fonction clearCard
function clearCards() {
  // 🐶 récupère le ".card-container" et affecte le dans une variable 'cardsContainer'
  // const cardsContainer = ...
  //
  // 'cardsContainer' contient une liste d'enfants 'child' - normalement toutes nos cards
  // Tu vas devoir supprimer tous les enfants contenus dans 'cardsContainer'
  //
  // Pour supprimer un child :
  // - 📝 doc 'removechild' : https://www.w3schools.com/jsref/met_node_removechild.asp
  // tu peux par exemple utiliser une boucle 'while' et "firstChild"
  // - 📝 doc 'firstChild' : https://www.w3schools.com/jsref/prop_node_firstchild.asp
}
// 🐶 appelle 'clearCards' dans init() en bas

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

function handleChange(event: Event) {
  const target = event.target as HTMLInputElement;

  const filteredList = nftsList.filter((nft) => {
    return (
      nft.title.toLowerCase()?.includes(target.value.toLowerCase()) ||
      nft.description.toLowerCase().includes(target.value.toLowerCase()) ||
      nft.creator.toLowerCase().includes(target.value.toLowerCase())
    );
  });
  init(filteredList);
}

export default function init(list = nftsList) {
  console.log(nftsList);
  // 🐶 appelle 'clearCards'
  list.map((nftData) => {
    createCard(nftData);
  });
  // 🐶 appelle à nouveau 'clearCards' pour etre sur que plusieurs cycle
  // de creations / desctructions fonctionnent sans problème
  //
  // ⛏️ decommente ce code pour afficher à nouveau des card
  // list.map((nftData) => {
  //   createCard(nftData);
  // });
}
