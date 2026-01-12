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
    const name = document.createElement("p");
    name.innerHTML = `
    <a href=${project.html_url}>${project.name.charAt(0).toUpperCase() + project.name.slice(1).replace("-", " ")}</a>`;
    document.querySelector(".list").appendChild(name);
  });
};

const playground = () => {
  main.innerHTML = `
  <h1 class="main__title">My Projects</h1>
    <div class="gallery">
      <div class="project">
        <a href="https://dashing-taffy-506794.netlify.app/" target="_blank">
          <img
            src="./assets/images/popin.png"
            alt="popin"
            height="auto"
            width="300px"
            class="project-img"
        /></a>
        <h4 class="project-name">Pop In</h4>
        <p class="description">
          Final group project at School of Applied Technology, fullstack
          attendance marking app created with Nextjs, Nextauth and MongoDB,
          styled with CSS
        </p>
      </div>
      <div class="project">
        <a href="https://the-friendly-lexicon.netlify.app/" target="_blank"
          ><img
            src="./assets/images/lexicon.png"
            alt="the friendly lexicon"
            height="auto"
            width="300px"
            class="project-img"
        /></a>
        <h4 class="project-name">The Friendly Lexicon</h4>
        <p class="description">
          Frontend dictionary project created with React and Typescript, styled with
          Tailwind
        </p>
      </div>
      <div class="project">
        <a
          href="https://github.com/claudiacarion/goldenmemeretriever"
          target="_blank"
        >
          <img
            src="./assets/images/meme.png"
            alt="meme"
            height="auto"
            width="300px"
            class="project-img"
        /></a>
        <h4 class="project-name">Golden (Meme) Retriever</h4>
        <p class="description">
          My first fullstack project, a random meme generator, created with React and Express, styled
          with CSS
        </p>
      </div>
      <div class="project">
        <a href="https://sequence-memory-challenge.vercel.app/" target="_blank">
          <img
            src="./assets/images/memory.png"
            alt="sequence memory game"
            height="auto"
            width="300px"
            class="project-img"
        /></a>
        <h4 class="project-name">Sequence Memory Game</h4>
        <p class="description">
          Frontend game project created with HTML and Javascript, styled with CSS
        </p>
      </div>
    </div>
  <h3 class="project__subtitle" id="other-projects">Other Projects:</h3>
  <ul class="list hide"></ul>
  `;

  projects()
    .then(data => {
      github(data);
    })
    .catch(error => {
      console.error("Error: ", error);
    });

  const others = document.querySelector("#other-projects");
  const list = document.querySelector(".list");

  others.onclick = () => list.classList.toggle("hide");
};

const playgroundBtn = document.querySelector("#playground-btn");
playgroundBtn.onclick = () => playground();
