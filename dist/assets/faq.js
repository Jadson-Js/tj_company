let currentPage = 0;

const nextCards = document.getElementById("nextCards");
const previousCards = document.getElementById("previousCards");
const pageBar = document.getElementById("pageBar");
const card0 = document.getElementById("card_0");
const card1 = document.getElementById("card_1");
const card2 = document.getElementById("card_2");
const card3 = document.getElementById("card_3");

previousCards.addEventListener("click", () => {
  changePage(-1);

  changeCardsBg();
  changePageBar();
});

nextCards.addEventListener("click", () => {
  changePage(1);

  changeCardsBg();
  changePageBar();
});

function changePage(page) {
  if (currentPage + page < 0 || currentPage + page > 4) return;

  currentPage += page;
}

function changeCardsBg() {
  card0.style.cssText = `
    background: url('./photos/photo_${
      currentPage * 4
    }.jpg') center / cover no-repeat;
  `;

  card1.style.cssText = `
    background: url('./photos/photo_${
      1 + currentPage * 4
    }.jpg') center / cover no-repeat;
  `;

  card2.style.cssText = `
    background: url('./photos/photo_${
      2 + currentPage * 4
    }.jpg') center / cover no-repeat;
  `;

  card3.style.cssText = `
    background: url('./photos/photo_${
      3 + currentPage * 4
    }.jpg') center / cover no-repeat;
  `;
  console.log(3 + currentPage * 4);
}

function changePageBar() {
  pageBar.style.width = `${currentPage * 25}%`;
}
