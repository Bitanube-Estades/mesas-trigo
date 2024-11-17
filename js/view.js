    const triangleMadrid = document.querySelector(".triangle__madrid");
    const triangleAndorra = document.querySelector(".triangle__andorra");
    

export function minimizeTriangles() {
  triangleMadrid.classList.add('triangle--min');
  triangleAndorra.classList.add('triangle--min');
}

export function maximizeTriangles() {
  triangleMadrid.classList.remove('triangle--min');
  triangleAndorra.classList.remove('triangle--min');
}