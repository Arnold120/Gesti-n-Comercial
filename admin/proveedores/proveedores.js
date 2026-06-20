function getProveedores() {
    return JSON.parse(localStorage.getItem("proveedores")) || [];
}

function setProveedores(data) {
    localStorage.setItem("proveedores", JSON.stringify(data));
}

function generarId() {
    return Date.now();
}

function limpiarFormulario() {
    document.getElementById("idProveedor").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("contacto").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("estado").value = "Activo";
}

function guardarProveedor() {
    let proveedores = getProveedores();

    const nombre = document.getElementById("nombre").value;
    const contacto = document.getElementById("contacto").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;

    if (!nombre || !contacto || !telefono || !correo) {
        alert("Campos obligatorios");
        return;
    }

    const proveedor = {
        id: generarId(),
        nombre,
        contacto,
        telefono,
        correo,
        direccion: document.getElementById("direccion").value,
        tipo: document.getElementById("tipo").value,
        estado: document.getElementById("estado").value,
        fecha: new Date().toLocaleString()
    };

    proveedores.push(proveedor);
    setProveedores(proveedores);

    limpiarFormulario();
    cargarProveedores();
}

function cargarProveedores() {
    let proveedores = getProveedores();
    const tabla = document.getElementById("tablaProveedores");

    tabla.innerHTML = proveedores.map(p => `
        <tr>
            <td>${p.nombre}</td>
            <td>${p.contacto}</td>
            <td>${p.telefono}</td>
            <td>${p.correo}</td>
            <td>${p.direccion}</td>
            <td>${p.tipo}</td>
            <td>${p.estado}</td>
            <td>${p.fecha}</td>
            <td>
                <button class="action-btn edit" onclick="editarProveedor(${p.id})">Editar</button>
                <button class="action-btn delete" onclick="eliminarProveedor(${p.id})">Eliminar</button>
            </td>
        </tr>
    `).join("");
}

function editarProveedor(id) {
    let proveedores = getProveedores();
    let p = proveedores.find(x => x.id === id);

    document.getElementById("idProveedor").value = p.id;
    document.getElementById("nombre").value = p.nombre;
    document.getElementById("contacto").value = p.contacto;
    document.getElementById("telefono").value = p.telefono;
    document.getElementById("correo").value = p.correo;
    document.getElementById("direccion").value = p.direccion;
    document.getElementById("tipo").value = p.tipo;
    document.getElementById("estado").value = p.estado;
}

function actualizarProveedor() {
    let proveedores = getProveedores();
    let id = Number(document.getElementById("idProveedor").value);

    proveedores = proveedores.map(p => {
        if (p.id === id) {
            return {
                ...p,
                nombre: document.getElementById("nombre").value,
                contacto: document.getElementById("contacto").value,
                telefono: document.getElementById("telefono").value,
                correo: document.getElementById("correo").value,
                direccion: document.getElementById("direccion").value,
                tipo: document.getElementById("tipo").value,
                estado: document.getElementById("estado").value
            };
        }
        return p;
    });

    setProveedores(proveedores);
    limpiarFormulario();
    cargarProveedores();
}

function eliminarProveedor(id) {
    if (!confirm("¿Eliminar proveedor?")) return;

    let proveedores = getProveedores();
    proveedores = proveedores.filter(p => p.id !== id);
    setProveedores(proveedores);
    cargarProveedores();
}

cargarProveedores();