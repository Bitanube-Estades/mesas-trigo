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
  const boxImageMadrid = document.querySelector(".element--madrid .box img");
  const boxTextMadrid = document.querySelector(".element--madrid .box .box--text");
  const boxImageAndorra = document.querySelector(".element--andorra .box img");
  const boxTextAndorra = document.querySelector(".element--andorra .box .box--text");
  const returnButton = document.querySelector("#return");

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
      if (triangleHover === 1 || boxImageMadrid.matches(':hover') || boxTextMadrid.matches(':hover')) containerMadridHover();
      else if (triangleHover === 2 || boxImageAndorra.matches(':hover') || boxTextAndorra.matches(':hover')) containerAndorraHover();
      else containerSeparatorHover();
    }
  });

  container.addEventListener("click", (e) => {
    e.stopPropagation();
    if (landingInitial) {
      if (triangleHover === 1 || boxImageMadrid.matches(':hover') || boxTextMadrid.matches(':hover')) {
        landingInitial = false;
        showMadrid();
        chosenOption = "madrid";
      }
      if (triangleHover === 2 || boxImageAndorra.matches(':hover') || boxTextAndorra.matches(':hover')) {
        console.log("andorra");
      }
    }
  })

  // opció seleccionada a mostrar (madrid o andorra)
  let chosenOption;

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
