const users = {
  "Carlos": { role: "admin", password: "CA1234" },
  "Laura": { role: "admin2", password: "LA5678" },
  "Ana": { role: "consult", password: "AN2468" },
  "Mario": { role: "consult", password: "MA1357" },
  "Pablo": { role: "consult", password: "PA1122" },
  "Rosa": { role: "consult", password: "RO9988" },
  "Fernanda": { role: "admin", password: "FE0001" }
};

// Lógica de login básica (puedes ajustar según necesidad)
document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-screen").style.display = "block";
    document.addEventListener("DOMContentLoaded", () => {
  const username = sessionStorage.getItem("username") || "Usuario";
  const userSpan = document.getElementById("user-name-header");
  if (userSpan) {
    userSpan.textContent = username;
  }
});
    document.getElementById("login-error").textContent = "Nombre o clave inválidos.";
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
