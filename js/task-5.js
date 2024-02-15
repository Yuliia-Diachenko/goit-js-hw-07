function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;  
}
const button = document.querySelector(".change-color");
button.addEventListener("click", () => {
  const body =  document.querySelector("body");
  const colorBody = getRandomHexColor();
  body.style = `background-color: ${colorBody}`;
  const colorSpan = document.querySelector(".color");
  colorSpan.textContent = colorBody;
});
