function getInventario() {
    return JSON.parse(localStorage.getItem("inventario")) || [];
}

function setInventario(data) {
    localStorage.setItem("inventario", JSON.stringify(data));
}

function generarId() {
    return Date.now();
}

function limpiarFormulario() {
    document.getElementById("idInventario").value = "";
    document.getElementById("codigo").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("stockActual").value = "";
    document.getElementById("stockMinimo").value = "";
    document.getElementById("tipoMovimiento").value = "Entrada";
    document.getElementById("cantidad").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("usuario").value = "";
    document.getElementById("estado").value = "Activo";
}

function calcularStock(stockActual, tipo, cantidad) {
    stockActual = Number(stockActual);
    cantidad = Number(cantidad);

    if (tipo === "Entrada") return stockActual + cantidad;
    if (tipo === "Salida") return stockActual - cantidad;
    if (tipo === "Ajuste") return cantidad;

    return stockActual;
}

function guardarInventario() {
    let inventario = getInventario();

    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const stockActual = document.getElementById("stockActual").value;
    const cantidad = document.getElementById("cantidad").value;

    if (!codigo || !nombre || !stockActual || !cantidad) {
        alert("Campos obligatorios");
        return;
    }

    const tipo = document.getElementById("tipoMovimiento").value;
    const stockResultante = calcularStock(stockActual, tipo, cantidad);

    const mov = {
        id: generarId(),
        codigo,
        nombre,
        categoria: document.getElementById("categoria").value,
        stockActual: Number(stockActual),
        stockMinimo: Number(document.getElementById("stockMinimo").value),
        tipoMovimiento: tipo,
        cantidad: Number(cantidad),
        stockResultante,
        descripcion: document.getElementById("descripcion").value,
        usuario: document.getElementById("usuario").value,
        estado: document.getElementById("estado").value,
        fecha: new Date().toLocaleString()
    };

    inventario.push(mov);
    setInventario(inventario);

    limpiarFormulario();
    cargarInventario();
}

function cargarInventario() {
    let inventario = getInventario();
    const tabla = document.getElementById("tablaInventario");

    tabla.innerHTML = inventario.map(i => `
        <tr>
            <td>${i.codigo}</td>
            <td>${i.nombre}</td>
            <td>${i.categoria}</td>
            <td>${i.tipoMovimiento}</td>
            <td>${i.cantidad}</td>
            <td>${i.stockResultante}</td>
            <td>${i.usuario}</td>
            <td>${i.fecha}</td>
            <td>${i.estado}</td>
            <td>
                <button class="action-btn edit" onclick="editarInventario(${i.id})">Editar</button>
                <button class="action-btn delete" onclick="eliminarInventario(${i.id})">Eliminar</button>
            </td>
        </tr>
    `).join("");
}

function editarInventario(id) {
    let inventario = getInventario();
    let i = inventario.find(x => x.id === id);

    document.getElementById("idInventario").value = i.id;
    document.getElementById("codigo").value = i.codigo;
    document.getElementById("nombre").value = i.nombre;
    document.getElementById("categoria").value = i.categoria;
    document.getElementById("stockActual").value = i.stockActual;
    document.getElementById("stockMinimo").value = i.stockMinimo;
    document.getElementById("tipoMovimiento").value = i.tipoMovimiento;
    document.getElementById("cantidad").value = i.cantidad;
    document.getElementById("descripcion").value = i.descripcion;
    document.getElementById("usuario").value = i.usuario;
    document.getElementById("estado").value = i.estado;
}

function actualizarInventario() {
    let inventario = getInventario();
    let id = Number(document.getElementById("idInventario").value);

    inventario = inventario.map(i => {
        if (i.id === id) {
            const tipo = document.getElementById("tipoMovimiento").value;
            const stockActual = document.getElementById("stockActual").value;
            const cantidad = document.getElementById("cantidad").value;

            return {
                ...i,
                codigo: document.getElementById("codigo").value,
                nombre: document.getElementById("nombre").value,
                categoria: document.getElementById("categoria").value,
                stockActual: Number(stockActual),
                stockMinimo: Number(document.getElementById("stockMinimo").value),
                tipoMovimiento: tipo,
                cantidad: Number(cantidad),
                stockResultante: calcularStock(stockActual, tipo, cantidad),
                descripcion: document.getElementById("descripcion").value,
                usuario: document.getElementById("usuario").value,
                estado: document.getElementById("estado").value,
                fecha: i.fecha
            };
        }
        return i;
    });

    setInventario(inventario);
    limpiarFormulario();
    cargarInventario();
}

function eliminarInventario(id) {
    if (!confirm("¿Eliminar registro de inventario?")) return;

    let inventario = getInventario();
    inventario = inventario.filter(i => i.id !== id);
    setInventario(inventario);
    cargarInventario();
}

cargarInventario();