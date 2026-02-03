const arrowLeft = document.querySelector(".what-we-offer__slider-arrow-left");
const arrowRight = document.querySelector(".what-we-offer__slider-arrow-right");
const trackContainer = document.querySelector(".what-we-offer__track-container");
const listDots = document.querySelectorAll(".what-we-offer__slider-dot");

let tmp = 0;

for (let i = 0; i < listDots.length; i++) {
  if (i === tmp) {
    if (!listDots[i].classList.contains("active-dot-item")) {
      listDots[i].classList.add("active-dot-item");
    }
  } else {
    if (listDots[i].classList.contains("active-dot-item")) {
      listDots[i].classList.remove("active-dot-item");
    } else {
      listDots[i].classList.remove("active-dot-item");
    }
  }
}

// Отримати ширину першого слайда + gap
const firstSlide = trackContainer.querySelector(".what-we-offer__slide");
const slideWidth = firstSlide.offsetWidth;
const gap = 20; // з CSS gap: 20px
const scrollAmount = slideWidth + gap;

arrowRight.addEventListener("click", () => {
  trackContainer.scroll({
    left: trackContainer.scrollLeft + scrollAmount,
    behavior: "smooth",
  });

  if (tmp <= 1) {
    tmp = ++tmp;
  } else {
    tmp = 2;
  }

  for (let i = 0; i < listDots.length; i++) {
    if (i === tmp) {
      if (!listDots[i].classList.contains("active-dot-item")) {
        listDots[i].classList.add("active-dot-item");
      }
    } else {
      if (listDots[i].classList.contains("active-dot-item")) {
        listDots[i].classList.remove("active-dot-item");
      }
    }
  }
});

arrowLeft.addEventListener("click", () => {
  trackContainer.scroll({
    left: trackContainer.scrollLeft - scrollAmount,
    behavior: "smooth",
  });

  if (tmp <= 2 && tmp != 0) {
    tmp = --tmp;
  } else {
    tmp = 0;
  }

  for (let i = 0; i < listDots.length; i++) {
    if (i === tmp) {
      if (!listDots[i].classList.contains("active-dot-item")) {
        listDots[i].classList.add("active-dot-item");
      }
    } else {
      if (listDots[i].classList.contains("active-dot-item")) {
        listDots[i].classList.remove("active-dot-item");
      }
    }
  }
});

for (let i = 0; i < listDots.length; i++) {
  listDots[i].addEventListener("click", () => {
    if (i === 0) {
      tmp = 0;
      trackContainer.scroll({
        left: 0,
        behavior: "smooth",
      });

      for (let j = 0; j < listDots.length; j++) {
        if (j === i) {
          if (!listDots[j].classList.contains("active-dot-item")) {
            listDots[j].classList.add("active-dot-item");
          }
        } else {
          if (listDots[j].classList.contains("active-dot-item")) {
            listDots[j].classList.remove("active-dot-item");
          } else {
            listDots[j].classList.remove("active-dot-item");
          }
        }
      }
    } else if (i === 1) {
      tmp = 1;
      trackContainer.scroll({
        left: scrollAmount,
        behavior: "smooth",
      });

      for (let j = 0; j < listDots.length; j++) {
        if (j === i) {
          if (!listDots[j].classList.contains("active-dot-item")) {
            listDots[j].classList.add("active-dot-item");
          }
        } else {
          if (listDots[j].classList.contains("active-dot-item")) {
            listDots[j].classList.remove("active-dot-item");
          } else {
            listDots[j].classList.remove("active-dot-item");
          }
        }
      }
    } else if (i === 2) {
      tmp = 2;
      trackContainer.scroll({
        left: scrollAmount * 2,
        behavior: "smooth",
      });

      for (let j = 0; j < listDots.length; j++) {
        if (j === i) {
          if (!listDots[j].classList.contains("active-dot-item")) {
            listDots[j].classList.add("active-dot-item");
          }
        } else {
          if (listDots[j].classList.contains("active-dot-item")) {
            listDots[j].classList.remove("active-dot-item");
          } else {
            listDots[j].classList.remove("active-dot-item");
          }
        }
      }
    }
  });
}


