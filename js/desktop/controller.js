import {
  calculateFooterHeight,
  detectTriangleSelected,
  recalculateTriangles,
  trianglesMax,
} from "./model.js";
import {
  containerAndorraHover,
  containerMadridHover,
  containerSeparatorHover,
  returnShowAndorra,
  returnShowMadrid,
  showAndorra,
  showMadrid,
} from "./view.js";
import {langChange} from "./language.js";

// document.addEventListener("DOMContentLoaded", () => {
  const container = $(".main__container");
  const boxImageMadrid = $(".element--madrid .box img");
  const boxTextMadrid = $(
    ".element--madrid .box .box--text"
  );
  const boxImageAndorra = $(".element--andorra .box img");
  const boxTextAndorra = $(
    ".element--andorra .box .box--text"
  );
  const returnButton = $("#return");
  const logoMadridVertical = $("#box--madrid")
  const logoAndorraVertical = $("#box--andorra")
  const flags = $(".flag");

  // canvi d'idioma

  $(flags).on("click", async(e) =>{
    e.preventDefault();
    await langChange(e.currentTarget.id)
  })


  // Saber si estem a la página inicial
  let landingInitial = true;

  let triangleHover;

  // actualitzem l'alçada del footer pels càlculs dels triangles
  window.addEventListener("resize", () => {
    calculateFooterHeight();
    recalculateTriangles();
  });

  container.on("mouseleave", () => {
    containerSeparatorHover();
  });

  container.on("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Donem les mesures dels triangles grans o petits depenent en quin estat es troba la landing
    let triangles = trianglesMax;
    // let triangles = landingInitial ? trianglesMax : trianglesMin;

    triangleHover = detectTriangleSelected(
      mouseX,
      mouseY,
      triangles
    );

    if (landingInitial) {

      if ( triangleHover === 1 ||
        boxImageMadrid.is(":hover") ||
        boxTextMadrid.is(":hover")
      ) {
        containerMadridHover();
      }
      else if ( triangleHover === 2 ||
        boxImageAndorra.is(":hover") ||
        boxTextAndorra.is(":hover")
      ) {
        containerAndorraHover();
      }
      else containerSeparatorHover();
    }
  });

  // opció seleccionada a mostrar (madrid o andorra)
  let chosenOption;

  container.on("click", (e) => {
    e.stopPropagation();
    if (landingInitial) {
      if (
        triangleHover === 1 ||
        boxImageMadrid.is(":hover") ||
        boxTextMadrid.is(":hover")
      ) {
        landingInitial = false;
        showMadrid();
        chosenOption = "madrid";
      }
      if (
        triangleHover === 2 ||
        boxImageAndorra.is(":hover") ||
        boxTextAndorra.is(":hover")
      ) {
        landingInitial = false;
        showAndorra();
        chosenOption = "andorra";
      }
      setTimeout(containerSeparatorHover, 1000);
    }
  });

  returnButton.on("click", (e) => {
    e.stopPropagation();
    if (!landingInitial) {
      if (chosenOption === "madrid") {
        showMadrid();
        returnShowMadrid();
        setTimeout(returnShowMadrid, 1000);
      } else {
        showAndorra();
        returnShowAndorra();
        setTimeout(returnShowAndorra, 1000);
      }
      chosenOption = undefined;
      containerSeparatorHover();
      landingInitial = true;
    }
  });

  logoMadridVertical.on("click", (e) => {
    e.stopPropagation();
    if (!landingInitial) {
      if (chosenOption === "madrid") {
        showMadrid();
        returnShowMadrid();
        setTimeout(returnShowMadrid, 1000);
        chosenOption = undefined;
        containerSeparatorHover();
        landingInitial = true;
      }
    }
  });

  logoAndorraVertical.on("click", (e) => {
    e.stopPropagation();
    if (!landingInitial) {
      if (chosenOption === "andorra") {
        showAndorra();
        returnShowAndorra();
        setTimeout(returnShowAndorra, 1000);
        chosenOption = undefined;
        containerSeparatorHover();
        landingInitial = true;
      }
    }
  });

// });
