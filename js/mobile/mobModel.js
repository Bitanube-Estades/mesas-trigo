const footer = $(".footer");
const mainContainer = $(".main__container");

let footerHeight = footer.outerHeight();

export function heightMainContainer() {
    mainContainer.height($(window).height() - footerHeight);
}


