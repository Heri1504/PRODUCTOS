class Producto {
    constructor(codigo, nombre, cantidad, precio, categoria) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.categoria = categoria;
    }
}

class Inventario {
    constructor() {
        this.productos = new Map();
    }

    agregarProducto(producto) {
        if (this.productos.has(producto.codigo)) {
            return false; // Código repetido
        }
        this.productos.set(producto.codigo, producto);
        return true;
    }
}

const inventario = new Inventario();

function mostrarMensaje(texto, tipo) {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = texto;
    mensaje.className = `message ${tipo}`;
    mensaje.style.display = "block";
    setTimeout(() => mensaje.style.display = "none", 3000);
}

function agregarProducto() {
    const codigo = document.getElementById("codigo").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const cantidad = document.getElementById("cantidad").value.trim();
    const precio = document.getElementById("precio").value.trim();
    const categoria = document.getElementById("categoria").value.trim();

    if (!codigo || !nombre || !cantidad || !precio || !categoria) {
        mostrarMensaje("Todos los campos son obligatorios", "error");
        return;
    }

    const producto = new Producto(codigo, nombre, cantidad, precio, categoria);
    
    if (inventario.agregarProducto(producto)) {
        mostrarMensaje("Producto agregado correctamente", "success");
        document.querySelectorAll("input").forEach(input => input.value = "");
    } else {
        mostrarMensaje("El código del producto ya existe", "error");
    }
}
