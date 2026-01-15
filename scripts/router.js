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
    init: initContactForm,
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

const menuBtns = ["home", "story", "craft", "playground", "connect"];

menuBtns.forEach(page => {
  const btn = document.querySelector(`#${page}-btn`);
  if (btn) {
    btn.onclick = () => {
      page === "home" ? (history.pushState("", document.title, window.location.pathname), navigate("home")) : (window.location.hash = page);
      closeNavbar();
    };
  }
});

const loadHash = () => {
  const page = window.location.hash.replace("#", "") || "home";
  navigate(page);
};

window.addEventListener("DOMContentLoaded", loadHash);
window.addEventListener("hashchange", loadHash);
