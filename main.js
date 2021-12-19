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

function SmoothVerticalScrolling(e, time, where) {
  var eTop = e.getBoundingClientRect().top;
  var eAmt = eTop / 100;
  var curTime = 0;
  while (curTime <= time) {
    window.setTimeout(SVS_B, curTime, eAmt, where);
    curTime += time / 100;
  }
}

function SVS_B(eAmt, where) {
  if (where == "center" || where == "") window.scrollBy(0, eAmt / 2);
  if (where == "top") window.scrollBy(0, eAmt);
}
