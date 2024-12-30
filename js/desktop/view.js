const mainContainer = $(".main__container");
export const containerMadrid = $(".container__madrid");
export const containerAndorra = $(".container__andorra");
const containerSeparator = $(".container__separator");
const optionBoxMadrid = $(
  "#option__container--madrid .option__box"
);
const optionBoxAndorra = $(
    "#option__container--andorra .option__box"
);

containerMadrid.on( "mouseenter", containerMadridHover ).on( "mouseleave", containerSeparatorHover )
containerAndorra.on( "mouseenter", containerAndorraHover ).on( "mouseleave", containerSeparatorHover )

function containerMadridHover() {
  containerSeparator.removeClass("hover-andorra");
  containerAndorra.removeClass("hover");
  containerMadrid.addClass("hover");
  containerSeparator.addClass("hover-madrid");
}

function containerAndorraHover() {
  containerSeparator.removeClass("hover-madrid");
  containerMadrid.removeClass("hover");
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
