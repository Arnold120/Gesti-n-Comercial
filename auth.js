function getUsers() {
    return JSON.parse(localStorage.getItem("usuarios")) || [];
}

function saveUsers(users) {
    localStorage.setItem("usuarios", JSON.stringify(users));
}

function login(email, password) {
    const users = getUsers();
    return users.find(u => u.email === email && u.password === password);
}