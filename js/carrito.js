import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

const renderizarCarrito = () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    const cardsContainer = document.getElementById("contenedor-carrito");
    const botonesCarrito = document.getElementById("botones-carrito");

    cardsContainer.innerHTML = "";
    botonesCarrito.innerHTML = "";

    if(!carrito.length) {
        const mensaje = document.createElement("p");
        mensaje.classList.add("mensaje-carrito-vacio");
        mensaje.textContent = "No tienes productos en el carrito";
        cardsContainer.appendChild(mensaje);
        return;
    }

    carrito.forEach((producto, indice) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("card");

        const img = document.createElement("img");
        img.classList.add("img-card")
        img.src = `../${producto.img}`;
        img.alt = producto.nombre;

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio}`;

        const btnEliminar = document.createElement("button")
        btnEliminar.classList.add("btn-eliminar");
        btnEliminar.textContent = "Eliminar producto";
        btnEliminar.addEventListener("click", () => {
          eliminarProducto(indice);

          renderizarCarrito()
         });

         tarjeta.appendChild(img);
         tarjeta.appendChild(titulo);
         tarjeta.appendChild(precio);
         tarjeta.appendChild(btnEliminar);

         cardsContainer.appendChild(tarjeta);
    });

    const btnVaciarCarrito = document.createElement("button");

    btnVaciarCarrito.classList.add("btnVaciar");
    btnVaciarCarrito.textContent = "Vaciar carrito";
    btnVaciarCarrito.addEventListener("click", () => {
        vaciarCarrito();

        renderizarCarrito();
    })

    botonesCarrito.appendChild(btnVaciarCarrito);
};

document.addEventListener("DOMContentLoaded", renderizarCarrito);