    const triangleMadrid = document.querySelector(".triangle__madrid");
    const triangleAndorra = document.querySelector(".triangle__andorra");
    const abogados = document.querySelector(".option__abogados");
    const economistas = document.querySelector(".option__economistas");
    const abogadosLink = document.querySelector(".option__abogados--link");
    const economistasLink = document.querySelector(".option__economistas--link");


export function minimizeTriangles() {
  triangleMadrid.classList.add('triangle__madrid--min');
  triangleAndorra.classList.add('triangle__andorra--vertical');
}

export function maximizeTriangles() {
  triangleMadrid.classList.remove('triangle__madrid--min');
  triangleAndorra.classList.remove('triangle__andorra--vertical');
}

export function abogadosHover() {
  economistas.classList.remove("option__economistas--hover");
  abogados.classList.remove("option__abogados--not-hover", "transition-show");
  economistasLink.classList.remove("show-link");

  abogados.classList.add("option__abogados--hover", "transition-show");
  economistas.classList.add("option__economistas--not-hover", "transition-hide");
  abogadosLink.classList.add("show-link");
  
}

export function economistasHover() {
  abogados.classList.remove("option__abogados--hover");
  economistas.classList.remove("option__economistas--not-hover", "transition-show");
  abogadosLink.classList.remove("show-link");

  economistas.classList.add("option__economistas--hover", "transition-show");
  abogados.classList.add("option__abogados--not-hover", "transition-show");
  economistasLink.classList.add("show-link");
}

export function optionsClassHoverRemove() {
  abogados.classList.remove("option__abogados--hover");
  economistas.classList.remove("option__economistas--not-hover");
  abogadosLink.classList.remove("show-link");

  economistas.classList.remove("option__economistas--hover");
  abogados.classList.remove("option__abogados--not-hover");
  economistasLink.classList.remove("show-link");
}