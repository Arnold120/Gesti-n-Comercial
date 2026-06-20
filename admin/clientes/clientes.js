function getClientes() {
    return JSON.parse(localStorage.getItem("clientes")) || [];
}

function setClientes(data) {
    localStorage.setItem("clientes", JSON.stringify(data));
}

function generarId() {
    return Date.now();
}

function limpiarFormulario() {
    document.getElementById("idCliente").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("cedula").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("estado").value = "Activo";
}

function guardarCliente() {
    let clientes = getClientes();

    const nombre = document.getElementById("nombre").value;
    const cedula = document.getElementById("cedula").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const direccion = document.getElementById("direccion").value;
    const estado = document.getElementById("estado").value;

    if (!nombre || !cedula || !telefono || !correo) {
        alert("Complete los campos obligatorios");
        return;
    }

    const cliente = {
        id: generarId(),
        nombre,
        cedula,
        telefono,
        correo,
        direccion,
        estado,
        fechaRegistro: new Date().toLocaleString()
    };

    clientes.push(cliente);
    setClientes(clientes);

    limpiarFormulario();
    cargarClientes();
}

function cargarClientes() {
    let clientes = getClientes();
    const tabla = document.getElementById("tablaClientes");

    tabla.innerHTML = clientes.map(c => `
        <tr>
            <td>${c.nombre}</td>
            <td>${c.cedula}</td>
            <td>${c.telefono}</td>
            <td>${c.correo}</td>
            <td>${c.direccion}</td>
            <td>${c.estado}</td>
            <td>${c.fechaRegistro}</td>
            <td>
                <button class="action-btn edit" onclick="editarCliente(${c.id})">Editar</button>
                <button class="action-btn delete" onclick="eliminarCliente(${c.id})">Eliminar</button>
            </td>
        </tr>
    `).join("");
}

function editarCliente(id) {
    let clientes = getClientes();
    let c = clientes.find(x => x.id === id);

    document.getElementById("idCliente").value = c.id;
    document.getElementById("nombre").value = c.nombre;
    document.getElementById("cedula").value = c.cedula;
    document.getElementById("telefono").value = c.telefono;
    document.getElementById("correo").value = c.correo;
    document.getElementById("direccion").value = c.direccion;
    document.getElementById("estado").value = c.estado;
}

function actualizarCliente() {
    let clientes = getClientes();
    let id = Number(document.getElementById("idCliente").value);

    clientes = clientes.map(c => {
        if (c.id === id) {
            return {
                ...c,
                nombre: document.getElementById("nombre").value,
                cedula: document.getElementById("cedula").value,
                telefono: document.getElementById("telefono").value,
                correo: document.getElementById("correo").value,
                direccion: document.getElementById("direccion").value,
                estado: document.getElementById("estado").value
            };
        }
        return c;
    });

    setClientes(clientes);
    limpiarFormulario();
    cargarClientes();
}

function eliminarCliente(id) {
    if (!confirm("¿Está seguro de eliminar este cliente?")) return;

    let clientes = getClientes();
    clientes = clientes.filter(c => c.id !== id);
    setClientes(clientes);
    cargarClientes();
}

cargarClientes();