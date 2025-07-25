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

  // Lógica subida simulada formulario
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
