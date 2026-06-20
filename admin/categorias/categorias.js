function getCategorias() {
    return JSON.parse(localStorage.getItem("categorias")) || [];
}

function setCategorias(data) {
    localStorage.setItem("categorias", JSON.stringify(data));
}

function generarId() {
    return Date.now();
}

function limpiarFormulario() {
    document.getElementById("idCategoria").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("estado").value = "Activo";
}

function guardarCategoria() {
    let categorias = getCategorias();

    const nombre = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descripcion").value;
    const estado = document.getElementById("estado").value;

    if (!nombre || !descripcion) {
        alert("Campos obligatorios");
        return;
    }

    const categoria = {
        id: generarId(),
        nombre,
        descripcion,
        estado,
        fecha: new Date().toLocaleString()
    };

    categorias.push(categoria);
    setCategorias(categorias);

    limpiarFormulario();
    cargarCategorias();
}

function cargarCategorias() {
    let categorias = getCategorias();
    const tabla = document.getElementById("tablaCategorias");

    tabla.innerHTML = categorias.map(c => `
        <tr>
            <td>${c.nombre}</td>
            <td>${c.descripcion}</td>
            <td>${c.estado}</td>
            <td>${c.fecha}</td>
            <td>
                <button class="action-btn edit" onclick="editarCategoria(${c.id})">Editar</button>
                <button class="action-btn delete" onclick="eliminarCategoria(${c.id})">Eliminar</button>
            </td>
        </tr>
    `).join("");
}

function editarCategoria(id) {
    let categorias = getCategorias();
    let c = categorias.find(x => x.id === id);

    document.getElementById("idCategoria").value = c.id;
    document.getElementById("nombre").value = c.nombre;
    document.getElementById("descripcion").value = c.descripcion;
    document.getElementById("estado").value = c.estado;
}

function actualizarCategoria() {
    let categorias = getCategorias();
    let id = Number(document.getElementById("idCategoria").value);

    categorias = categorias.map(c => {
        if (c.id === id) {
            return {
                ...c,
                nombre: document.getElementById("nombre").value,
                descripcion: document.getElementById("descripcion").value,
                estado: document.getElementById("estado").value
            };
        }
        return c;
    });

    setCategorias(categorias);
    limpiarFormulario();
    cargarCategorias();
}

function eliminarCategoria(id) {
    if (!confirm("¿Eliminar categoría?")) return;

    let categorias = getCategorias();
    categorias = categorias.filter(c => c.id !== id);
    setCategorias(categorias);
    cargarCategorias();
}

cargarCategorias();