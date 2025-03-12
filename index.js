const addTaskBtn = document.getElementById("add-task-btn");
const todoBoard = document.getElementById("todo-board");

function attachDragEvent(target){
    target.addEventListener("dragstart", () => {
      target.classList.add("drageed");
    });
    target.addEventListener("dragend", () => {
      target.classList.remove("drageed");
    });
}

addTaskBtn.addEventListener("click", () => {
  const cardTitleInput = prompt("Add Task Title");
  if (!cardTitleInput) return;
  const cardSubtitleInput = prompt("Add Card Subtitle");

  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("draggable", true);

  const cardTitle = document.createElement("p");
  cardTitle.innerText = cardTitleInput;
  cardTitle.classList.add("card-title");
  card.appendChild(cardTitle);

  if (cardSubtitleInput) {
    const cardSubtitle = document.createElement("p");
    cardSubtitle.innerText = cardSubtitleInput;
    cardSubtitle.classList.add("card-subtitle");
    card.appendChild(cardSubtitle);
  }

  attachDragEvent(card);

  todoBoard.appendChild(card);
});

const allBoards = document.querySelectorAll(".board");
const allCards = document.querySelectorAll(".card");

allCards.forEach((card) => attachDragEvent(card));

allBoards.forEach((board) => {
  board.addEventListener("dragover", () => {
    const draggedElement = document.querySelector(".drageed");

    board.appendChild(draggedElement);
  });
});
