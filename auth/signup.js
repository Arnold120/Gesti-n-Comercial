function handleSignup() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
        alert("Completa todos los campos");
        return;
    }

    let users = getUsers();

    const exists = users.find(u => u.email === email);

    if (exists) {
        alert("Usuario ya existe");
        return;
    }

    users.push({
        id: Date.now(),
        name,
        email,
        password,
        role: "admin"
    });

    saveUsers(users);

    alert("Usuario registrado correctamente");
    window.location.href = "login.html";
}