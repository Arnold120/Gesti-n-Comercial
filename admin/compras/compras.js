function getCompras() {
    return JSON.parse(localStorage.getItem("compras")) || [];
}

function setCompras(data) {
    localStorage.setItem("compras", JSON.stringify(data));
}

function generarId() {
    return Date.now();
}

function limpiarFormulario() {
    document.getElementById("idCompra").value = "";
    document.getElementById("numeroCompra").value = "";
    document.getElementById("proveedor").value = "";
    document.getElementById("codigo").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precioUnitario").value = "";
    document.getElementById("impuesto").value = "";
    document.getElementById("metodoPago").value = "Efectivo";
    document.getElementById("usuario").value = "";
    document.getElementById("estado").value = "Pendiente";
}

function calcularSubtotal(cantidad, precio) {
    return Number(cantidad) * Number(precio);
}

function calcularTotal(subtotal, impuesto) {
    return Number(subtotal) + Number(impuesto);
}

function guardarCompra() {
    let compras = getCompras();

    const numero = document.getElementById("numeroCompra").value;
    const proveedor = document.getElementById("proveedor").value;
    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const cantidad = document.getElementById("cantidad").value;
    const precio = document.getElementById("precioUnitario").value;

    if (!numero || !proveedor || !codigo || !nombre || !cantidad || !precio) {
        alert("Campos obligatorios");
        return;
    }

    const subtotal = calcularSubtotal(cantidad, precio);
    const impuesto = Number(document.getElementById("impuesto").value || 0);
    const total = calcularTotal(subtotal, impuesto);

    const compra = {
        id: generarId(),
        numeroCompra: numero,
        proveedor,
        codigo,
        nombre,
        categoria: document.getElementById("categoria").value,
        cantidad: Number(cantidad),
        precioUnitario: Number(precio),
        subtotal,
        impuesto,
        total,
        metodoPago: document.getElementById("metodoPago").value,
        usuario: document.getElementById("usuario").value,
        estado: document.getElementById("estado").value,
        fecha: new Date().toLocaleString()
    };

    compras.push(compra);
    setCompras(compras);

    limpiarFormulario();
    cargarCompras();
}

function cargarCompras() {
    let compras = getCompras();
    const tabla = document.getElementById("tablaCompras");

    tabla.innerHTML = compras.map(c => `
        <tr>
            <td>${c.numeroCompra}</td>
            <td>${c.proveedor}</td>
            <td>${c.nombre}</td>
            <td>${c.cantidad}</td>
            <td>${c.subtotal}</td>
            <td>${c.total}</td>
            <td>${c.metodoPago}</td>
            <td>${c.usuario}</td>
            <td>${c.fecha}</td>
            <td>${c.estado}</td>
            <td>
                <button class="action-btn edit" onclick="editarCompra(${c.id})">Editar</button>
                <button class="action-btn delete" onclick="eliminarCompra(${c.id})">Eliminar</button>
            </td>
        </tr>
    `).join("");
}

function editarCompra(id) {
    let compras = getCompras();
    let c = compras.find(x => x.id === id);

    document.getElementById("idCompra").value = c.id;
    document.getElementById("numeroCompra").value = c.numeroCompra;
    document.getElementById("proveedor").value = c.proveedor;
    document.getElementById("codigo").value = c.codigo;
    document.getElementById("nombre").value = c.nombre;
    document.getElementById("categoria").value = c.categoria;
    document.getElementById("cantidad").value = c.cantidad;
    document.getElementById("precioUnitario").value = c.precioUnitario;
    document.getElementById("impuesto").value = c.impuesto;
    document.getElementById("metodoPago").value = c.metodoPago;
    document.getElementById("usuario").value = c.usuario;
    document.getElementById("estado").value = c.estado;
}

function actualizarCompra() {
    let compras = getCompras();
    let id = Number(document.getElementById("idCompra").value);

    compras = compras.map(c => {
        if (c.id === id) {
            const cantidad = document.getElementById("cantidad").value;
            const precio = document.getElementById("precioUnitario").value;
            const subtotal = calcularSubtotal(cantidad, precio);
            const impuesto = Number(document.getElementById("impuesto").value || 0);

            return {
                ...c,
                numeroCompra: document.getElementById("numeroCompra").value,
                proveedor: document.getElementById("proveedor").value,
                codigo: document.getElementById("codigo").value,
                nombre: document.getElementById("nombre").value,
                categoria: document.getElementById("categoria").value,
                cantidad: Number(cantidad),
                precioUnitario: Number(precio),
                subtotal,
                impuesto,
                total: calcularTotal(subtotal, impuesto),
                metodoPago: document.getElementById("metodoPago").value,
                usuario: document.getElementById("usuario").value,
                estado: document.getElementById("estado").value,
                fecha: c.fecha
            };
        }
        return c;
    });

    setCompras(compras);
    limpiarFormulario();
    cargarCompras();
}

function eliminarCompra(id) {
    if (!confirm("¿Eliminar compra?")) return;

    let compras = getCompras();
    compras = compras.filter(c => c.id !== id);
    setCompras(compras);
    cargarCompras();
}

cargarCompras();