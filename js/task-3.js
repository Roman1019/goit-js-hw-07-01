const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  const result = event.target.value.trim();

  spanEl.textContent = result === "" ? "Anonymous" : result;
});
