
import { cargarProductosCarrito } from "./cargarProductosCarrito.js";

document.addEventListener("DOMContentLoaded", async () => {
    cargarProductosCarrito();
    actualizarBotonesEliminar(); // Configura los botones
});

// traemos la los productos agreagados del localStorage
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

// Funcion para actualizar los botones eliminar en el DOM

export function actualizarBotonesEliminar() {
    //boton de eliminar, usamos let ya que los productos se están creando después
    let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar"); //los actualizamos en el dom

    //cada vez que cliquemos el boton de agregar, se añadirá al carrito
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarProductoDelCarrito)
        
    });
    
}


export function eliminarProductoDelCarrito(e) {
    
    // Localizamos el id del boton de eliminar que pulsa el usuario
    const idBoton = e.currentTarget.id;

    // Localizamos el indice del producto que se quiere eliminar
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    /* Modificamos el contenido del carrito con la funcion splice().
       Le indicamos que comience a modificar el array de productosEnCarrito desde el index
       y le indicamos que solamente elimine 1 elemento.
       
       De este modo, cada vez que se presione el boton de eliminar, se borrará el producto completamente
       del carrito*/
    productosEnCarrito.splice(index,1);

    // Volvemos a cargar los productos
    cargarProductosCarrito();

    // Actualizamos el localStorage
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    // Forzamos la actualización del DOM antes de continuar
    
    /* La función requestAnimationFrame asegura que el navegador tenga tiempo 
    para actualizar el DOM antes de ejecutar la siguiente llamada a cargarProductosCarrito. */
    requestAnimationFrame(() => { cargarProductosCarrito(); });

}

// Funcion para actualizar el total del precio
export function actualizarTotal() {
    // total
    const total = document.querySelector("#total");

    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    total.innerText = `$${totalCalculado}`;


}
