

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container")
    // Función para calcular el área de un triángulo dado tres puntos
    function calculateArea(p1, p2, p3) {
        return Math.abs(p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) / 2;
    }

// Función que verifica si el mouse está dentro de un triángulo específico
    function isMouseInTriangle(mouseX, mouseY, triangle) {
        const mousePoint = { x: mouseX, y: mouseY };

        const areaOriginal = calculateArea(triangle[0], triangle[1], triangle[2]);
        const area1 = calculateArea(mousePoint, triangle[0], triangle[1]);
        const area2 = calculateArea(mousePoint, triangle[1], triangle[2]);
        const area3 = calculateArea(mousePoint, triangle[2], triangle[0]);

        // Si la suma de las áreas de los sub-triángulos es igual al área original, el mouse está dentro
        return Math.abs(area1 + area2 + area3 - areaOriginal) < 0.01; // Ajuste de precisión
    }
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