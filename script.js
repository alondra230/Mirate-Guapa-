let carrito = [];

const botones = document.querySelectorAll(".producto button");
const listaCarrito = document.getElementById("lista-carrito");
const totalElemento = document.getElementById("total");
const botonVaciar = document.getElementById("vaciar-carrito");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {

        const producto = boton.parentElement;
        const nombre = producto.querySelector("h3").textContent;
        const precioTexto = producto.querySelector("p").textContent;
        const precio = Number(precioTexto.replace("Q", ""));

        carrito.push({
            nombre: nombre,
            precio: precio
        });

        actualizarCarrito();

        document.getElementById("carrito").scrollIntoView({
            behavior: "smooth"
        });
    });
});

function actualizarCarrito() {

    listaCarrito.innerHTML = "";

    if (carrito.length === 0) {
        listaCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";
        totalElemento.textContent = "Total: Q0";
        return;
    }

    let total = 0;

    carrito.forEach((producto, indice) => {

        total += producto.precio;

        const elemento = document.createElement("div");

        elemento.innerHTML = `
            <p>
                <strong>${producto.nombre}</strong> - Q${producto.precio}
                <button onclick="eliminarProducto(${indice})">
                    Eliminar
                </button>
            </p>
        `;

        listaCarrito.appendChild(elemento);
    });

    totalElemento.textContent = "Total: Q" + total;
}

function eliminarProducto(indice) {
    carrito.splice(indice, 1);
    actualizarCarrito();
}

botonVaciar.addEventListener("click", () => {
    carrito = [];
    actualizarCarrito();
});
