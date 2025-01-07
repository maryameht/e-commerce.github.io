// Importamos información del archivo productos.json

import { cargarProductos } from "./indexUI/cargarProductos.js";

export let productos = [];
export function fetchProductos() {

    fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
})
}



