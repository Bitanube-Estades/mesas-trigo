import {heightMainContainer} from "./mobModel.js";
import {languagesOptions, globe, onClickLanguagesOptions, onClickGlobe} from "../language.js";
//import {sloganIteration} from "./mobView.js";
import {introBoxes,returnArrow, showMobOptions} from "./mobView.js";



// actualitzem la alçada al mainContainer descomptan l'alçada del footer
heightMainContainer();


// canvi d'idioma
languagesOptions.on("click", onClickLanguagesOptions);

// per mostrar les opcions d'idiomes
globe.on("click", onClickGlobe);

// al clickar els logos inicials
introBoxes.each(function(){
    $(this).on("click", function(e){
        e.stopPropagation();
        const dataCity = $(this).data("city");
        showMobOptions(`show-mob-${dataCity}`);
    });
})

// acció botó fletxa return
returnArrow.each(function(){
    $(this).on("click", function(e){
        e.stopPropagation();
        const cityElement = $(this).closest('.mob__option');
        const dataCity = cityElement.data("city");
        showMobOptions(`show-mob-${dataCity}`);
    })
})

//             ------------ Prova faceIn Slogan ---------------------------
// inicialitzem el faceIn del slogan
//sloganIteration();