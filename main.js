let hamburgerIcon = document.querySelector(".hamburger-icon");
let navbar = document.querySelector(".navbar");
hamburgerIcon.addEventListener("click", function () {
  navbar.classList.toggle("visibility");
});
