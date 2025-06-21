// Get all images inside the gallery
const images = document.querySelectorAll(".cards img");
let currentIndex = 0; // starting image index

// Function to update the active, next, and prev image classes
function showImages() {
  images.forEach((img, index) => {
    img.classList.remove("active", "prev", "next");

    if (index === currentIndex) {
      img.classList.add("active");
    } else if (index === (currentIndex - 1 + images.length) % images.length) {
      img.classList.add("prev");
    } else if (index === (currentIndex + 1) % images.length) {
      img.classList.add("next");
    }
  });
}

// Function for next button
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImages();
  popHearts();
}

// Function for previous button
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImages();
  popHearts(); // also trigger hearts when clicking prev
}

// Function to create floating hearts
function popHearts() {
  const heartColors = ["#ff6b81", "#ff69b4", "#ff1493", "#ff4500", "#ff4081", "#e91e63", "#FF0000"];

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤";

    // random position, size, and color
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 80 + 20 + "vh";
    heart.style.fontSize = (Math.random() * 40 + 30) + "px";
    heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];

    document.querySelector(".hearts").appendChild(heart);

    // remove after 2 seconds
    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
}

// Initialize images on page load
showImages();
