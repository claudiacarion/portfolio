const hamburger = document.querySelector(".logo-img");
const navbar = document.querySelector(".navbar");

hamburger.onclick = () => {
  navbar.classList.toggle("active")
}