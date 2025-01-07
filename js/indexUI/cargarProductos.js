// CARGAR PRODUCTOS
// Cargar los productos elegidos en el div "contenedor-productos"

import {actualizarBotonesAgregar} from "./actualizar&agregar.js";

const contenedorProductos = document.querySelector("#contenedor-productos");

export function cargarProductos(productosElegidos) {

    /* Vaciamos el contenedor de productos, para que al cargar los productos elegidos
       no se dupliquen */
    contenedorProductos.innerHTML = "";

    //recorremos los productos
    productosElegidos.forEach(producto => {

        //creamos el elemento div que representa cada producto
        const div = document.createElement("div");
        //le asignamos la clase de producto para que adquiera el diseño css
        div.classList.add("producto");
        //rellenamos el html accediendo a las propiedades de cada objeto producto creado en el array productos
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}" >Agregar</button>
        </div>

        `
        //concatenamos el producto al contenedor-productos
        contenedorProductos.appendChild(div);
    })

    /* Cada vez que carguemos productos, se actualizarán los botones */
    actualizarBotonesAgregar();

}


