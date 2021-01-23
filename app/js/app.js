const hamburgerBtn = document.querySelector("#hamburgerBtn");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");
hamburgerBtn.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  e.preventDefault();
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    body.classList.remove("noscroll");
    fadeElements.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    header.classList.add("open");
    body.classList.add("noscroll");
    fadeElements.forEach((element) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
