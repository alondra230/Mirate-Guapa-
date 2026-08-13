document.addEventListener("DOMContentLoaded", function () {

    const boton = document.querySelector("button");

    boton.addEventListener("click", function () {
        document.getElementById("productos").scrollIntoView({
            behavior: "smooth"
        });
    });

});
