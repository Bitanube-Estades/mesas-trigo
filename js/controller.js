import { detectTriangleSelected, trianglesMax, trianglesMin } from "./model.js";
import { abogadosHover, economistasHover, maximizeTriangles, minimizeTriangles } from "./view.js";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container")

    // Saber si només es veuen els dos triangles grans
    let landingInitial = true;
    
    let triangleHover;

    container.addEventListener("mousemove", (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const halfVH = window.innerHeight / 2;
        
        // Donem les mesures dels triangles grans o petits depenent en quin estat es troba la landing
        let triangles = landingInitial? trianglesMax: trianglesMin;
        
        triangleHover = detectTriangleSelected(mouseX, mouseY, triangles);

        if (!landingInitial && !triangleHover) {
            if (mouseY < halfVH) {
                abogadosHover();
            } else {
                economistasHover();
            }
        }

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