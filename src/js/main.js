var color = document.querySelector(".button");

function ColorChange() {
  color.classList.toggle("clicked");
}

color.addEventListener("click", ColorChange);
