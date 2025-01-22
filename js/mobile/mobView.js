const slogan = $("#mob__slogan h1");



export function sloganIteration() {
    // Frases slogan
    const frases = [
        "Your doubts are our challenges",
        "Tu cabinete de confianza",
        "Te asesoramos en Derecho constitucional",
        "Tanto en Andorra como en Madrid"
    ];

    let index = 0;

//

// Funció per cambiar el texte
    function updateText() {
        slogan.text(frases[index]);
        index = (index + 1) % frases.length;
    }
    slogan.on("animationiteration", updateText);

    updateText()
}

