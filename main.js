// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

function chooseColor(event) {
  const currentColor = document.querySelector("#current-color");
  currentColor.style.backgroundColor = event.target.style.backgroundColor;
}

const colors = document.querySelectorAll(".color");

for (let color of colors) {
  color.addEventListener("click", chooseColor);
}

function changeColor(event) {
  const currentColor = document.querySelector("#current-color");
  event.target.style.backgroundColor = currentColor.style.backgroundColor;
}

const cells = document.querySelectorAll(".cell");

for (let cell of cells) {
  cell.addEventListener("click", changeColor);
}
