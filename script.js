const users = {
  "Carlos": { role: "admin", password: "CA1234", nombre: "Carlos", genero: "M" },
  "Laura": { role: "admin2", password: "LA5678", nombre: "Laura", genero: "F" },
  "Ana": { role: "consult", password: "AN2468", nombre: "Ana", genero: "F" },
  "Mario": { role: "consult", password: "MA1357", nombre: "Mario", genero: "M" },
  "Pablo": { role: "consult", password: "PA1122", nombre: "Pablo", genero: "M" },
  "Rosa": { role: "consult", password: "RO9988", nombre: "Rosa", genero: "F" },
  "Fernanda": { role: "admin", password: "FE0001", nombre: "Fernanda", genero: "F" }
};

// Lógica de login básica (puedes ajustar según necesidad)
document.addEventListener("DOMContentLoaded", function () {
  const usuarioNombre = localStorage.getItem("usuarioNombre");
  const usuarioGenero = localStorage.getItem("usuarioGenero");

  const loginScreen = document.getElementById("login-screen");
  const mainScreen = document.getElementById("main-screen");

  if (usuarioNombre && usuarioGenero) {
    // Mostrar la pantalla principal
    loginScreen.style.display = "none";
    mainScreen.style.display = "block";

    // Mostrar mensaje de bienvenida
    const saludo = usuarioGenero === "F" ? "Bienvenida" : "Bienvenido";
    document.getElementById("mensaje-bienvenida").textContent = `${saludo}, Ing. ${usuarioNombre}`;
  } else {
    // Mostrar login y ocultar pantalla principal
    loginScreen.style.display = "block";
    mainScreen.style.display = "none";
  }
});


// Toggle del menú desplegable
function toggleMenu() {
  const menu = document.getElementById("dropdown-menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Ocultar menú al hacer clic fuera
document.addEventListener("click", function(e) {
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
