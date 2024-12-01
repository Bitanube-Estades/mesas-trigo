import {
  calculateFooterHeight,
  detectTriangleSelected,
  recalculateTriangles,
  trianglesMax,
  // trianglesMin,
} from "./model.js";
import {
  containerAndorraHover,
  containerMadridHover,
  containerSeparatorHover,
  returnShow,
  showMadrid,
} from "./view.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".main__container");
  const madridSaberButton = document.querySelector("#saber-mas--madrid");
  const returnButton = document.querySelector(".arrow");

  // Saber si estem a la página inicial
  let landingInitial = true;

  let triangleHover;

  // actualitzem l'alçada del footer pels càlculs dels triangles
  window.addEventListener("resize", () => {
    calculateFooterHeight();
    recalculateTriangles();
  });

  container.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Donem les mesures dels triangles grans o petits depenent en quin estat es troba la landing
    let triangles = trianglesMax;
    // let triangles = landingInitial ? trianglesMax : trianglesMin;

    triangleHover = detectTriangleSelected(
      mouseX,
      mouseY,
      triangles,
      landingInitial
    );

    if (landingInitial) {
      if (triangleHover === 1) containerMadridHover();
      else if (triangleHover === 2) containerAndorraHover();
      else containerSeparatorHover();
    }
  });

  // escollir opció
  let chosenOption;

  madridSaberButton.addEventListener("click", (e) => {
    e.stopPropagation();
    if (landingInitial) {
      landingInitial = false;
      showMadrid();
      chosenOption = "madrid";
    }
  });

  returnButton.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!landingInitial) {
      if (chosenOption === "madrid") {
        showMadrid();
      }
      chosenOption = undefined;
      containerSeparatorHover();
      returnShow();
      setTimeout(returnShow, 1000);
      landingInitial = true;
    }
  });
});
