
import { cargarProductosCarrito } from "./cargarProductosCarrito.js";

// traemos la los productos agreagados del localStorage
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");


// Función para vaciar el carrito al presionar el boton de Vaciar Carrito
export function vaciarCarrito() {

    const botonVaciar = document.querySelector("#carrito-acciones-vaciar");

    botonVaciar.addEventListener("click", () => {
        // Dejamos la longitud del carrito en 0
        productosEnCarrito.length = 0;

        // Actualizamos el localstorage
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

        // Cargamos los productos para que se muestre el texto de vacio
        cargarProductosCarrito();   
 });

}

vaciarCarrito();



// Función para vaciar el carrito al presionar el boton de Vaciar Carrito
export function comprarCarrito() {

    const botonComprar = document.querySelector("#carrito-acciones-comprar");

    botonComprar.addEventListener("click", () => {
        // Dejamos la longitud del carrito en 0
        productosEnCarrito.length = 0;

        // Actualizamos el localstorage
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

        // Habilitamos la visibilidad del texto de "gracias por tu compra" y deshabilitamos lo demás
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.remove("disabled");
        });
        
}

comprarCarrito();
