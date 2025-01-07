
import { fetchProductos, productos } from "../fetchProductos.js";

let botonesAgregar; 
const numerito = document.querySelector("#numerito");

// Nos aseguramos de cargar los productos y configurar los botones cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", async () => {
    await fetchProductos(); // Carga los productos
    actualizarBotonesAgregar(); // Configura los botones
});

// Funcion para actualizar los botones agregar en el DOM
export function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar"); //los actualizamos en el dom

    //cada vez que cliquemos el boton de agregar, se añadirá al carrito
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    });
}

/* En esta parte, haremos que cada vez que se añada un producto al carrito
   y volvamos a seguir comprando para añadir otro producto, que el producto añadido al principio
   se mantenga 
*/
// Donde almacenamos los productos añadidos
let productosEnCarrito; 

// Donde almacenamos los productos almacenamos en el localstorage
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

/* Si hay productos añadidos en el localstorage, los almacenamos productosEnCarrito,
   y si no hay productos en el localstorage, dejamos el array productosEnCarrito vacio
*/
if(productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    // Actualizamos el numerito que indica cuántos productos hay en el carrito
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

//funcion que añadira cada producto al array productosEnCarrito
function agregarAlCarrito (e) {

    //localizamos qué producto estamos agregando
    const idBoton = e.currentTarget.id;

    /* localizamos en nuesto array de productos el producto q coincida con el id
       del boton clicado y lo almacenamos*/
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    /* esta condicion hará que cuando añadamos un nuevo producto, no se duplique
       sino que solamente aumente la propiedad cantidad del producto,
       comprobaremos si el producto que se quiere añadir se repite en el array con la funcion some() 
                true : se repite
                false : no se repite
    */
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        // si está en el array, buscamos el indice del producto del producto
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        // sumamos la cantidad del producto seleccionado en 1
        productosEnCarrito[index].cantidad++;

    } else {
        // si no está en el array, dejamos la cantidad del producto en 1 
        productoAgregado.cantidad = 1;
        // y agregamos el producto
        productosEnCarrito.push(productoAgregado);


    }

    // llamamos a la funcion actualizar numero
    actualizarNumerito();
    console.log(productosEnCarrito);

    /* Usamos el método localStorage.setItem() para almacenar el par clave-valor en
       el almacenamiento del navegador, lo que singifica que aunque el usuario cierre la pagina o el navegador,
       los datos permanecen en el navegador, a no ser que el usuario los borre explicitamente.
       
       Como clave usamos: productos-en-carrito
       Como valor usamos el método JSON.stringfy(productosEnCarrito), con el fin de convertir el array de objetos en un
       string en formato JSON
       
       En resumen, almacenamos en el navegador los objetos producto del array productos en carrito.
       
       Comprobación: Inspector -> Application -> Local storage ->-> file://*/

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

// actualizar el numero del carrito

function actualizarNumerito() {

    /* Usamos el metodo reduce() para recorrer el array productosEnCarrito y reducirlo a un solo valor,
       o más bien, acumular la suma de la propiedad cantidad de cada producto.
      
       Por tanto, en el callback usamos como parámetros:
        - acumulador : guarda el resultado acumulado de las iteraciones, comenzando en 0
        - producto : cada producto añadido al carrito
    
        1a iteracion -> acc = 0, producto.cantidad = 2, acc = 0 + 2
        2a iteracion -> acc = 2, producto.cantidad = 1, acc = 2 + 1    
    
    */
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}



