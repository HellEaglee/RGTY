const mainWrapper = document.querySelector(".main-wrapper");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", () => {
  mainWrapper.scrollBy({
    top: 0,
    left: window.innerWidth, // Scroll by one viewport width
    behavior: "smooth", // Smooth scrolling
  });
});

prevBtn.addEventListener("click", () => {
  mainWrapper.scrollBy({
    top: 0,
    left: -window.innerWidth, // Scroll back by one viewport width
    behavior: "smooth", // Smooth scrolling
  });
});

let startX;

mainWrapper.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX; // Get initial touch position
});

mainWrapper.addEventListener("touchmove", (e) => {
  const moveX = e.touches[0].clientX;
  const diffX = startX - moveX;

  if (diffX > 50) {
    // Swipe left
    nextSlide(); // Call your function to go to the next slide
  } else if (diffX < -50) {
    // Swipe right
    prevSlide(); // Call your function to go to the previous slide
  }
});
