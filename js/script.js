const board = document.querySelector("#board");
const colors = [
  "#B71F1B",
  "#27B755",
  "#446CB7",
  "#16B7B7",
  "#B78D0E",
  "#61B7B4",
  "#40B700",
  "#FFDD00",
  "#FF00AE",
  "#3AE2CE",
];
const SQUARES_NUMBER = 1000;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);

  return colors[index];
}
