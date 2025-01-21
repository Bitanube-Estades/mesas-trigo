// import {isMobile} from "./detectMobile.js";
$(function() {
    if (window.innerWidth <= 1024 /*&& isMobile.any()*/ ) {
        import('./mobile/mobController.js');
    } else {
        import('./desktop/controller.js');
    }
});


// NECESARI?????
// window.addEventListener("resize",() => {
//
//     if (window.innerWidth <= 768) {
//         import('./mobile/mobController.js');
//     } else {
//         import('./desktop/controller.js');
//     }
// })


