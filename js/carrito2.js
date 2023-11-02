function toggleCarrito() {
    const carrito = document.getElementById('carrito');
    carrito.classList.toggle('abierto');
}
function enviarPedido(event) {
    event.preventDefault();

    // Aquí puedes agregar el código para procesar el pedido (por ejemplo, enviar los datos al servidor).

    // Luego, cierra el carrito después de enviar el pedido
    const carrito = document.getElementById('carrito');
    carrito.classList.remove('abierto');
}
