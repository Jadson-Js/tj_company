function toggleFaq() {
  document.addEventListener("DOMContentLoaded", () => {
    const allDetails = document.querySelectorAll("details");

    allDetails.forEach((details) => {
      const summary = details.querySelector("summary");
      const content = details.querySelector(".faq-content");
      let animation = null;
      let isClosing = false;
      let isExpanding = false;

      summary.addEventListener("click", (event) => {
        event.preventDefault();

        // Ignora o clique se uma animação já estiver em andamento
        if (isClosing || isExpanding) return;

        if (details.open) {
          // Lógica para fechar o item clicado
          isClosing = true;
          const closeAnimation = content.animate(
            [
              { height: `${content.offsetHeight}px`, opacity: 1 },
              { height: "0px", opacity: 0 },
            ],
            {
              duration: 300,
              easing: "ease-in-out",
            },
          );

          closeAnimation.onfinish = () => {
            details.removeAttribute("open");
            isClosing = false;
          };
        } else {
          // Lógica para abrir o item clicado

          // Primeiro, fecha qualquer outro item que esteja aberto
          allDetails.forEach((otherDetails) => {
            if (otherDetails !== details && otherDetails.open) {
              const otherContent = otherDetails.querySelector(".faq-content");
              const closeOtherAnimation = otherContent.animate(
                [
                  { height: `${otherContent.offsetHeight}px`, opacity: 1 },
                  { height: "0px", opacity: 0 },
                ],
                {
                  duration: 300,
                  easing: "ease-in-out",
                },
              );

              closeOtherAnimation.onfinish = () => {
                otherDetails.removeAttribute("open");
              };
            }
          });

          // Agora, abre o item que foi clicado
          isExpanding = true;
          details.setAttribute("open", "");

          const openAnimation = content.animate(
            [
              { height: "0px", opacity: 0 },
              { height: `${content.offsetHeight}px`, opacity: 1 },
            ],
            {
              duration: 300,
              easing: "ease-in-out",
            },
          );

          openAnimation.onfinish = () => {
            isExpanding = false;
          };
        }
      });
    });
  });
}

export default toggleFaq;
