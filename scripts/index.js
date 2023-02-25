/* 
download axios to make get request
get pokemon images from PokeAPI
make get request ahead of time before game starts
fetch 6 pokemon images
path in api: sprites.other.official-artwork
set ids for every card(12)

pick pokemon images at random 


card flips on click
after click, card rotates
once rotated, card shows pokemon image
git card image tag w/ src
will track which card to which image through id
activate card rendering with event listener
*/

const URL = "https://pokeapi.co/api/v2/pokemon";

const image = [
    {
        id: 1,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    },
    {
        id: 2,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
    },
    {
        id: 3,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
    },
    {
        id: 4,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
    },
    {
        id: 5,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
    },
    {
        id: 6,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
    },
]



axios.get(URL + '/6')
  .then(function (response) {
    console.log(response.data.sprites.other["official-artwork"].front_default);
  })
  .catch(function (error) {
    console.log(error);
  })
  