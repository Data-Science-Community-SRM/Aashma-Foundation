const navHero = document.getElementById("navHero");
const hero = document.getElementById("hero");
const navAbout = document.getElementById("navAbout");
const about = document.getElementById("about");
const navIni = document.getElementById("navIni");
const initiatives = document.getElementById("initiatives");
const navDonate = document.getElementById("navDonate");
const donate = document.getElementById("donate");

navHero.addEventListener("click", () => hero.scrollIntoView());
navAbout.addEventListener("click", () => about.scrollIntoView());
navIni.addEventListener("click", () => initiatives.scrollIntoView());
navDonate.addEventListener("click", () => donate.scrollIntoView());

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
