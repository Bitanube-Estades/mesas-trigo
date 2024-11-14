import {isMouseInTriangle} from "./triangle_model.js";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container")

    // Definimos triángulos con sus coordenadas en diferentes posiciones de la pantalla
    const triangles = [
        /* TOP */    [{ x: 0, y: 0 }, { x: window.innerWidth, y: 0 }, { x: window.innerWidth / 2, y: window.innerHeight/2 }],
        /* RIGHT */    [{ x: window.innerWidth, y: 0 }, { x: window.innerWidth /2, y: window.innerHeight /2 }, { x: window.innerWidth, y: window.innerHeight }],
        /* BOTTOM */    [{ x: 0, y: window.innerHeight }, { x: window.innerWidth /2 , y: window.innerHeight /2 }, { x: window.innerWidth, y: window.innerHeight }],
        /* LEFT */    [{ x: 0, y: 0 }, { x: window.innerWidth /2 , y: window.innerHeight /2 }, { x: 0, y: window.innerHeight }]
    ];

    container.addEventListener("mousemove", (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // Variable para almacenar el índice del triángulo sobre el que está el mouse
        let hoveredTriangleIndex = null;

        // Recorre todos los triángulos y verifica si el mouse está sobre alguno de ellos
        triangles.forEach((triangle, index) => {
            if (isMouseInTriangle(mouseX, mouseY, triangle)) {
                hoveredTriangleIndex = index + 1;
            }
        });

        // Mostrar en la consola el triángulo detectado, si está sobre alguno
        if (hoveredTriangleIndex !== null) {
            console.log(`El mouse está sobre el triángulo ${hoveredTriangleIndex}`);
        }
    })


})