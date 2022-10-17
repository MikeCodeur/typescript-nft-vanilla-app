// 🐶 déclare un Type 'nftType' ayant toutes les propriété d'un nft affiché dans la card
// - title: string;
// - description: string;
// - creator: string;
// - img: string;
// - price: string;
// - expire: string;
// - avatar: string;

type nftType = {
  title: string;
  description: string;
  creator: string;
  img: string;
  price: string;
  expire: string;
  avatar: string;
};

// 🐶 Change le type Any pour le bon type (un array de nftType)
const nftsList: any = [
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
  // 🐶 Ajoute au moins 5 autres NFT avec des noms, prix et descriptions differences
  // 📝 rappel : des images d'avatar se trouvent dans /images/avatar
  // des images de NFT dans /images/primate 1 2 3 4 5 6.png
];

export default function init() {
  console.log(nftsList);
}
