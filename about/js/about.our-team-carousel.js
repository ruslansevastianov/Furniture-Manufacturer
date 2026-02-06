const arrowLeft = document.querySelector(".our-team__carousel-container-arrow-left");
const arowRight = document.querySelector(".our-team__carousel-container-arrow-right");
const trackContainer = document.querySelector(".our-team__carousel-track");
const contentMainContainer = document.querySelector(".our-team__carousel");
const slideWidth = contentMainContainer.offsetWidth;


arrowLeft.addEventListener("click", () => {
  trackContainer.scroll({
    left: trackContainer.scrollLeft - slideWidth,
    behavior: "smooth",
  });
});

arowRight.addEventListener("click", () => {
  trackContainer.scroll({
    left: trackContainer.scrollLeft + slideWidth,
    behavior: "smooth",
  });
});
