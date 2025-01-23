import {heightMainContainer} from "./mobModel.js";
import {languagesOptions, globe, onClickLanguagesOptions, onClickGlobe} from "../language.js";
import {sloganIteration} from "./mobView.js";

// actualitzem la alçada al mainContainer descomptan l'alçada del footer
heightMainContainer();


// canvi d'idioma
languagesOptions.on("click", onClickLanguagesOptions);

// per mostrar les opcions d'idiomes
globe.on("click", onClickGlobe);


//             ------------ Prova faceIn Slogan ---------------------------
// inicialitzem el faceIn del slogan
//sloganIteration();