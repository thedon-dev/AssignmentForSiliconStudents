var navBar = document.getElementById("navLinks");

// function openNav() {
//   if (navBar.style.display === "block") {
//     navBar.style.display = "none";
//   } else {
//     navBar.style.display = "block";
//   }
// }

document.addEventListener("DOMContentLoaded", function () {
  const navBtn = document.querySelector(".navBtn");
  const navLinks = document.getElementById("navLinks");

  navBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
