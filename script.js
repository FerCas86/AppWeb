document.addEventListener("DOMContentLoaded", () => {
  // Manejo login y bienvenida
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

  function mostrarFormularioSubida() {
    const modal = document.getElementById("modal-subida");
    modal.style.display = "flex";
  }
  
  function cerrarModal() {
    const modal = document.getElementById("modal-subida");
    modal.style.display = "none";
  }
  
  // Listener para formulario subida
  document.addEventListener("DOMContentLoaded", () => {
    const uploadForm = document.getElementById("upload-form");
    if (uploadForm) {
      uploadForm.addEventListener("submit", function(e) {
        e.preventDefault();
  
        const categoria = document.getElementById("categoria").value.trim();
        const nombreArchivo = document.getElementById("nombre-archivo").value.trim();
        const archivo = document.getElementById("archivo").files[0];
  
        if (!categoria || !nombreArchivo || !archivo) {
          alert("Por favor completa todos los campos.");
          return;
        }
  
        // Aquí pondrías la lógica para subir el archivo (API, backend, etc)
        alert(`Archivo "${nombreArchivo}" en categoría "${categoria}" cargado correctamente (simulado).`);
  
        // Cerrar modal y resetear formulario
        cerrarModal();
        uploadForm.reset();
      });
    }
  });
  
  // Cerrar modal si se da click fuera del contenido
  window.onclick = function(event) {
    const modal = document.getElementById("modal-subida");
    if (event.target === modal) {
      cerrarModal();
    }
  };
});
