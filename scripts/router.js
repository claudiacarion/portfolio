const main = document.querySelector(".main-container");

const routes = {
  home: {
    render: home,
  },
  story: {
    render: story,
  },
  craft: {
    render: craft,
  },
  playground: {
    render: playground,
    init: initialize,
  },
  connect: {
    render: connect,
  },
};

const navigate = page => {
  const route = routes[page];
  if (!route) return;

  $(".main-container").fadeOut(400, () => {
    main.innerHTML = route.render();

    if (route.init) {
      route.init();
    }

    $(".main-container").fadeIn(400);
  });
};

const closeNavbar = () => {
  if (window.innerWidth < 768) {
    navbar.classList.remove("active");
  }
};

document.querySelector("#home-btn").onclick = () => {
  navigate("home");
  closeNavbar();
};

document.querySelector("#story-btn").onclick = () => {
  navigate("story");
  closeNavbar();
};

document.querySelector("#craft-btn").onclick = () => {
  navigate("craft");
  closeNavbar();
};

document.querySelector("#playground-btn").onclick = () => {
  navigate("playground");
  closeNavbar();
};

document.querySelector("#connect-btn").onclick = () => {
  navigate("connect");
  closeNavbar();
};

navigate("home");
