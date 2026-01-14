const hamburger = document.querySelector(".logo-img");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelectorAll(".menu-btn");

hamburger.onclick = () => {
  navbar.classList.toggle("hide")
}

menuBtn.forEach(item => {
  item.onclick = () => {
    if (!navbar.classList.contains("hide")) {
      navbar.classList.add("hide");
    }
  }
})