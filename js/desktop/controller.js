import {
  calculateFooterHeight,
  detectTriangleSelected,
  recalculateTriangles,
  triangles,
} from "./model.js";
import {
  containerMadrid,
  containerAndorra,
  containerSeparatorHover,
  containerSeparator, showOptions
} from "./view.js";
import {
  globe,
  languagesOptions,
  onClickLanguagesOptions,
  onClickGlobe
} from "../language.js";

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

  // canvi d'idioma
  languagesOptions.on("click", onClickLanguagesOptions);
  // per mostrar les opcions d'idiomes
  globe.on("click", onClickGlobe);

  // Saber si estem a la página inicial
  let landingInitial = true;

  // Per saber sonbre quina opció estem
  let triangleHover;
  let optionHover = null;

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
        containerMadrid.trigger("mouseenter");
        optionHover = 'madrid';
      }
      else if ( triangleHover === 2 ||
        boxImageAndorra.is(":hover") ||
        boxTextAndorra.is(":hover")
      ) {
        containerAndorra.trigger("mouseenter");
        optionHover = 'andorra';

      }
      else{
        containerSeparator.trigger("mouseenter");
        optionHover = null;
      }
    }
  });

  // opció seleccionada a mostrar (madrid o andorra)
  let chosenOption;

  container.on("click", (e) => {
    e.stopPropagation();
    if (landingInitial) {
      // amb el valor de l'optionHover, cridem la funció per mostrar les options
      landingInitial = false;
      chosenOption = optionHover;
      showOptions[optionHover][0]();

      setTimeout(containerSeparatorHover, 1000);
    }
  });

  // per gestionar el retorn tant del "return" com del logo
  [returnButton, logoAndorraVertical, logoMadridVertical].forEach((element) => {
    element.on("click", (e) => {
      e.stopPropagation();
      if (!landingInitial) {
        showOptions[chosenOption][0](); // funció show
        showOptions[chosenOption][1](); // funció returnShow
        setTimeout(showOptions[chosenOption][1], 1000);

        chosenOption = undefined;
        containerSeparatorHover();
        landingInitial = true;
      }
    });
  })



// });
