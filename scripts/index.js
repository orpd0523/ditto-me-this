const image_base_url =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

let random = [rand(), rand(), rand(), rand(), rand(), rand()];
random = shuffle([...random, ...random]);

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

const flipCards = document.querySelectorAll(".main__flip");

const button = document.querySelector(".main__button")
button.addEventListener("click", (e) => {
  random = [rand(), rand(), rand(), rand(), rand(), rand()];
  random = shuffle([...random, ...random]);
  flipCards.forEach((flipCard)=>{
    const image = flipCard.querySelector(".main__image");
    image.src = "./assets/logo/ditto.png";
  })
})

function sleep() {
    return new Promise(resolve => setTimeout(resolve, 500));
}

function rand() {
  let num = Math.floor(Math.random() * 152)
  return num = num === 0 ? 1 : num;
}

let isSleeping = false;

let lastClicked;

flipCards.forEach((flipCard, i) => {
  flipCard.addEventListener("click", async(e) => {
    if(isSleeping) return
    isSleeping = true
    const src = image_base_url + random[i] + ".png";
    const image = flipCard.querySelector(".main__image");
    image.src = src;
    if (lastClicked) {
      if (lastClicked.src !== src) {
        await sleep()
        lastClicked.src = "./assets/logo/ditto.png";
        image.src = "./assets/logo/ditto.png";
      }
      lastClicked = null
    } else {
      lastClicked = image;
    }
    isSleeping = false
  });
});
