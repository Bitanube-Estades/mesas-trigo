import {bgImages} from "./mobView.js";
import {heightMainContainer} from "./mobModel.js";

// actualitzam la alçada al mainContainer descomptan l'alçada del footer
heightMainContainer();
// canviem les imatges dels contenidors per les de la versió mobile
bgImages();