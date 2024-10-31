// Slider

document.addEventListener("DOMContentLoaded", () => {
  const mainSlider = document.querySelector(".main-slider");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const dotsContainer = document.querySelector(".slider-dots");

  const slides = mainSlider.children;
  let currentIndex = 0;

  // Create dots
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("slider-dot");
    dot.dataset.index = i;
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  // Function to update active dot
  function updateDots() {
    const dots = document.querySelectorAll(".slider-dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  // Function to update button visibility
  function updateButtonVisibility() {
    if (currentIndex === 0) {
      prevBtn.classList.add("hidden");
    } else {
      prevBtn.classList.remove("hidden");
    }

    if (currentIndex === slides.length - 1) {
      nextBtn.classList.add("hidden");
    } else {
      nextBtn.classList.remove("hidden");
    }
  }

  // Function to go to a specific slide
  function goToSlide(index) {
    currentIndex = index;
    mainSlider.scrollTo({
      top: 0,
      left: window.innerWidth * currentIndex,
      behavior: "smooth",
    });
    updateDots();
    updateButtonVisibility();
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(currentIndex);
  });

  // Initialize dots and button visibility on load
  updateDots();
  updateButtonVisibility();
});
