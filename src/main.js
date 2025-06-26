import "./input.css";

import animate from "./scripts/animate.cjs";
import form from "./scripts/form.cjs";
import scroll from "./scripts/scroll.cjs";
import toggleCards from "./scripts/toggleCards.cjs";
import toggleFaq from "./scripts/toggleFaq.cjs";

toggleCards();
animate();
form();
scroll();
toggleFaq();

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const bg = el.getAttribute("data-bg");

        if (bg) {
          el.style.backgroundImage = `url(${bg})`;
          el.classList.remove("bg-gray-600"); // remove placeholder se quiser
          obs.unobserve(el);
        }
      }
    });
  });

  document.querySelectorAll(".lazy-bg").forEach((el) => observer.observe(el));
});
