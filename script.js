let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".restart");
let msg = document.getElementById("msg");

let turnO = true; // true for O, false for X
let count = 0;

const winningConditions = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      msg.innerText = "It's a draw!";
    }
  });
});

const disableBtns = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (Winner) => {
  msg.innerText = `Congratulations,Winner is ${Winner}`;
  disableBtns();
};

const checkWinner = () => {
  for (let pattern of winningConditions) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return;
      }
    }
  }
};

//*reset the game
resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  count = 0;
  msg.innerText = "";
});
