/*
    Cuando cliquemos en los botones categoría, se dará el evento active,
    el cual representará el boton en el que estemos como activo.
    
*/ 

import { cargarProductos } from "./cargarProductos.js";
import { productos } from "../fetchProductos.js";


export function gestionarMenuCategorias() {

    const botonesCategoria = document.querySelectorAll(".boton-categoria"); //array que contiene todos los botones categoria
    const tituloPrincipal = document.querySelector("#titulo-principal");

    botonesCategoria.forEach(boton => {
        boton.addEventListener("click", (e) => {
    
            /* Quitamos la clase active de los elementos primero, para que no
               aparezcan todos como active */
            botonesCategoria.forEach(boton => boton.classList.remove("active"));
    
            /* Añadimos la clase active a los elementos que presionemos */
            e.currentTarget.classList.add("active");
    
            /* Si el boton pulsado, no corresponde con la categoria con id "todos",
                cargamos los productos cuyo id de categoria corresponda con el id del boton pulsado.
               
                Si el boton pulsado, corresponde con la categoria con id "todos",
                cargamos TODOS los productos */
    
            if (e.currentTarget.id != "todos") {
    
                 /* Creamos un array donde almacenamos el producto con mismo id de categoria que el id del boton pulsado.
                    Usamos la funcion find(), ya que solamente nos interesa el primer elemento que coincida con el id,
                    para que asi podamos extraer la propiedad nombre de la categoria a la que correponde el producto. */
                const productosCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
                tituloPrincipal.innerText = productosCategoria.categoria.nombre;
    
                /* Creamos otro array donde almacenaremos TODOS los productos con mismo id de categoria que el id del boton pulsado.
                   Usamos la función filter(), ya que nos interesan TODOS los elementos que encontremos con el mismo id. */
                const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
    
                /* Cargamos los productos que cumplen la condición, es decir, se cargarán
                los productos que tengan mismo id de categoria */
                cargarProductos(productosBoton);
    
            } else {
    
                tituloPrincipal.innerText = "Todos los productos";
                /* Cargamos TODOS los productos */
                cargarProductos(productos);
            }
    
        })
    });
    
}

gestionarMenuCategorias();

