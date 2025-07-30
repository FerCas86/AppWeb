document.addEventListener("DOMContentLoaded", () => {
  // Manejo login y bienvenida
  const loginBtn = document.getElementById("login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username && password) {
        // Guardar datos en localStorage
        localStorage.setItem("usuarioNombre", username);
        localStorage.setItem("usuarioGenero", "M"); // o pedirlo en login

        // Mostrar pantalla principal
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
    location.reload(); // Volver a login
  };

  // Función para toggle menú
  window.toggleMenu = function () {
    const menu = document.getElementById("dropdown-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  };

  // Mostrar saludo y pantalla principal si hay sesión
  const usuarioNombre = localStorage.getItem("usuarioNombre");
  if (usuarioNombre) {
    const loginScreen = document.getElementById("login-screen");
    const mainScreen = document.getElementById("main-screen");
    if (loginScreen) loginScreen.style.display = "none";
    if (mainScreen) mainScreen.style.display = "block";

    const genero = localStorage.getItem("usuarioGenero") || "M";
    const saludo = genero === "F" ? "Bienvenida" : "Bienvenido";

    const mensajeBienvenida = document.getElementById("mensaje-bienvenida");
    if (mensajeBienvenida) {
      mensajeBienvenida.textContent = `${saludo}, Ing. ${usuarioNombre}`;
    }
  }

  // Archivos recientes desde localStorage
  const archivosRecientes = JSON.parse(localStorage.getItem("archivosRecientes")) || [];
  const listaArchivos = document.getElementById("lista-archivos");
  if (listaArchivos) {
    listaArchivos.innerHTML = ""; // limpiar lista

    archivosRecientes.forEach(nombre => {
      const li = document.createElement("li");
      li.classList.add("archivo-item");

      // Detectar tipo por extensión y asignar icono
      let icono = "📄";
      if (nombre.endsWith(".pdf")) icono = "📕";
      else if (nombre.endsWith(".doc") || nombre.endsWith(".docx")) icono = "📝";
      else if (nombre.endsWith(".xls") || nombre.endsWith(".xlsx")) icono = "📊";

      li.innerHTML = `${icono} <a href="#" onclick="verArchivo('${nombre}')">${nombre}</a>`;
      listaArchivos.appendChild(li);
    });
  }

  // Secciones usuario
  const seccionesUsuario = ["Facturación", "Proyectos", "Recursos Humanos"];
  const listaSecciones = document.getElementById("lista-secciones");
  if (listaSecciones) {
    listaSecciones.innerHTML = "";
    seccionesUsuario.forEach(seccion => {
      const li = document.createElement("li");
      li.textContent = seccion;
      listaSecciones.appendChild(li);
    });
  }

  // Modal (si tienes alguno, aquí funciones para abrir/cerrar)
  window.mostrarFormularioSubida = function () {
    const modal = document.getElementById("modal-subida");
    if (modal) modal.style.display = "flex";
  };

  window.cerrarModal = function () {
    const modal = document.getElementById("modal-subida");
    if (modal) modal.style.display = "none";
  };

  window.onclick = function(event) {
    const modal = document.getElementById("modal-subida");
    if (modal && event.target === modal) {
      cerrarModal();
    }
  };
});

// SUBIDA SIMULADA DE ARCHIVO (para formulario.html)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formularioSubida");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const archivoInput = document.getElementById("archivo");
      const archivo = archivoInput.files[0];

      if (!archivo) {
        alert("Por favor selecciona un archivo.");
        return;
      }

      // Guardar nombre del archivo en localStorage
      let archivos = JSON.parse(localStorage.getItem("archivosRecientes")) || [];
      archivos.unshift(archivo.name);
      archivos = archivos.slice(0, 10); // máximo 10 archivos
      localStorage.setItem("archivosRecientes", JSON.stringify(archivos));

      alert("Archivo simulado subido. Redirigiendo al inicio...");
      window.location.href = "index.html"; // Redirigir a index.html
    });
  }
});

// Función para simular vista previa
window.verArchivo = function(nombreArchivo) {
  const extension = nombreArchivo.split('.').pop().toLowerCase();
  let icono = '';
  switch (extension) {
    case 'pdf': icono = '📕'; break;
    case 'doc':
    case 'docx': icono = '📝'; break;
    case 'xls':
    case 'xlsx': icono = '📊'; break;
    default: icono = '📄';
  }
  alert(`🔍 Simulación: abriría "${nombreArchivo}" en visor correspondiente (${icono})`);
};
