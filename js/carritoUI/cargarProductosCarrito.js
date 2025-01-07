
import { actualizarBotonesEliminar, eliminarProductoDelCarrito, actualizarTotal } from "./actualizar&eliminar.js";

export function cargarProductosCarrito() {

// traemos la los productos agreagados del localStorage
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");


// Si array de productos en carrito No esta vacio (true)
/* Añadimos esta parte && productosEnCarrito.length > 0 en el if, para que al eliminar todos
   los productos del carrito, se muestre el mensaje de texto indicando que el carrito esta vacio */ 
if(productosEnCarrito && productosEnCarrito.length > 0) {

    // Añadimos la clase disabled al texto de carrito vacio para que no aparezca
    contenedorCarritoVacio.classList.add("disabled");
    
    // Quitamos la clase disabled al carrito productos y al carrito acciones para que se muestren
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");

    // Añadimos la clase disabled al carrito-comprado 
    contenedorCarritoComprado.classList.add("disabled");

    // Vaciamos el contenedor de carrito productos para que este vacío antes de entrada
    contenedorCarritoProductos.innerHTML = "";

    // Creamos la estructura div que queremos que se muestre cada vez que añadamos un producto en el carrito
    productosEnCarrito.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML = 
        ` <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito-producto-titulo">
                <small>Nombre</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-producto-eliminar" id="${producto.id}">
                <i class="bi bi-trash-fill"></i>
            </button> 
        `;
        
        contenedorCarritoProductos.append(div);

    })

// Si el carrito productos SÍ esta vacio
}else {

    // Habilitamos la visibilidad del texto de carrito vacio y deshabilitamos lo demás
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.add("disabled");

}

// Cada vez que se carguen los productos del localstorage, actaulizamos los botones eliminar
actualizarBotonesEliminar();
actualizarTotal();

}

cargarProductosCarrito();
