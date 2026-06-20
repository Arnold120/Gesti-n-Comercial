function getRoles() {
    return JSON.parse(localStorage.getItem("roles")) || [];
}

function setRoles(data) {
    localStorage.setItem("roles", JSON.stringify(data));
}

function generarId() {
    return Date.now();
}

function limpiarFormulario() {
    document.getElementById("rolId").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("estado").value = "Activo";

    document.querySelectorAll(".checkbox-group input").forEach(c => c.checked = false);
}

function obtenerPermisos() {
    let permisos = [];
    document.querySelectorAll(".checkbox-group input:checked").forEach(c => {
        permisos.push(c.value);
    });
    return permisos;
}

function setPermisos(permisos) {
    document.querySelectorAll(".checkbox-group input").forEach(c => {
        c.checked = permisos.includes(c.value);
    });
}

function guardarRol() {
    let roles = getRoles();

    const nombre = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descripcion").value;
    const estado = document.getElementById("estado").value;
    const permisos = obtenerPermisos();

    if (!nombre || !descripcion || permisos.length === 0) {
        alert("Complete los campos obligatorios");
        return;
    }

    const rol = {
        id: generarId(),
        nombre,
        descripcion,
        permisos,
        estado,
        fecha: new Date().toLocaleString()
    };

    roles.push(rol);
    setRoles(roles);

    limpiarFormulario();
    cargarRoles();
}

function cargarRoles() {
    let roles = getRoles();
    const tabla = document.getElementById("tablaRoles");

    tabla.innerHTML = roles.map(r => `
        <tr>
            <td>${r.nombre}</td>
            <td>${r.descripcion}</td>
            <td>${r.permisos.join(", ")}</td>
            <td>${r.estado}</td>
            <td>${r.fecha}</td>
            <td>
                <button class="action-btn edit" onclick="editarRol(${r.id})">Editar</button>
                <button class="action-btn delete" onclick="eliminarRol(${r.id})">Eliminar</button>
            </td>
        </tr>
    `).join("");
}

function editarRol(id) {
    let roles = getRoles();
    let rol = roles.find(r => r.id === id);

    document.getElementById("rolId").value = rol.id;
    document.getElementById("nombre").value = rol.nombre;
    document.getElementById("descripcion").value = rol.descripcion;
    document.getElementById("estado").value = rol.estado;

    setPermisos(rol.permisos);
}

function actualizarRol() {
    let roles = getRoles();
    let id = Number(document.getElementById("rolId").value);

    roles = roles.map(r => {
        if (r.id === id) {
            return {
                ...r,
                nombre: document.getElementById("nombre").value,
                descripcion: document.getElementById("descripcion").value,
                permisos: obtenerPermisos(),
                estado: document.getElementById("estado").value
            };
        }
        return r;
    });

    setRoles(roles);
    limpiarFormulario();
    cargarRoles();
}

function eliminarRol(id) {
    let roles = getRoles();
    roles = roles.filter(r => r.id !== id);
    setRoles(roles);
    cargarRoles();
}

cargarRoles();