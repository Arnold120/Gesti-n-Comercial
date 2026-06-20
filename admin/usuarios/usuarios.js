function getUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios")) || [];
}

function setUsuarios(data) {
    localStorage.setItem("usuarios", JSON.stringify(data));
}

function generarId() {
    return Date.now();
}

function limpiarFormulario() {
    document.getElementById("userId").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("password").value = "";
    document.getElementById("rol").value = "admin";
    document.getElementById("estado").value = "activo";
}

function guardarUsuario() {
    let usuarios = getUsuarios();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;
    const rol = document.getElementById("rol").value;
    const estado = document.getElementById("estado").value;

    if (!nombre || !correo || !password) {
        alert("Campos obligatorios");
        return;
    }

    const nuevo = {
        id: generarId(),
        nombre,
        correo,
        password,
        rol,
        estado,
        fecha: new Date().toLocaleString()
    };

    usuarios.push(nuevo);
    setUsuarios(usuarios);

    limpiarFormulario();
    cargarUsuarios();
}

function cargarUsuarios() {
    let usuarios = getUsuarios();
    const tabla = document.getElementById("tablaUsuarios");

    tabla.innerHTML = usuarios.map(u => `
        <tr>
            <td>${u.nombre}</td>
            <td>${u.correo}</td>
            <td>${u.rol}</td>
            <td>${u.estado}</td>
            <td>${u.fecha}</td>
            <td>
                <button class="action-btn edit" onclick="editarUsuario(${u.id})">Editar</button>
                <button class="action-btn delete" onclick="eliminarUsuario(${u.id})">Eliminar</button>
            </td>
        </tr>
    `).join("");
}

function editarUsuario(id) {
    let usuarios = getUsuarios();
    let user = usuarios.find(u => u.id === id);

    document.getElementById("userId").value = user.id;
    document.getElementById("nombre").value = user.nombre;
    document.getElementById("correo").value = user.correo;
    document.getElementById("password").value = user.password;
    document.getElementById("rol").value = user.rol;
    document.getElementById("estado").value = user.estado;
}

function actualizarUsuario() {
    let usuarios = getUsuarios();
    let id = Number(document.getElementById("userId").value);

    usuarios = usuarios.map(u => {
        if (u.id === id) {
            return {
                ...u,
                nombre: document.getElementById("nombre").value,
                correo: document.getElementById("correo").value,
                password: document.getElementById("password").value,
                rol: document.getElementById("rol").value,
                estado: document.getElementById("estado").value
            };
        }
        return u;
    });

    setUsuarios(usuarios);
    limpiarFormulario();
    cargarUsuarios();
}

function eliminarUsuario(id) {
    let usuarios = getUsuarios();
    usuarios = usuarios.filter(u => u.id !== id);
    setUsuarios(usuarios);
    cargarUsuarios();
}

cargarUsuarios();