document.getElementById("accept").addEventListener("click", function() {
    // Coloca aquí el código para aceptar los términos y condiciones, por ejemplo, redireccionar a la página principal.
    window.location.href = "index.html"; // Cambia la URL a la página principal.
});

document.getElementById("reject").addEventListener("click", function() {
    // Coloca aquí el código para rechazar los términos y condiciones, por ejemplo, cerrar la ventana o redireccionar a una página de cierre.
    window.close(); // Cierra la ventana actual.
});
