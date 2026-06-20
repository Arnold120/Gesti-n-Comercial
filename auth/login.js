function handleLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Completa todos los campos");
        return;
    }

    const user = login(email, password);

    if (user) {
        localStorage.setItem("session", JSON.stringify(user));
        window.location.href = "../admin/index.html";
    } else {
        alert("Credenciales incorrectas");
    }
}