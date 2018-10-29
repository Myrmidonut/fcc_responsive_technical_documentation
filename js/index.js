var burger = document.querySelector(".fas");
var menuPopUp = document.querySelector("#hamburger-container");
var link = document.querySelectorAll(".nav-link-hamburger");

burger.addEventListener("click", function () {
  menuPopUp.classList.toggle("hidden");
});

link.forEach(function (e) {
  e.addEventListener("click", function () {
    menuPopUp.classList.toggle("hidden");
  });
});