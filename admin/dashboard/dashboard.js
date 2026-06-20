function getData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

function loadStats() {
    const usuarios = getData("usuarios");
    const clientes = getData("clientes");
    const productos = getData("productos");
    const ventas = getData("ventas");
    const compras = getData("compras");
    const inventario = getData("inventario");

    document.getElementById("stats").innerHTML = `
        <div class="card">Usuarios: ${usuarios.length}</div>
        <div class="card">Clientes: ${clientes.length}</div>
        <div class="card">Productos: ${productos.length}</div>
        <div class="card">Ventas: ${ventas.length}</div>
        <div class="card">Compras: ${compras.length}</div>
        <div class="card">Inventario: ${inventario.length}</div>
    `;
}

function loadMovimientos() {
    const movimientos = getData("movimientos");
    const tbody = document.getElementById("movimientos");

    tbody.innerHTML = movimientos.slice(-5).map(m => `
        <tr>
            <td>${m.tipo}</td>
            <td>${m.detalle}</td>
            <td>${m.fecha}</td>
        </tr>
    `).join("");
}

function loadBajoStock() {
    const productos = getData("productos");
    const tbody = document.getElementById("bajoStock");

    tbody.innerHTML = productos
        .filter(p => p.stock < 5)
        .map(p => `
            <tr>
                <td>${p.nombre}</td>
                <td>${p.stock}</td>
            </tr>
        `).join("");
}

loadStats();
loadMovimientos();
loadBajoStock();