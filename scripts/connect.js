const connect = () => {
  main.innerHTML = `
        <h1 class="page-title">Let's connect!</h1>
      <section class="contact-container">
        <div class="contact">
          <div class="method">
            <i class="fa-solid fa-envelope"></i>
            <form
              action="mailto: claudia.carion@gmail.com"
              method="POST"
              enctype="text/plain"
              class="user-message"
            >
              <fieldset class="email">
                <legend>Leave me a message</legend>
                <div class="user-input">
                  <label for="name">Name* </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    class="text"
                    required
                  />
                </div>
                <div class="user-input">
                  <label for="email">Email* </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    class="text"
                    required
                  />
                </div>
                <div class="user-input">
                  <label for="message">Message*</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Enter your message"
                    class="message-area"
                    required
                  ></textarea>
                </div>
                <button class="submit">Send</button>
              </fieldset>
            </form>
          </div>
          <div class="method">
            <a
              href="https://www.linkedin.com/in/claudia-pereira-carion/"
              target="_blank"
              class="link"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <p>Connect on LinkedIn</p>
          </div>
                    <div class="method">
            <a
              href="https://github.com/claudiacarion"
              target="_blank"
              class="link"
            >
              <i class="fa-brands fa-square-github"></i
            ></a>
            <p>Check out my Github</p>
          </div>
        </div>

`;
};

let connectBtn = document.querySelector("#connect-btn");
connectBtn.onclick = () => connect();
