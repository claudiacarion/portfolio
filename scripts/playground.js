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
      return [];
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
          src="./assets/images/meme.webp"
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
            src="./assets/images/popin.webp"
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
            src="./assets/images/lexicon.webp"
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
            src="./assets/images/memory.webp"
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
            src="./assets/images/australiazoo.webp"
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
            src="./assets/images/movienight.webp"
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
  <h3 class="project__subtitle" id="other-projects">See all my repos <i class="fa-solid fa-caret-down"></i></h3>
  <ul class="project-ul hide"></ul>
  `;
};

const initialize = () => {
  projects()
    .then(data => {
      if (data.length === 0) {
        document.querySelector(".project-ul").innerHTML = `
        <li class="fetch-error">Unable to load projects at the moment. Try again later.</li>`
        return
      }
      github(data);
    })
    .catch(error => {
      console.error("Error: ", error);
    });

  const others = document.querySelector("#other-projects");
  const list = document.querySelector(".project-ul");

  others.onclick = () => {
    const isHidden = list.classList.toggle("hide");
    others.innerHTML = isHidden
      ? `See all my repos <i class="fa-solid fa-caret-down"></i>`
      : `Show less <i class="fa-solid fa-caret-up"></i>`;

    if (!isHidden) {
      others.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
};
