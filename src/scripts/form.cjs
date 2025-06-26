function form() {
  document.querySelectorAll(".form").forEach((form) => {
    const input = form.querySelector(".message");

    input.addEventListener("input", () => {
      let val = input.value.replace(/\D/g, "");

      if (val.length > 11) val = val.slice(0, 11); // Corrigido aqui

      const ddd = val.slice(0, 2);
      const prefixo = val.slice(2, 7);
      const sufixo = val.slice(7, 11);

      if (val.length >= 7) {
        input.value = `(${ddd}) ${prefixo}-${sufixo}`;
      } else if (val.length >= 3) {
        input.value = `(${ddd}) ${val.slice(2)}`;
      } else {
        input.value = `(${val}`;
      }
    });

    form.addEventListener("submit", (e) => {
      if (input.length !== 11) {
        e.preventDefault();
        alert("Digite um número de WhatsApp válido com DDD.");
      }
    });
  });
}

export default form;
