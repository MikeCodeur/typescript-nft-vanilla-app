type nftType = {
  title: string;
  description: string;
  creator: string;
  img: string;
  price: string;
  expire: string;
  avatar: string;
};
const nftsList: nftType[] = [
  {
    title: "Donkey #3429",
    description:
      "Collection of 10,000 Primates facilitating a seamless adoption of the web3 space through community fueled ventures and collaborations.",
    creator: "Mike Codeur",
    img: "/images/primate1.png",
    price: "0.341 ETH",
    expire: "10 days left",
    avatar: "/images/avatar/25.jpg",
  },
  {
    title: "Dolly #1546",
    description: "Makak Our Equilibrium collection promotes balance and calm.",
    creator: "John doe",
    img: "/images/primate2.png",
    price: "0.041 ETH",
    expire: "3 days left",
    avatar: "/images/avatar/18.jpg",
  },
  {
    title: "Makak #2643",
    description: "'Fever Dream' by tiffatronn",
    creator: "Dam Abramov",
    img: "/images/primate3.png",
    price: "0.005 ETH",
    expire: "6 days left",
    avatar: "/images/avatar/50.jpg",
  },
  {
    title: "Ouran #3434",
    description: "The Hollows are at your service.",
    creator: "Mark Z",
    img: "/images/primate4.png",
    price: "0.154 ETH",
    expire: "4 days left",
    avatar: "/images/avatar/85.jpg",
  },
  {
    title: "Outan #9876",
    description:
      "MadSkullz #5390 is one of the 6666 NFTs from MadSkullz Collection that are joining SkullzCity to fight for Freedomz.",
    creator: "Jules P",
    img: "/images/primate5.png",
    price: "0.099 ETH",
    expire: "27 days left",
    avatar: "/images/avatar/90.jpg",
  },
  {
    title: "Dizzi #3856",
    description:
      "Please be aware that there are characters that look identical or very similar to English letters",
    creator: "Robert Z",
    img: "/images/primate6.png",
    price: "0.878 ETH",
    expire: "1 days left",
    avatar: "/images/avatar/90.jpg",
  },
];

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

function clearCards() {
  const cardsContainer = document.querySelector(".card-container");
  while (cardsContainer?.firstChild) {
    cardsContainer.removeChild(cardsContainer.firstChild);
  }
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

function init(list = nftsList) {
  clearCards();
  list.map((nftData) => {
    createCard(nftData);
  });
  const input = document.querySelector(".input-search") as HTMLInputElement;
  input.addEventListener("input", handleChange);
}

init();
