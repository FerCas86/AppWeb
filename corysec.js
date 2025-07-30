const datosUsuario = {
  coordinaciones: {
    "01 Baja California": {
      secciones: {
        "05 Mexicali": {
          titulares: {
            "Secretario General": "Luis Hernández",
            "Secretario de Trabajo": "Ana López",
            "Secretario de Organización": "Carlos Ruiz"
          }
        },
        "07 Tijuana": {
          titulares: {
            "Secretario General": "Marta Gómez",
            "Secretario de Trabajo": "Julio Rivera",
            "Secretario de Organización": "Paola Márquez"
          }
        },
        "09 Ensenada": {
          titulares: {
            "Secretario General": "Fernando Ramírez",
            "Secretario de Trabajo": "Luisa Ortega",
            "Secretario de Organización": "Iván Jiménez"
          }
        }
      }
    },
    "02 Baja California Sur": {
      secciones: {
        "10 La Paz": {
          titulares: {
            "Secretario General": "Valeria Robles",
            "Secretario de Trabajo": "Eduardo Méndez",
            "Secretario de Organización": "Diana Paredes"
          }
        }
      }
    }
  }
};

function toggleMenuCoordinaciones() {
  const lista = document.getElementById("lista-coordinaciones");
  lista.style.display = lista.style.display === "none" ? "block" : "none";

  if (!lista.hasChildNodes()) {
    Object.entries(datosUsuario.coordinaciones).forEach(([nombreCoord, dataCoord]) => {
      const liCoord = document.createElement("li");
      liCoord.innerHTML = `<strong onclick="toggleSecciones(this)">${nombreCoord} ⏷</strong>`;

      const ulSecciones = document.createElement("ul");
      ulSecciones.style.display = "none";

      Object.entries(dataCoord.secciones).forEach(([nombreSeccion, datosSeccion]) => {
        const liSeccion = document.createElement("li");
        liSeccion.innerHTML = `<span onclick="mostrarTitulares(this)">${nombreSeccion} 📁</span>`;

        const ulTitulares = document.createElement("ul");
        ulTitulares.style.display = "none";

        Object.entries(datosSeccion.titulares).forEach(([cargo, nombre]) => {
          const liTitular = document.createElement("li");
          liTitular.textContent = `${cargo}: ${nombre}`;
          ulTitulares.appendChild(liTitular);
        });

        liSeccion.appendChild(ulTitulares);
        ulSecciones.appendChild(liSeccion);
      });

      liCoord.appendChild(ulSecciones);
      lista.appendChild(liCoord);
    });
  }
}

function toggleSecciones(element) {
  const subLista = element.nextElementSibling;
  if (subLista) {
    subLista.style.display = subLista.style.display === "none" ? "block" : "none";
  }
}

function mostrarTitulares(element) {
  const subLista = element.nextElementSibling;
  if (subLista) {
    subLista.style.display = subLista.style.display === "none" ? "block" : "none";
  }
}
