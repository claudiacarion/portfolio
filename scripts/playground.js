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

const playground = projects => {
  main.innerHTML = `
  <h1 class="main__title">My Projects</h1>
  <ul class="list" id="projects"></ul>
  `;

  projects.forEach(project => {
    const li = document.createElement("li");
    li.textContent = project.name;
    document.querySelector("#projects").appendChild(li);
  });
};

let playgroundBtn = document.querySelector("#playground-btn");
playgroundBtn.onclick = () => {
  projects()
    .then(data => {
      playground(data);
    })
    .catch(error => {
      console.error("Error: ", error);
    });
};
