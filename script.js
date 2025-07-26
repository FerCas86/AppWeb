document.addEventListener("DOMContentLoaded", () => {
  // Manejo login y bienvenida

  const loginBtn = document.getElementById("login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
  
      if (username && password) {
        // Puedes agregar validación real aquí si quieres
        localStorage.setItem("usuarioNombre", username);
        localStorage.setItem("usuarioGenero", "M"); // o puedes pedirlo en el login más adelante
  
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("main-screen").style.display = "block";
  
        document.getElementById("mensaje-bienvenida").textContent = `Bienvenido, Ing. ${username}`;
      } else {
        document.getElementById("login-error").style.display = "block";
      }
    });
  }

  // Función para cerrar sesión
  window.cerrarSesion = function () {
    localStorage.clear();
    location.reload(); // Recarga la página para regresar al login
  };

  // Función para abrir/cerrar el menú desplegable
  window.toggleMenu = function () {
    const menu = document.getElementById("dropdown-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  };
  
  const usuarioNombre = localStorage.getItem("usuarioNombre");
  if (usuarioNombre) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-screen").style.display = "block";

    const genero = localStorage.getItem("usuarioGenero") || "M";
    const saludo = genero === "F" ? "Bienvenida" : "Bienvenido";
    document.getElementById("mensaje-bienvenida").textContent = `${saludo}, Ing. ${usuarioNombre}`;
  }

  // Archivos recientes
  const archivosRecientes = [
    "reporte_enero.pdf",
    "contrato_clienteA.docx",
    "cierre_trimestral.xlsx"
  ];

  const listaArchivos = document.getElementById("lista-archivos");
  if (listaArchivos) {
    archivosRecientes.forEach(archivo => {
      const li = document.createElement("li");
      li.textContent = archivo;
      listaArchivos.appendChild(li);
    });
  }

  // Secciones usuario
  const seccionesUsuario = [
    "Facturación",
    "Proyectos",
    "Recursos Humanos"
  ];

  const listaSecciones = document.getElementById("lista-secciones");
  if (listaSecciones) {
    seccionesUsuario.forEach(seccion => {
      const li = document.createElement("li");
      li.textContent = seccion;
      listaSecciones.appendChild(li);
    });
  }

  // Funciones para mostrar y cerrar modal
  window.mostrarFormularioSubida = function () {
    const modal = document.getElementById("modal-subida");
    modal.style.display = "flex";
  };

  window.cerrarModal = function () {
    const modal = document.getElementById("modal-subida");
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    const modal = document.getElementById("modal-subida");
    if (event.target === modal) {
      cerrarModal();
    }
  };

  // Cerrar modal si se da click fuera del contenido
  window.onclick = function(event) {
    const modal = document.getElementById("modal-subida");
    if (event.target === modal) {
      cerrarModal();
    }
  };
});

// --- Envío del formulario de subida ---
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formularioSubida");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("📨 Formulario enviado (simulado)");
      window.location.href = "gracias.html"; // o quita esta línea si no tienes esa página
    });
  }
});

