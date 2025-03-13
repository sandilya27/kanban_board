const addTaskBtn = document.getElementById("add-task-btn");
const todoBoard = document.getElementById("todo-board");

const todos = [];
const progress = [];
const completed = [];

let id = 3;

let originalElement;
let cardDrageed;

function attachDragEvent(target) {
  target.addEventListener("dragstart", (event) => {
    originalElement = undefined;
    cardDrageed = undefined;
    target.classList.add("drageed");
    // console.log("id", event.target.dataset.cardId);
    originalElement = event.target.closest(".board").dataset.boardId;
    cardDrageed = +event.target.dataset.cardId;
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
  card.setAttribute("data-card-id", id);

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

  todos.push({
    id: id++,
    title: cardTitleInput,
    subtitle: cardSubtitleInput ? cardSubtitleInput : null,
  });

  todoBoard.appendChild(card);
});

const allBoards = document.querySelectorAll(".board");
const allCards = document.querySelectorAll(".card");

allCards.forEach((card) => attachDragEvent(card));

allBoards.forEach((board) => {
  board.addEventListener("dragover", (event) => {
    event.preventDefault();
    // console.log("at starting");
    // console.log(todos);
    // console.log(progress);
    // console.log(completed);
    const draggedElement = document.querySelector(".drageed");
    // console.log("orignalElement", originalElement);
    // console.log("cardDrageed", cardDrageed);
    // console.log(board.id);

    board.appendChild(draggedElement);
  });
});

allBoards.forEach((board) => {
  board.addEventListener("drop", (e) => {
    // console.log("got a drop", board.id);
    console.log("at starting");
    console.log(todos);
    console.log(progress);
    console.log(completed);
    if (board.id === "todo-board") {
        console.log(board.id, originalElement);
        console.log("orignalElement", originalElement);
        console.log("cardDrageed", cardDrageed);
      if (originalElement === "2") {
        console.log("entered");
        const index = progress.findIndex((ele) => ele.id === cardDrageed);
        if (index === -1) console.log("cardDrageed not found in array");
        const temp = progress.splice(index, 1);
        console.log("aaya kuch", index, temp);
        todos.push(temp[0]);
      } else if (originalElement === "3") {
        console.log("entered");
        const index = completed.findIndex((ele) => ele.id === cardDrageed);
        if (index === -1) console.log("cardDrageed not found in array");
        const temp = completed.splice(index, 1);
        console.log("aaya kuch", index, temp);
        todos.push(temp[0]);
      }
    } else if (board.id === "progress-board") {
      //   console.log("orignalElement", originalElement);
      //   console.log("cardDrageed", cardDrageed);
      if (originalElement === "1") {
        console.log("entered");
        const index = todos.findIndex((ele) => ele.id === cardDrageed);
        if (index === -1) console.log("cardDrageed not found in array");
        const temp = todos.splice(index, 1);
        console.log("aaya kuch", index, temp);
        progress.push(temp[0]);
      } else if (originalElement === "3") {
        console.log("entered");
        const index = completed.findIndex((ele) => ele.id === cardDrageed);
        if (index === -1) console.log("cardDrageed not found in array");
        const temp = completed.splice(index, 1);
        console.log("aaya kuch", index, temp);
        progress.push(temp[0]);
      }
    } else {
      //   console.log("orignalElement", originalElement);
      //   console.log("cardDrageed", cardDrageed);
      if (originalElement === "1") {
        console.log("entered");
        const index = todos.findIndex((ele) => ele.id === cardDrageed);
        if (index === -1) console.log("cardDrageed not found in array");
        const temp = todos.splice(index, "1");
        console.log("aaya kuch", index, temp);
        completed.push(temp[0]);
      } else if (originalElement === "2") {
        console.log("entered");
        const index = progress.findIndex((ele) => ele.id === cardDrageed);
        if (index === -1) console.log("cardDrageed not found in array");
        const temp = progress.splice(index, 1);
        console.log("aaya kuch", index, temp);
        completed.push(temp[0]);
      }
    }
    console.log("at ending");
    console.log(todos);
    console.log(progress);
    console.log(completed);
  });
});