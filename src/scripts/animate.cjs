export default function animate() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    },
    {
      threshold: 0.25, // ativa quando 10% do elemento estiver visível
    },
  );

  document.querySelectorAll("[data-fade]").forEach((el) => {
    observer.observe(el);
  });
}
