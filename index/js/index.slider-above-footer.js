const arrowLeft = document.querySelector(".lower-carousel__carousel-container-arrow-left");
const arrowRight = document.querySelector(".lower-carousel__carousel-container-arrow-right");
const trackContainer = document.querySelector(".lower-carousel__track-container");

const contentMainContainer = document.querySelector(".lower-carousel__content-main-container");
const slideWidth = contentMainContainer.offsetWidth;



arrowLeft.addEventListener("click", () => {
  trackContainer.scroll({
    left: trackContainer.scrollLeft - slideWidth,
    behavior: "smooth",
  });
});

arrowRight.addEventListener("click", () => {
  trackContainer.scroll({
    left: trackContainer.scrollLeft + slideWidth,
    behavior: "smooth",
  });
});







