
if (window.innerWidth <= 768) {
    console.log("Es un móvil");
    document.body.innerHTML = "hola"
} else {
    createLink(["/css/desktop/style.css", "/css/desktop/containers.css", "/css/desktop/options.css", "/css/desktop/footer.css"]);
    await import('./desktop/controller.js');
}




window.addEventListener("resize",async() => {

    if (window.innerWidth <= 768) {
        console.log("Es un móvil");
        document.body.innerHTML = "hola"
    } else {
        createLink(["/css/desktop/style.css", "/css/desktop/containers.css", "/css/desktop/options.css", "/css/desktop/footer.css"]);
        await import('./desktop/controller.js');

    }
})

function createLink(paths) {
    paths.forEach(path => {
        const newLink = document.createElement("link");
        newLink.rel = "stylesheet";
        newLink.href = path;

        document.head.appendChild(newLink);
    })
}
