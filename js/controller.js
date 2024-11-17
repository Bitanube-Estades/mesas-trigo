import { detectTriangleSelected, trianglesMax, trianglesMin } from "./model.js";
import { maximizeTriangles, minimizeTriangles } from "./view.js";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container")

    // Saber si només es veuen els dos triangles grans
    let landingInitial = true;
    
    let triangleHover;

    container.addEventListener("mousemove", (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        let triangles = landingInitial? trianglesMax: trianglesMin;
        
        triangleHover = detectTriangleSelected(mouseX, mouseY, triangles);
    })
    
    container.addEventListener("click", () => {
        if (triangleHover == 1) {
            if (landingInitial){
                window.location.href = "https://www.linkedin.com/company/mesastrigo-morales-arce/?originalSubdomain=es"
            } else {
                maximizeTriangles();
                landingInitial = true;
            }
        }
        if (triangleHover == 2) {
            if (landingInitial) {
                minimizeTriangles();
                landingInitial = false;
            } else {
                maximizeTriangles();
                landingInitial = true;
            }
        }
    })

})