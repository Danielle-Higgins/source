const hamburger = document.querySelector(".hamburger-btn");
const menu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("fa-xmark");
  menu.classList.toggle("active");
});
