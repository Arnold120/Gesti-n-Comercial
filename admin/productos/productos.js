function getProductos() {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

function setProductos(data) {
    localStorage.setItem("productos", JSON.stringify(data));
}

function generarId() {
    return Date.now();
}

function limpiarFormulario() {
    document.getElementById("idProducto").value = "";
    document.getElementById("codigo").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("proveedor").value = "";
    document.getElementById("precioCompra").value = "";
    document.getElementById("precioVenta").value = "";
    document.getElementById("stock").value = "";
    document.getElementById("stockMinimo").value = "";
    document.getElementById("estado").value = "Activo";
}

function guardarProducto() {
    let productos = getProductos();

    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const precioCompra = document.getElementById("precioCompra").value;
    const precioVenta = document.getElementById("precioVenta").value;
    const stock = document.getElementById("stock").value;

    if (!codigo || !nombre || !precioCompra || !precioVenta || !stock) {
        alert("Campos obligatorios");
        return;
    }

    const producto = {
        id: generarId(),
        codigo,
        nombre,
        descripcion: document.getElementById("descripcion").value,
        categoria: document.getElementById("categoria").value,
        proveedor: document.getElementById("proveedor").value,
        precioCompra: Number(precioCompra),
        precioVenta: Number(precioVenta),
        stock: Number(stock),
        stockMinimo: Number(document.getElementById("stockMinimo").value),
        estado: document.getElementById("estado").value,
        fecha: new Date().toLocaleString()
    };

    productos.push(producto);
    setProductos(productos);

    limpiarFormulario();
    cargarProductos();
}

function cargarProductos() {
    let productos = getProductos();
    const tabla = document.getElementById("tablaProductos");

    tabla.innerHTML = productos.map(p => `
        <tr>
            <td>${p.codigo}</td>
            <td>${p.nombre}</td>
            <td>${p.categoria}</td>
            <td>${p.proveedor}</td>
            <td>${p.precioCompra}</td>
            <td>${p.precioVenta}</td>
            <td>${p.stock}</td>
            <td>${p.stockMinimo}</td>
            <td>${p.estado}</td>
            <td>${p.fecha}</td>
            <td>
                <button class="action-btn edit" onclick="editarProducto(${p.id})">Editar</button>
                <button class="action-btn delete" onclick="eliminarProducto(${p.id})">Eliminar</button>
            </td>
        </tr>
    `).join("");
}

function editarProducto(id) {
    let productos = getProductos();
    let p = productos.find(x => x.id === id);

    document.getElementById("idProducto").value = p.id;
    document.getElementById("codigo").value = p.codigo;
    document.getElementById("nombre").value = p.nombre;
    document.getElementById("descripcion").value = p.descripcion;
    document.getElementById("categoria").value = p.categoria;
    document.getElementById("proveedor").value = p.proveedor;
    document.getElementById("precioCompra").value = p.precioCompra;
    document.getElementById("precioVenta").value = p.precioVenta;
    document.getElementById("stock").value = p.stock;
    document.getElementById("stockMinimo").value = p.stockMinimo;
    document.getElementById("estado").value = p.estado;
}

function actualizarProducto() {
    let productos = getProductos();
    let id = Number(document.getElementById("idProducto").value);

    productos = productos.map(p => {
        if (p.id === id) {
            return {
                ...p,
                codigo: document.getElementById("codigo").value,
                nombre: document.getElementById("nombre").value,
                descripcion: document.getElementById("descripcion").value,
                categoria: document.getElementById("categoria").value,
                proveedor: document.getElementById("proveedor").value,
                precioCompra: Number(document.getElementById("precioCompra").value),
                precioVenta: Number(document.getElementById("precioVenta").value),
                stock: Number(document.getElementById("stock").value),
                stockMinimo: Number(document.getElementById("stockMinimo").value),
                estado: document.getElementById("estado").value
            };
        }
        return p;
    });

    setProductos(productos);
    limpiarFormulario();
    cargarProductos();
}

function eliminarProducto(id) {
    if (!confirm("¿Eliminar producto?")) return;

    let productos = getProductos();
    productos = productos.filter(p => p.id !== id);
    setProductos(productos);
    cargarProductos();
}

cargarProductos();