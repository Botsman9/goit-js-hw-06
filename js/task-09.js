const bodyColor = document.querySelector("body")

const spanColor = document.querySelector(".color")

const buttonColor = document.querySelector(".change-color")


buttonColor.addEventListener("click", getRandomHexColor);




function getRandomHexColor() {
  bodyColor.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  spanColor.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}




