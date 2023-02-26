/* 
download axios to make get request
get pokemon images from PokeAPI
make get request ahead of time before game starts
fetch 6 pokemon images
path in api: sprites.other.official-artwork
set ids for every card(12)

git card image tag w/ src

pick pokemon images at random 


card flips on click
after click, card rotates
once rotated, card shows pokemon image
will track which card to which image through id
activate card rendering with event listener
*/

const URL = "https://pokeapi.co/api/v2/pokemon";

const pokemon = [
  {
    id: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    id: 2,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    id: 3,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
  },
  {
    id: 4,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    id: 5,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
  },
  {
    id: 6,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
  },
];

const image_base_url =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

let random = [1, 2, 3, 4, 5, 6];
random = shuffle([...random, ...random]);

function shuffle (arr) {
 return arr.sort(() => Math.random() - 0.5);
};

const flipCards = document.querySelectorAll(".main__flip");

flipCards.forEach((flipCard, i) => {
  flipCard.addEventListener("click", (e) => {
    const src = image_base_url + random[i] + ".png";
    const image = flipCard.querySelector(".main__image");
    image.src = src;
  });
});
