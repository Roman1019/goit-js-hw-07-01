function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input[type='number']");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const divEl = document.querySelector("#boxes");

buttonCreate.addEventListener("click", () => {
  if (inputEl.value >= 1 && inputEl.value <= 100) {
    createBoxes(inputEl.value);
  }
});
buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let size = 30;
  let markup = "";
  destroyBoxes();
  for (let i = 1; i <= amount; i++) {
    markup += `<div style="width:${size}px; height:${size}px; background:${getRandomHexColor()}"></div>`;
    size += 10;
  }
  divEl.insertAdjacentHTML("afterbegin", markup);
  inputEl.value = "";
}

function destroyBoxes() {
  divEl.innerHTML = "";
}
