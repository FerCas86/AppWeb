const users = {
  "Carlos": { role: "admin", password: "CA1234", nombre: "Carlos", genero: "M" },
  "Laura": { role: "admin2", password: "LA5678", nombre: "Laura", genero: "F" },
  "Ana": { role: "consult", password: "AN2468", nombre: "Ana", genero: "F" },
  "Mario": { role: "consult", password: "MA1357", nombre: "Mario", genero: "M" },
  "Pablo": { role: "consult", password: "PA1122", nombre: "Pablo", genero: "M" },
  "Rosa": { role: "consult", password: "RO9988", nombre: "Rosa", genero: "F" },
  "Fernanda": { role: "admin", password: "FE0001", nombre: "Fernanda", genero: "F" }
};

// Mostrar pantalla correcta al cargar
document.addEventListener("DOMContentLoaded", function () {
  const nombre = localStorage.getItem("usuarioNombre");
  const genero = localStorage.getItem("usuarioGenero");

  if (nombre && genero) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-screen").style.display = "block";

    const saludo = genero === "F" ? "Bienvenida" : "Bienvenido";
    document.getElementById("mensaje-bienvenida").textContent = `${saludo}, Ing. ${nombre}`;
  } else {
    document.getElementById("login-screen").style.display = "block";
    document.getElementById("main-screen").style.display = "none";
  }
});

// Manejo del login
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const user = users[username];

  if (user && user.password === password) {
    localStorage.setItem("usuarioNombre", user.nombre);
    localStorage.setItem("usuarioGenero", user.genero);
    localStorage.setItem("usuarioRol", user.role);
    localStorage.setItem("usuarioUsuario", username);

    location.reload(); // Recargar para que se muestre la pantalla principal
  } else {
    document.getElementById("login-error").textContent = "Nombre o clave inválidos.";
  }
});

// Cierre de sesión
function cerrarSesion() {
  localStorage.clear();
  location.reload(); // Regresar al login
}

// Toggle del menú desplegable
function toggleMenu() {
  const menu = document.getElementById("dropdown-menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Ocultar menú al hacer clic fuera
document.addEventListener("click", function (e) {
  const menu = document.getElementById("dropdown-menu");
  const toggle = document.querySelector(".menu-toggle");
  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.style.display = "none";
  }
});

// Filtro de búsqueda en el menú
function filtrarMenu() {
  const input = document.getElementById("menu-search").value.toLowerCase();
  const items = document.querySelectorAll(".menu-item");
  items.forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(input) ? "block" : "none";
  });
}
