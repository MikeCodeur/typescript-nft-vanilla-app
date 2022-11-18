import { nftsList } from "./bdd/nft.js";
function clearCards() {
    const cardsContainer = document.querySelector(".card-container");
    while (cardsContainer?.firstChild) {
        cardsContainer.removeChild(cardsContainer.firstChild);
    }
}
function cloneCard() {
    const cardContainer = document.querySelector(".main-card");
    const clone = cardContainer.cloneNode(true);
    document.querySelector(".card-container")?.appendChild(clone);
    return clone;
}
function populateCard(currentCard, data) {
    const img = currentCard.querySelector(".main-image");
    img.src = data.img;
    const title = currentCard.querySelector(".title");
    title.textContent = data.title;
    const description = currentCard.querySelector(".description");
    description.textContent = data.description;
    const eth = currentCard.querySelector(".eth");
    eth.textContent = data.price;
    const expire = currentCard.querySelector(".expire");
    expire.textContent = data.expire;
    const creator = currentCard.querySelector(".creator-name");
    creator.textContent = data.creator;
    const avatar = currentCard.querySelector(".avatar");
    avatar.src = data.avatar;
}
function createCard(data) {
    const card = cloneCard();
    populateCard(card, data);
}
function handleChange(event) {
    const value = event.target.value;
    const filteredList = nftsList.filter((nft) => {
        return (nft.title.toLowerCase()?.includes(value.toLowerCase()) ||
            nft.description.toLowerCase().includes(value.toLowerCase()) ||
            nft.creator.toLowerCase().includes(value.toLowerCase()));
    });
    init(filteredList);
}
export default function init(list = nftsList) {
    console.log(list);
    const input = document.querySelector(".input-search");
    input.addEventListener("input", handleChange);
    clearCards();
    list.map((nftData) => {
        createCard(nftData);
    });
}
