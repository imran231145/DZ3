document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  const indicators = document.querySelectorAll(".nav-item");

  let activeSlideIndex = 0;

  function openSlide(index) {
    const activeSlide = document.querySelector(".slide.active");
    if (activeSlide) activeSlide.classList.remove("active");

    const newSlide = slides[index];
    newSlide.classList.add("active");
  }

  function selectIndicator(index) {
    const activeNav = document.querySelector(".nav-item.active");
    if (activeNav) activeNav.classList.remove("active");

    const newNav = indicators[index];
    if (newNav) newNav.classList.add("active");
  }

  // Клик по слайду
  slides.forEach((slide, i) => {
    slide.onclick = () => {
      activeSlideIndex = i;
      openSlide(activeSlideIndex);
      selectIndicator(activeSlideIndex);
    };
  });

  // Клик по индикатору
  indicators.forEach((nav, i) => {
    nav.onclick = () => {
      activeSlideIndex = i;
      openSlide(activeSlideIndex);
      selectIndicator(activeSlideIndex);
    };
  });
});