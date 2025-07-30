// Estructura de coordinaciones, secciones y titulares
const datosCoordinaciones = {
  "01 Baja California": {
    secciones: {
      "05 Mexicali": {
        "Secretario General": "Juan Pérez",
        "Trabajo": "Ana Gómez",
        "Organización": "Luis Ramírez"
      },
      "07 Tijuana": {
        "Secretario General": "Carlos Ruiz",
        "Trabajo": "Laura Méndez",
        "Organización": "Pedro Torres"
      },
      "09 Ensenada": {
        "Secretario General": "María López",
        "Trabajo": "José Hernández",
        "Organización": "Carmen Ríos"
      }
    },
    usuarios: ["usuario01", "admin"]
  },
  "02 Baja California Sur": {
    secciones: {
      "12 La Paz": {
        "Secretario General": "Andrés Martínez",
        "Trabajo": "Luz Herrera",
        "Organización": "Victor Peña"
      }
    },
    usuarios: ["usuario02", "admin"]
  }
};

// Función que se ejecuta automáticamente al cargar
document.addEventListener("DOMContentLoaded", () => {
  const usuario = localStorage.getItem("usuarioNombre") || "admin";
  const contenedor = document.getElementById("contenedor-corysec");

  for (const [coordinacion, info] of Object.entries(datosCoordinaciones)) {
    if (!info.usuarios.includes(usuario)) continue;

    const coordDiv = document.createElement("div");
    coordDiv.className = "coordinacion";
    coordDiv.innerHTML = `<h3>${coordinacion}</h3>`;

    for (const [seccion, titulares] of Object.entries(info.secciones)) {
      const secDiv = document.createElement("div");
      secDiv.className = "seccion";
      secDiv.innerHTML = `<h4>📍 ${seccion}</h4>`;

      const lista = document.createElement("ul");
      for (const [cargo, nombre] of Object.entries(titulares)) {
        const item = document.createElement("li");
        item.textContent = `${cargo}: ${nombre}`;
        lista.appendChild(item);
      }

      secDiv.appendChild(lista);
      coordDiv.appendChild(secDiv);
    }

    contenedor.appendChild(coordDiv);
  }
});
