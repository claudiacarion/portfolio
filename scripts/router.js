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

document.querySelector("#home-btn").onclick = () => navigate("home");
document.querySelector("#story-btn").onclick = () => navigate("story");
document.querySelector("#craft-btn").onclick = () => navigate("craft");
document.querySelector("#playground-btn").onclick = () => navigate("playground");
document.querySelector("#connect-btn").onclick = () => navigate("connect");

navigate("home");
