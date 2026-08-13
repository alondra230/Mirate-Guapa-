let carrito = [];

const botones = document.querySelectorAll(".producto button");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {

        const producto = boton.parentElement;
        const nombre = producto.querySelector("h3").textContent;
        const precio = producto.querySelector("p").textContent;

        carrito.push({
            nombre: nombre,
            precio: precio
        });

        alert(nombre + " agregado al carrito");

        console.log("Carrito:", carrito);
    });
});
