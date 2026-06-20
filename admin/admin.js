function getSession() {
    return JSON.parse(localStorage.getItem("session"));
}

function checkAuth() {
    const session = getSession();
    if (!session) {
        window.location.href = "../auth/login.html";
    }
}

function logout() {
    localStorage.removeItem("session");
    window.location.href = "../index.html";
}

function loadUser() {
    const session = getSession();
    if (!session) return;

    document.getElementById("userName").innerHTML =
        `<strong>${session.name}</strong>`;

    document.getElementById("userRole").innerHTML =
        `<small>${session.role}</small>`;
}

function loadDashboardData() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    const ventas = JSON.parse(localStorage.getItem("ventas")) || [];
    const compras = JSON.parse(localStorage.getItem("compras")) || [];
    const inventario = JSON.parse(localStorage.getItem("inventario")) || [];

    const container = document.getElementById("dashboardPreview");

    container.innerHTML = `
        <div class="card"><i class="fa-solid fa-users"></i><br>Usuarios<br><b>${usuarios.length}</b></div>
        <div class="card"><i class="fa-solid fa-user"></i><br>Clientes<br><b>${clientes.length}</b></div>
        <div class="card"><i class="fa-solid fa-box"></i><br>Productos<br><b>${productos.length}</b></div>
        <div class="card"><i class="fa-solid fa-cash-register"></i><br>Ventas<br><b>${ventas.length}</b></div>
        <div class="card"><i class="fa-solid fa-cart-shopping"></i><br>Compras<br><b>${compras.length}</b></div>
        <div class="card"><i class="fa-solid fa-warehouse"></i><br>Inventario<br><b>${inventario.length}</b></div>
    `;
}

checkAuth();
loadUser();
loadDashboardData();