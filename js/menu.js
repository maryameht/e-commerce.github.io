
const openMenu = document.querySelector("#open-menu-mobile");
const aside = document.querySelector("aside");
const closeMenu = document.querySelector("#close-menu-mobile");
const botonesCategoria = document.querySelectorAll(".boton-categoria"); //array que contiene todos los botones categoria


// Cuando pulsemos sobre las tres lineas apiladas, se nos abrirá el menu
openMenu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
})

// Cuando pulsemos sobre la X, saldremos del menu
closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
})

botonesCategoria.forEach(botonCategoria => botonCategoria.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))