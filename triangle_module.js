// Función para calcular el área de un triángulo dado tres puntos
export function calculateArea(p1, p2, p3) {
    return Math.abs(p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) / 2;
}

// Función que verifica si el mouse está dentro de un triángulo específico
export function isMouseInTriangle(mouseX, mouseY, triangle) {
    const mousePoint = { x: mouseX, y: mouseY };

    const areaOriginal = calculateArea(triangle[0], triangle[1], triangle[2]);
    const area1 = calculateArea(mousePoint, triangle[0], triangle[1]);
    const area2 = calculateArea(mousePoint, triangle[1], triangle[2]);
    const area3 = calculateArea(mousePoint, triangle[2], triangle[0]);

    // Si la suma de las áreas de los sub-triángulos es igual al área original, el mouse está dentro
    return Math.abs(area1 + area2 + area3 - areaOriginal) < 0.01; // Ajuste de precisión
}