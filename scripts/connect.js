const connect = () => {
  return `
  <h1 class="main__title">Let's connect!</h1>
  <div class="contact-container">
    <div class="contact-card">
      <form class="contact-form" id="contact-form">
        <fieldset class="email">
          <div class="user-input">
            <label for="name">Name* </label>
            <input
              type="text"
              name="from_name"
              id="name"
              placeholder="Enter your name"
              class="email-info"
              required
            />
          </div>
          <div class="user-input">
            <label for="email">Email* </label>
            <input
              type="email"
              name="from_email"
              id="email"
              placeholder="Enter your email"
              class="email-info"
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
          <p class="email-message fade" id="email-message"></p>
        </fieldset>
      </form>
    </div>
    <div class="socials">
    <div class="contact-card">
      <div class="social-btn">
        <a
          href="https://www.linkedin.com/in/claudia-pereira-carion/"
          target="_blank"
          class="socials-link"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
        </div>
        <p class="socials-label">Connect on LinkedIn</p>
      </div>
      <div class="contact-card">
          <div class="social-btn">

        <a
          href="https://github.com/claudiacarion"
          target="_blank"
          class="socials-link"
        >
          <i class="fa-brands fa-square-github"></i
        ></a>
        </div>
        <p class="socials-label">Check out my Github</p>
      </div>
    </div>
  </div>
`;
};

const initContactForm = () => {
  const form = document.querySelector("#contact-form");
  const emailMessage = document.querySelector("#email-message");

  if (!form || !emailMessage) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_yrlzcql", "template_wma1if9", "#contact-form").then(
      () => {
        emailMessage.textContent = "Message sent!";
        emailMessage.style.color = "var(--success)";
        emailMessage.classList.remove("fade");
        form.reset();

        setTimeout(() => {
          emailMessage.classList.add("fade");
        }, 2000);
      },
      error => {
        emailMessage.textContent = "Something went wrong. Please try again.";
        emailMessage.style.color = "var(--fail)";
        emailMessage.classList.remove("fade");
        console.error("EmailJS error: ", error);

        setTimeout(() => {
          emailMessage.classList.add("fade");
        }, 4000);
      }
    );
  });
};
