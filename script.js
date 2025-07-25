const users = {
  "Carlos": { role: "admin", password: "CA1234", nombre: "Carlos", genero: "M" },
  "Laura": { role: "admin2", password: "LA5678", nombre: "Laura", genero: "F" },
  "Ana": { role: "consult", password: "AN2468", nombre: "Ana", genero: "F" },
  "Mario": { role: "consult", password: "MA1357", nombre: "Mario", genero: "M" },
  "Pablo": { role: "consult", password: "PA1122", nombre: "Pablo", genero: "M" },
  "Rosa": { role: "consult", password: "RO9988", nombre: "Rosa", genero: "F" },
  "Fernanda": { role: "admin", password: "FE0001", nombre: "Fernanda", genero: "F" }
};

function login() {
  const usernameInput = document.getElementById("username").value.trim();
  const passwordInput = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("login-error");

  if (usernameInput in users) {
    if (users[usernameInput].password === passwordInput) {
      // Login correcto
      localStorage.setItem("usuarioNombre", users[usernameInput].nombre);
      localStorage.setItem("usuarioGenero", users[usernameInput].genero);
      localStorage.setItem("usuarioRole", users[usernameInput].role);

      // Mostrar pantalla principal y ocultar login
      document.getElementById("login-screen").style.display = "none";
      document.getElementById("main-screen").style.display = "block";

      // Saludo personalizado
      const saludo = users[usernameInput].genero === "F" ? "Bienvenida" : "Bienvenido";
      document.getElementById("mensaje-bienvenida").textContent = `${saludo}, Ing. ${users[usernameInput].nombre}`;

      // Ocultar mensaje error si estaba visible
      errorMsg.style.display = "none";
    } else {
      // Contraseña incorrecta
      errorMsg.style.display = "block";
      errorMsg.textContent = "Usuario o contraseña incorrectos";
    }
  } else {
    // Usuario no encontrado
    errorMsg.style.display = "block";
    errorMsg.textContent = "Usuario o contraseña incorrectos";
  }
}

// Opcional: para que si ya está logueado, muestre directamente la pantalla principal al cargar
document.addEventListener("DOMContentLoaded", () => {
  const usuarioNombre = localStorage.getItem("usuarioNombre");
  if (usuarioNombre) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-screen").style.display = "block";
    
    const genero = localStorage.getItem("usuarioGenero") || "M";
    const saludo = genero === "F" ? "Bienvenida" : "Bienvenido";
    document.getElementById("mensaje-bienvenida").textContent = `${saludo}, Ing. ${usuarioNombre}`;
  }
});

// Función para cerrar sesión
function cerrarSesion() {
  localStorage.clear();
  location.reload();
}

// Toggle menú (igual que ya tienes)
function toggleMenu() {
  const menu = document.getElementById("dropdown-menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Filtro menú (igual que ya tienes)
function filtrarMenu() {
  const input = document.getElementById("menu-search").value.toLowerCase();
  const items = document.querySelectorAll(".menu-item");
  items.forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(input) ? "block" : "none";
  });
}

// Ocultar menú al hacer clic fuera
document.addEventListener("click", function(e) {
  const menu = document.getElementById("dropdown-menu");
  const toggle = document.querySelector(".menu-toggle");
  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.style.display = "none";
  }
});

 function mostrarFormularioSubida() {
    const formulario = document.getElementById("formulario-subida");
    formulario.style.display = "block";
  }

  // Lógica de subida simulada
  document.addEventListener("DOMContentLoaded", function () {
    const uploadForm = document.getElementById("upload-form");
    if (uploadForm) {
      uploadForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const archivo = document.getElementById("archivo").files[0];
        if (archivo) {
          alert(`Archivo "${archivo.name}" cargado correctamente (simulado).`);
        } else {
          alert("Por favor selecciona un archivo.");
        }
      });
    }
  });

  // Datos simulados - puedes conectar esto con tu backend después
  const archivosRecientes = [
    "reporte_enero.pdf",
    "contrato_clienteA.docx",
    "cierre_trimestral.xlsx"
  ];
  
  const seccionesUsuario = [
    "Facturación",
    "Proyectos",
    "Recursos Humanos"
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    // ... Tu lógica actual de login y bienvenida
  
    const listaArchivos = document.getElementById("lista-archivos");
    archivosRecientes.forEach(archivo => {
      const li = document.createElement("li");
      li.textContent = archivo;
      listaArchivos.appendChild(li);
    });
  
    const listaSecciones = document.getElementById("lista-secciones");
    seccionesUsuario.forEach(seccion => {
      const li = document.createElement("li");
      li.textContent = seccion;
      listaSecciones.appendChild(li);
    });
  });
