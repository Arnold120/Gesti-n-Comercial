function getVentas() {
    return JSON.parse(localStorage.getItem("ventas")) || [];
}

function setVentas(data) {
    localStorage.setItem("ventas", JSON.stringify(data));
}

function generarId() {
    return Date.now();
}

function limpiarFormulario() {
    document.getElementById("idVenta").value = "";
    document.getElementById("numeroVenta").value = "";
    document.getElementById("cliente").value = "";
    document.getElementById("codigo").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precioUnitario").value = "";
    document.getElementById("descuento").value = 0;
    document.getElementById("impuesto").value = 0;
    document.getElementById("metodoPago").value = "Efectivo";
    document.getElementById("usuario").value = "";
    document.getElementById("estado").value = "Pendiente";
}

function calcularSubtotal(cantidad, precio) {
    return Number(cantidad) * Number(precio);
}

function calcularTotal(subtotal, descuento, impuesto) {
    return Number(subtotal) - Number(descuento) + Number(impuesto);
}

function actualizarStockVenta(codigo, cantidad) {
    let productos = JSON.parse(localStorage.getItem("productos")) || [];

    productos = productos.map(p => {
        if (p.codigo === codigo) {
            let nuevoStock = Number(p.stock) - Number(cantidad);
            return { ...p, stock: nuevoStock };
        }
        return p;
    });

    localStorage.setItem("productos", JSON.stringify(productos));
}

function guardarVenta() {
    let ventas = getVentas();

    const numeroVenta = document.getElementById("numeroVenta").value;
    const cliente = document.getElementById("cliente").value;
    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const cantidad = document.getElementById("cantidad").value;
    const precioUnitario = document.getElementById("precioUnitario").value;

    if (!numeroVenta || !cliente || !codigo || !nombre || !cantidad || !precioUnitario) {
        alert("Campos obligatorios incompletos");
        return;
    }

    const subtotal = calcularSubtotal(cantidad, precioUnitario);
    const descuento = Number(document.getElementById("descuento").value || 0);
    const impuesto = Number(document.getElementById("impuesto").value || 0);
    const total = calcularTotal(subtotal, descuento, impuesto);

    const venta = {
        id: generarId(),
        numeroVenta,
        cliente,
        codigo,
        nombre,
        categoria: document.getElementById("categoria").value,
        cantidad: Number(cantidad),
        precioUnitario: Number(precioUnitario),
        subtotal,
        descuento,
        impuesto,
        total,
        metodoPago: document.getElementById("metodoPago").value,
        usuario: document.getElementById("usuario").value,
        estado: document.getElementById("estado").value,
        fecha: new Date().toLocaleString()
    };

    ventas.push(venta);
    setVentas(ventas);

    actualizarStockVenta(codigo, cantidad);

    limpiarFormulario();
    cargarVentas();
}

function cargarVentas() {
    let ventas = getVentas();
    const tabla = document.getElementById("tablaVentas");

    tabla.innerHTML = ventas.map(v => `
        <tr>
            <td>${v.numeroVenta}</td>
            <td>${v.cliente}</td>
            <td>${v.nombre}</td>
            <td>${v.cantidad}</td>
            <td>${v.subtotal}</td>
            <td>${v.descuento}</td>
            <td>${v.impuesto}</td>
            <td>${v.total}</td>
            <td>${v.metodoPago}</td>
            <td>${v.usuario}</td>
            <td>${v.fecha}</td>
            <td>${v.estado}</td>
            <td>
                <button class="action-btn edit" onclick="editarVenta(${v.id})">Editar</button>
                <button class="action-btn delete" onclick="eliminarVenta(${v.id})">Eliminar</button>
            </td>
        </tr>
    `).join("");
}

function editarVenta(id) {
    let ventas = getVentas();
    let v = ventas.find(x => x.id === id);

    document.getElementById("idVenta").value = v.id;
    document.getElementById("numeroVenta").value = v.numeroVenta;
    document.getElementById("cliente").value = v.cliente;
    document.getElementById("codigo").value = v.codigo;
    document.getElementById("nombre").value = v.nombre;
    document.getElementById("categoria").value = v.categoria;
    document.getElementById("cantidad").value = v.cantidad;
    document.getElementById("precioUnitario").value = v.precioUnitario;
    document.getElementById("descuento").value = v.descuento;
    document.getElementById("impuesto").value = v.impuesto;
    document.getElementById("metodoPago").value = v.metodoPago;
    document.getElementById("usuario").value = v.usuario;
    document.getElementById("estado").value = v.estado;
}

function actualizarVenta() {
    let ventas = getVentas();
    let id = Number(document.getElementById("idVenta").value);

    ventas = ventas.map(v => {
        if (v.id === id) {

            const cantidad = document.getElementById("cantidad").value;
            const precio = document.getElementById("precioUnitario").value;

            const subtotal = calcularSubtotal(cantidad, precio);
            const descuento = Number(document.getElementById("descuento").value || 0);
            const impuesto = Number(document.getElementById("impuesto").value || 0);

            return {
                ...v,
                numeroVenta: document.getElementById("numeroVenta").value,
                cliente: document.getElementById("cliente").value,
                codigo: document.getElementById("codigo").value,
                nombre: document.getElementById("nombre").value,
                categoria: document.getElementById("categoria").value,
                cantidad: Number(cantidad),
                precioUnitario: Number(precio),
                subtotal,
                descuento,
                impuesto,
                total: calcularTotal(subtotal, descuento, impuesto),
                metodoPago: document.getElementById("metodoPago").value,
                usuario: document.getElementById("usuario").value,
                estado: document.getElementById("estado").value,
                fecha: v.fecha
            };
        }
        return v;
    });

    setVentas(ventas);
    limpiarFormulario();
    cargarVentas();
}

function eliminarVenta(id) {
    if (!confirm("¿Eliminar venta?")) return;

    let ventas = getVentas();

    let venta = ventas.find(v => v.id === id);
    if (venta) {
        let productos = JSON.parse(localStorage.getItem("productos")) || [];

        productos = productos.map(p => {
            if (p.codigo === venta.codigo) {
                return { ...p, stock: Number(p.stock) + Number(venta.cantidad) };
            }
            return p;
        });

        localStorage.setItem("productos", JSON.stringify(productos));
    }

    ventas = ventas.filter(v => v.id !== id);
    setVentas(ventas);

    cargarVentas();
}

cargarVentas();