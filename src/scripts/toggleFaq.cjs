function toggleFaq() {
  let currentFaq = null;
  const faqUl = document.getElementById("faq");

  faqUl.querySelectorAll(".faq__li").forEach((li) => {
    const details = li.querySelector("details");

    details.addEventListener("toggle", () => {
      if (details.open) {
        faqUl.querySelectorAll("details").forEach((other) => {
          if (other !== details) other.open = false;
        });

        currentFaq = details.id;
      }
    });
  });
}

export default toggleFaq;
