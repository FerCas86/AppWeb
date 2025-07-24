const users = {
  "Carlos": { role: "admin", password: "CA1234", nombre: "Carlos", genero: "M" },
  "Laura": { role: "admin2", password: "LA5678", nombre: "Laura", genero: "F" },
  "Ana": { role: "consult", password: "AN2468", nombre: "Ana", genero: "F" },
  "Mario": { role: "consult", password: "MA1357", nombre: "Mario", genero: "M" },
  "Pablo": { role: "consult", password: "PA1122", nombre: "Pablo", genero: "M" },
  "Rosa": { role: "consult", password: "RO9988", nombre: "Rosa", genero: "F" },
  "Fernanda": { role: "admin", password: "FE0001", nombre: "Fernanda", genero: "F" }
};

document.addEventListener("DOMContentLoaded", function () {
  const usuarioNombre = localStorage.getItem("usuarioNombre");
  const genero = localStorage.getItem("usuarioGenero") || "M";

  const loginScreen = document.getElementById("login-screen");
  const mainScreen = document.getElementById("main-screen");

  if (usuarioNombre) {
    loginScreen.style.display = "none";
    mainScreen.style.display = "block";

    const saludo = genero === "F" ? "Bienvenida" : "Bienvenido";
    document.getElementById("mensaje-bienvenida").textContent = `${saludo}, Ing. ${usuarioNombre}`;
  } else {
    loginScreen.style.display = "block";
    mainScreen.style.display = "none";
  }

  // LOGIN
  function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    const user = users[username];
    if (user && user.password === password) {
      localStorage.setItem("usuarioNombre", user.nombre);
      localStorage.setItem("usuarioGenero", user.genero);
  
      document.getElementById("login-screen").style.display = "none";
      document.getElementById("main-screen").style.display = "block";
    } else {
      document.getElementById("login-error").style.display = "block";
    }
  }

// CERRAR SESIÓN
function cerrarSesion() {
  localStorage.clear();
  location.reload();
}

// MENÚ
function toggleMenu() {
  const menu = document.getElementById("dropdown-menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

document.addEventListener("click", function(e) {
  const menu = document.getElementById("dropdown-menu");
  const toggle = document.querySelector(".menu-toggle");
  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.style.display = "none";
  }
});

// FILTRO
function filtrarMenu() {
  const input = document.getElementById("menu-search").value.toLowerCase();
  const items = document.querySelectorAll(".menu-item");
  items.forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(input) ? "block" : "none";
  });
}
