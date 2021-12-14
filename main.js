let hamburgerIcon = document.querySelector(".hamburger-icon");
let navbar = document.querySelector(".navbar");
hamburgerIcon.addEventListener("click", function () {
  navbar.classList.toggle("visibility");
});

let logo = document.querySelectorAll(".logo");
console.log(logo);

for (let i = 0; i < logo.length; i++) {
  logo[i].addEventListener("click", function () {
    location.href = "index.html";
  });
}
