function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColor = document.querySelector(".color");
const buttonChangeColor = document.querySelector(".change-color");
const bodyEl = document.body;

buttonChangeColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  bodyEl.style.background = color;
  spanColor.textContent = color;
});
