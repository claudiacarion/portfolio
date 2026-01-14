const projects = () => {
  return fetch("https://api.github.com/users/claudiacarion/repos")
    .then(response => {
      if (!response.ok) {
        throw new Error("Error!");
      }
      return response.json();
    })
    .catch(error => {
      console.error("Error: ", error);
    });
};

const github = projects => {
  projects.forEach(project => {
    const name = document.createElement("li");
    name.classList.add("project-li");
    name.innerHTML = `
    <a href="${project.html_url}" target="_blank">${
      project.name.charAt(0).toUpperCase() + project.name.slice(1).replace("-", " ")
    }</a>`;
    document.querySelector(".project-ul").appendChild(name);
  });
};

const playground = () => {
  return `
  <h1 class="main__title">My Playground</h1>
  <div class="gallery">
  <a
    href="https://github.com/claudiacarion/goldenmemeretriever"
    target="_blank"
  >
    <div class="project-card">
      <h3 class="project-name">Golden (Meme) Retriever</h3>
        <img
          src="./assets/images/meme.png"
          alt="golden meme retriever"
          height="auto"
          width="300px"
          class="project-img"
      />
      <p class="description">
        My first ever fullstack project, a random meme generator, created with React and Express, styled
        with CSS
      </p>
    </div>
    </a>
    <a href="https://dashing-taffy-506794.netlify.app/" target="_blank">
    <div class="project-card">
      <h3 class="project-name">Pop In</h3>
          <img
            src="./assets/images/popin.png"
            alt="popin attendance app"
            height="auto"
            width="300px"
            class="project-img"
        />
        <p class="description">
          Final group project at School of Applied Technology, fullstack
          attendance marking app created with Nextjs, Nextauth and MongoDB,
          styled with CSS
        </p>
      </div>
      </a>
      <a href="https://the-friendly-lexicon.netlify.app/" target="_blank"
        >
      <div class="project-card">
        <h3 class="project-name">The Friendly Lexicon</h3>
          <img
            src="./assets/images/lexicon.png"
            alt="the friendly lexicon"
            height="auto"
            width="300px"
            class="project-img"
        />
        <p class="description">
          Frontend dictionary project created with React and Typescript, styled with
          Tailwind
        </p>
      </div>
      </a>
      <a href="https://sequence-memory-challenge.vercel.app/" target="_blank">
      <div class="project-card">
        <h3 class="project-name">Sequence Memory Game</h3>
          <img
            src="./assets/images/memory.png"
            alt="sequence memory game"
            height="auto"
            width="300px"
            class="project-img"
        />
        <p class="description">
          Frontend game created with HTML and Javascript, styled with CSS
        </p>
      </div>
      </a>
      <a href="https://australia-zoo-pi.vercel.app/" target="_blank">
      <div class="project-card">
        <h3 class="project-name">Aussie Zoo</h3>
          <img
            src="./assets/images/australiazoo.png"
            alt="aussie zoo website"
            height="auto"
            width="300px"
            class="project-img"
        />
        <p class="description">
          Frontend group project built HTML and Javascript, styled with CSS, focusing on JS objects and Agile methodology
        </p>
      </div>
      </a>
      <a href="https://api-group-assignment.vercel.app/" target="_blank">
      <div class="project-card">
        <h3 class="project-name">Flick & Feast Roulette</h3>
          <img
            src="./assets/images/movienight.png"
            alt="flick and feast roulette"
            height="auto"
            width="300px"
            class="project-img"
        />
        <p class="description">
          Frontend group project built with HTML and Javascript, styled with CSS, focusing on fetching from external APIs
        </p>
      </div>
      </a>
    </div>
  <h3 class="project__subtitle" id="other-projects">Show all my repos</h3>
  <ul class="project-ul hide"></ul>
  `;
};

const initialize = () => {
  projects()
    .then(data => {
      github(data);
    })
    .catch(error => {
      console.error("Error: ", error);
    });

  const others = document.querySelector("#other-projects");
  const list = document.querySelector(".project-ul");

  others.onclick = () => {
    list.classList.toggle("hide");
    others.textContent = list.classList.contains("hide") ? "Show all my repos" : "Show less";
  };
};
