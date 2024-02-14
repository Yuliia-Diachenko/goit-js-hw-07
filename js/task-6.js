function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textInput = document.querySelector("input");
textInput.addEventListener("input", (event) => {
  const numberInput = event.currentTarget.value;
    if (numberInput <= 100 || numberInput > 1) {
  boxes.innerHTML = "";
    let boxsize = 30;
  for (let i = 0; i < numberInput; i++) { 
    let newDiv = `<div style="width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
    boxes.insertAdjacentHTML("beforeend", newDiv);
    boxsize += 10;
  }
}
});

