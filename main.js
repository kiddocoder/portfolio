
const scrollRevealOption = {
  distance: "20px",
  origin: "bottom",
  duration: 500,
};

ScrollReveal().reveal(".header__container h4", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__container", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".panel__grid", {
  ...scrollRevealOption,
  delay: 1000,
});
const progressBar = document.querySelectorAll(".about__progressbar");

Array.from(progressBar).forEach((bar) => {
  const progress = bar.dataset.progress;
  bar.querySelector("span").style.width = progress + "%";
});

ScrollReveal().reveal(".about__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__content .about__progress", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});
var swiperOptions = {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
};
const swiper = new Swiper(".swiper", swiperOptions);

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});
