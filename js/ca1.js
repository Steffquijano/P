let carrito = [];
let total = 0;

function agregarProducto(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = '';
    carrito.forEach(producto => {
        const item = document.createElement('li');
        item.textContent = `${producto.nombre} - $${producto.precio}`;
        listaProductos.appendChild(item);
    });
}

function enviarPedido(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const mensaje = document.getElementById('mensaje');
    if (carrito.length > 0) {
        mensaje.textContent = `¡Pedido de ${nombre} a la dirección ${direccion} por un total de $${total} ha sido enviado!`;
        carrito = [];
        total = 0;
        actualizarCarrito();
        document.getElementById('formulario-pedido').reset();
    } else {
        mensaje.textContent = 'Agrega productos al carrito antes de enviar el pedido.';
    }
}
