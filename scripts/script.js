const main = document.querySelector(".main-container");

const home = () => {
  main.innerHTML = `
  <h1 class="main__title">Hi! I'm Claudia</h1>
  `;
};

let homeBtn = document.querySelector("#home-btn");
homeBtn.onclick = () => home();

const story = () => {
  main.innerHTML = `
  <h1 class="main__title">My Story</h1>
  <p>
    For as long as I can remember, I’ve been a creator and a tinkerer. Growing up during Y2K, I got hooked on coding
    through blogs, where I could tweak HTML or CSS and make my space truly my own. Life took me through a few
    different careers along the way, giving me plenty of experiences and skills, but my curiosity for tech never
    really went away.
  </p>
  <p>
    Eventually, my time as a technology teacher reminded me how much I loved programming. In 2022, I completed the
    School of Applied Technology’s (SALT) Fullstack JavaScript Developer Bootcamp, where I built fullstack
    applications and got hands-on with modern web technologies.
  </p>
  <p>
    After the bootcamp, I took some time to figure out my next steps and focus on personal growth. I studied Swedish,
    going from SVA Grund up to SVA2, which was a fun challenge and kept me disciplined. Even though I wasn’t doing
    much coding during this period, my interest never went away, and it gave me the chance to reset, reflect, and get
    ready to dive back into software development with fresh energy.
  </p>
  <p>
    Currently, I’m studying in the Frontend Developer program at Futuregames Stockholm, sharpening my skills and
    learning the latest tools and best practices for modern web development.
  </p>
  <p>
    I’m excited to bring both my technical skills and creative problem-solving mindset to new projects, building
    engaging and interactive web experiences.
  </p>  `;
};

let storyBtn = document.querySelector("#story-btn");
storyBtn.onclick = () => story();

const playground = () => {
  main.innerHTML = `
  `;
};
