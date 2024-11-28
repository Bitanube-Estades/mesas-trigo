import {
  calculateFooterHeight,
  detectTriangleSelected, recalculateTriangles,
  trianglesMax,
  // trianglesMin,
} from "./model.js";
import {
  returnNotHover,
  triangleAndorraHover,
  triangleMadridHover,
} from "./view.js";

document.addEventListener("DOMContentLoaded", () => {
      const container = document.querySelector(".main__container");
      const cardAndorra = document.querySelector("#item__andorra");
      const triangleAndorra = document.querySelector(".triangle__andorra");


  // Saber si estem a la página inicial
  let landingInitial = true;

  let triangleHover;
  let optionHover;

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

    // if (landingInitial) {
    //   if (triangleHover === 1) triangleMadridHover();
    //   if (triangleHover === 2) triangleAndorraHover();
    // }

    // que el l'imatge del return torni al seu tamany normal quan no està hover
    // returnNotHover();
  });

  // tornar a la página d'inici al clickar al icono return
  // triangleMadridReturn.addEventListener("click", (e) => {
  //   e.stopPropagation();
  //   if (!landingInitial && triangleHover === 1) {
  //     maximizeTriangles();
  //     landingInitial = true;
  //   }
  // });

  // tornar a la página d'inici al clickar l'element vertical de mesas trigo
  // triangleAndorra.addEventListener("click", (e) => {
  //   e.stopPropagation();
  //   if (!landingInitial && triangleHover === 2) {
  //     maximizeTriangles();
  //     landingInitial = true;
  //   }
  // });

});
