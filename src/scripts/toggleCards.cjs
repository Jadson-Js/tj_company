let currentPage = 0;

const nextCardsBtn = document.getElementById("nextCards");
const previousCardsBtn = document.getElementById("previousCards");
const pageBar = document.getElementById("pageBar");

const faqCards = document.querySelectorAll(".faq__card");

const MAX_PAGE = 4;
const CARDS_PER_PAGE = 4;

function toggleCards() {
  nextCardsBtn.addEventListener("click", () => handlePageChange(1));
  previousCardsBtn.addEventListener("click", () => handlePageChange(-1));
}

function handlePageChange(delta) {
  const newPage = currentPage + delta;
  if (newPage < 0 || newPage > MAX_PAGE) return;

  currentPage = newPage;
  updateCardImages();
  updatePageBar();
}

function updateCardImages() {
  faqCards.forEach((card, index) => {
    console.log(card);
    const imgNumber = currentPage * CARDS_PER_PAGE + index;
    card.style = `background: url('./photos/photo_${imgNumber}.jpg') #141f24 center / cover no-repeat;`;
  });
}

function updatePageBar() {
  pageBar.style.width = `${(currentPage / MAX_PAGE) * 100}%`;
}

export default toggleCards;
