const mainContainer = document.querySelector(".main__container");
const containerMadrid = document.querySelector(".container__madrid");
const containerAndorra = document.querySelector(".container__andorra");
const containerSeparator = document.querySelector(".container__separator");

export function containerMadridHover() {
  containerSeparator.classList.remove("hover-andorra");
  containerAndorra.classList.remove("hover");
  containerMadrid.classList.add("hover");
  containerSeparator.classList.add("hover-madrid");
}

export function containerAndorraHover() {
  containerSeparator.classList.remove("hover-madrid");
  containerMadrid.classList.remove("hover");
  containerAndorra.classList.add("hover");
  containerSeparator.classList.add("hover-andorra");
}

export function containerSeparatorHover() {
  containerAndorra.classList.remove("hover");
  containerMadrid.classList.remove("hover");
  containerSeparator.classList.remove("hover-andorra");
  containerSeparator.classList.remove("hover-madrid");
}

export function minimizeTriangles() {
  containerMadrid.classList.add("container__madrid--min");
  containerAndorra.classList.add("container__andorra--min");
}

export function maximizeTriangles() {
  containerMadrid.classList.remove("container__madrid--min");
  containerAndorra.classList.remove("container__andorra--min");
}

export function showMadrid() {
  mainContainer.classList.toggle("show__madrid");
}

export function returnShow() {
  mainContainer.classList.toggle("return-show");
}