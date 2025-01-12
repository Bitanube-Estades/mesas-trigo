const imgMadrid = $(".container__madrid .container--bg .image")
const imgAndorra = $(".container__andorra .container--bg .image");

export function bgImages () {
    imgMadrid.attr("src", "./assets/images/mob_madrid.png");
    imgAndorra.attr("src", "./assets/images/mob_andorra.png");
}
