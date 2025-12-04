import { productos } from "./productos.js";
import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById("cards-container")

    const carrito = obtenerCarrito()
    actualizarContador(carrito)

    productos.forEach((producto) => {
        const tarjeta = document.createElement("article")
        tarjeta.classList.add("card");

        const img = document.createElement("img")
        img.classList.add("img-card")
        img.src = producto.img
        img.alt = producto.nombre

        const titulo = document.createElement("h3")
        titulo.textContent = producto.nombre

        const precio = document.createElement("p")
        precio.textContent = `$${producto.precio}`

        const boton = document.createElement("button")
        boton.classList.add("btn-agregar");
        boton.textContent = "Agregar al carrito";

        boton.addEventListener("click", () => {
            agregarAlCarrito(producto)
        })

        tarjeta.appendChild(img);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);

        cardsContainer.appendChild(tarjeta)

    })
})