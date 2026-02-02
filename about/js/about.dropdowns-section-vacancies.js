const listButtonsDropdowns1 = document.querySelectorAll(".vacancies__accordion1-container-button");
const contentDropdowns1 = document.querySelectorAll(".vacancies__accordion1-item-container-content");
const listLineVerticalLines1 = document.querySelectorAll(".vacancies__accordion1-icon-line-vertical");


for (let i = 0; i < listButtonsDropdowns1.length; i++) {
  listButtonsDropdowns1[i].addEventListener("click", () => {
    for (let j = 0; j < contentDropdowns1.length; j++) {
      if (j !== i) {
        if (contentDropdowns1[j].classList.contains("active-content-dropdown1")) {
          contentDropdowns1[j].classList.remove("active-content-dropdown1");
          listLineVerticalLines1[j].classList.remove("vacancies__accordion1-icon-line-vertical-not-visible");
        } 
      } else {
        if (!contentDropdowns1[i].classList.contains("active-content-dropdown1")) {
          contentDropdowns1[i].classList.add("active-content-dropdown1");
           listLineVerticalLines1[i].classList.add("vacancies__accordion1-icon-line-vertical-not-visible");
        } else {
          contentDropdowns1[i].classList.remove("active-content-dropdown1");
        listLineVerticalLines1[i].classList.remove("vacancies__accordion1-icon-line-vertical-not-visible");
        }
      }
    }
  });
}


const listButtonsDropdowns2 = document.querySelectorAll(".vacancies__accordion2-container-button");
const contentDropdowns2 = document.querySelectorAll(".vacancies__accordion2-item-container-content");
const listLineVerticalLines2 = document.querySelectorAll(".vacancies__accordion2-icon-line-vertical");

for (let i = 0; i < listButtonsDropdowns2.length; i++) {
  listButtonsDropdowns2[i].addEventListener("click", () => {
    for (let j = 0; j < contentDropdowns2.length; j++) {
      if (j !== i) {
        if (contentDropdowns2[j].classList.contains("active-content-dropdown2")) {
          contentDropdowns2[j].classList.remove("active-content-dropdown2");
          listLineVerticalLines2[j].classList.remove("vacancies__accordion2-icon-line-vertical-not-visible");
        } 
      } else {
        if (!contentDropdowns2[i].classList.contains("active-content-dropdown2")) {
          contentDropdowns2[i].classList.add("active-content-dropdown2");
           listLineVerticalLines2[i].classList.add("vacancies__accordion2-icon-line-vertical-not-visible");
        } else {
          contentDropdowns2[i].classList.remove("active-content-dropdown2");
        listLineVerticalLines2[i].classList.remove("vacancies__accordion2-icon-line-vertical-not-visible");
        }
      }
    }
  });
}











