const main = document.querySelector(".main-container");

const home = () => {
  main.innerHTML = `
  <h1 class="main__title">Hi! I'm Claudia</h1>
  `;
};

let homeBtn = document.querySelector("#home-btn");
homeBtn.onclick = () => home();



