const listButtonsDropdowns = document.querySelectorAll(".a-m__accordion-container-button");
const contentDropdowns = document.querySelectorAll(".a-m__accordion-item-container-content");
const listLineVerticalLines = document.querySelectorAll(".a-m__accordion-icon-line-vertical");


for (let i = 0; i < listButtonsDropdowns.length; i++) {
  listButtonsDropdowns[i].addEventListener("click", () => {
    for (let j = 0; j < contentDropdowns.length; j++) {
      if (j !== i) {
        if (contentDropdowns[j].classList.contains("active-content-dropdown")) {
          contentDropdowns[j].classList.remove("active-content-dropdown");
          listLineVerticalLines[j].classList.remove("a-m__accordion-icon-line-vertical-not-visible");
        } 
      } else {
        if (!contentDropdowns[i].classList.contains("active-content-dropdown")) {
          contentDropdowns[i].classList.add("active-content-dropdown");
           listLineVerticalLines[i].classList.add("a-m__accordion-icon-line-vertical-not-visible");
        } else {
          contentDropdowns[i].classList.remove("active-content-dropdown");
        listLineVerticalLines[i].classList.remove("a-m__accordion-icon-line-vertical-not-visible");
        }
      }
    }
  });
}


