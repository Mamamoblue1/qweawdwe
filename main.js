
const cards = document.querySelectorAll(".cards img, .cards video");
let currentIndex = 0; 


function showCards() {
  cards.forEach((card, index) => {
    card.classList.remove("active", "prev", "next");

    if (index === currentIndex) {
      card.classList.add("active");

      if (card.tagName.toLowerCase() === "video") {
        card.play();
      }
    } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
      card.classList.add("prev");

      if (card.tagName.toLowerCase() === "video") {
        card.pause();
      }
    } else if (index === (currentIndex + 1) % cards.length) {
      card.classList.add("next");

      if (card.tagName.toLowerCase() === "video") {
        card.pause();
      }
    } else {

      if (card.tagName.toLowerCase() === "video") {
        card.pause();
      }
    }
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % cards.length;
  showCards();
  popHearts();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showCards();
  popHearts();
}

function popHearts() {
  const heartColors = ["#350377ff", "#b11463ff", "#ff1493", "#9975eeff", "#ff4081", "#e91e63", "#FF0000"];

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 80 + 20 + "vh";
    heart.style.fontSize = (Math.random() * 20 + 40) + "px";
    heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
}


showCards();
