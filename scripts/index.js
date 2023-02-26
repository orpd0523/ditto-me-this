const image_base_url =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

let random = [1, 2, 3, 4, 5, 6];
random = shuffle([...random, ...random]);

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

const flipCards = document.querySelectorAll(".main__flip");

function sleep() {
    return new Promise(resolve => setTimeout(resolve, 500));
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
