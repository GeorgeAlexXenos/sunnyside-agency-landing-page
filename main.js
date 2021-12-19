let hamburgerIcon = document.querySelector(".hamburger-icon");
let navbar = document.querySelector(".navbar");
hamburgerIcon.addEventListener("click", function () {
  navbar.classList.toggle("visibility");
});

let logo = document.querySelectorAll(".logo");
// console.log(logo);

for (let i = 0; i < logo.length; i++) {
  logo[i].addEventListener("click", function () {
    location.href = "index.html";
  });
}

let headerOnScroll = document.querySelector(".header-onscroll-down");
console.log(headerOnScroll);
window.addEventListener("scroll", function () {
  console.log("scrolling...");
  headerOnScroll.classList.add("visibility");
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 200
  ) {
    headerOnScroll.classList.remove("display_none");
  } else {
    headerOnScroll.classList.add("display_none");
  }
});
