const mainContainer = $(".main__container");
export const containerMadrid = $(".container__madrid");
export const containerAndorra = $(".container__andorra");
export const containerSeparator = $(".container__separator");
const optionBoxMadrid = $(
  "#option__container--madrid .option__box"
);
const optionBoxAndorra = $(
    "#option__container--andorra .option__box"
);
// fem servir els noms de les funcions al controller per reutilitzar codi
export const showOptions = {
  madrid: [showMadrid, returnShowMadrid],
  andorra: [showAndorra, returnShowAndorra]
}

export const globe = $(".globe");
export const languagesOptions = $(".languages-options");

containerMadrid.on( "mouseenter", containerMadridHover);
containerAndorra.on( "mouseenter", containerAndorraHover);
containerSeparator.on( "mouseenter", containerSeparatorHover);

function containerMadridHover() {
  containerMadrid.addClass("hover");
  containerSeparator.addClass("hover-madrid");
}

function containerAndorraHover() {
  containerAndorra.addClass("hover");
  containerSeparator.addClass("hover-andorra");
}

export function containerSeparatorHover() {
  containerAndorra.removeClass("hover");
  containerMadrid.removeClass("hover");
  containerSeparator.removeClass("hover-andorra");
  containerSeparator.removeClass("hover-madrid");
}

export function showMadrid() {
  mainContainer.toggleClass("show__madrid");
  setTimeout(() => {
    optionBoxMadrid.width(`calc(100% - ${containerSeparator.outerWidth()}px`);
  }, 1100);
}

export function returnShowMadrid() {
  mainContainer.toggleClass("return-show--madrid");
}

export function showAndorra() {
  mainContainer.toggleClass("show__andorra");
  setTimeout(() => {
    optionBoxAndorra.width(`calc(100% - ${containerSeparator.outerWidth()}px`);
  }, 1100);
}

export function returnShowAndorra() {
  mainContainer.toggleClass("return-show--andorra");
}

export function showLanguagesOptions() {
  languagesOptions.toggleClass("show");
}
