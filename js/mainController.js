// import {isMobile} from "./detectMobile.js";

document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth < 1024) {
        import('./mobile/mobController.js');
    } else {
        import('./desktop/controller.js');
    }
})


// NECESARI?????
// window.addEventListener("resize",() => {
//
//     if (window.innerWidth <= 768) {
//         import('./mobile/mobController.js');
//     } else {
//         import('./desktop/controller.js');
//     }
// })


