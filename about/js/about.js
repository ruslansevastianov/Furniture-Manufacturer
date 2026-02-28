function init() {
  import("../../js/global.header-burger.js");
  import("./about.dropdowns-sections-a-m-mission.js");
  import("./about.dropdowns-section-vacancies.js");
  import("./about.our-team-carousel.js");
  import("../../js/icon-cart.js")
  import("../../js/cart.js");
}



const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
