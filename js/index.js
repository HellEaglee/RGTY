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
