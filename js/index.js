function init() {
  import("./global.header-burger.js");
  import("../index/js/index.what-we-offer-carousel.js");
  import("../projects/js/projects.js");
  import("../about/js/about.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});

