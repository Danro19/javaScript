document.getElementById('login-toggle').addEventListener('click', (event) => {
  const loginContent = document.getElementById('login-content');
  const menuContent = document.getElementById('menu-content');

  if (menuContent && !menuContent.classList.contains('hidden')) {
    menuContent.classList.add('hidden');
  }

  if (loginContent) {
    loginContent.classList.toggle('hidden');
  }

  event.stopPropagation(); // Evitar que el clic cierre el menú inmediatamente
});

// Alternar el menú de navegación
document.getElementById('menu-toggle').addEventListener('click', (event) => {
  const menuContent = document.getElementById('menu-content');
  const loginContent = document.getElementById('login-content');

  if (loginContent && !loginContent.classList.contains('hidden')) {
    loginContent.classList.add('hidden');
  }

  if (menuContent) {
    menuContent.classList.toggle('hidden');
  }

  event.stopPropagation(); // Evitar que el clic cierre el menú inmediatamente
});

// Cerrar el menú de registro y el menú de navegación si se hace clic fuera de ellos
document.addEventListener('click', (event) => {
  const loginContent = document.getElementById('login-content');
  const menuContent = document.getElementById('menu-content');

  if (
    loginContent &&
    !loginContent.contains(event.target) &&
    !document.getElementById('login-toggle').contains(event.target)
  ) {
    loginContent.classList.add('hidden');
  }

  if (
    menuContent &&
    !menuContent.contains(event.target) &&
    !document.getElementById('menu-toggle').contains(event.target)
  ) {
    menuContent.classList.add('hidden');
  }
});



// Redirección al registro
document.getElementById('register-movile').addEventListener('click', () => {
  window.location.href = '/Page/registro.html';
});
document.getElementById('register-desktop').addEventListener('click', () => {
  window.location.href = '/Page/registro.html';
});

// Función de login
const login = async (email, password, modal) => {
  try {
    const response = await fetch('https://json-server-1-m5tg.onrender.com/usuarios');
    const users = await response.json();
    const user = users.find((u) => u.email === email);

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    if (user.password !== password) {
      throw new Error('Contraseña incorrecta');
    }

    alert('¡Ingreso exitoso!');
    modal.close();
    localStorage.setItem('user', JSON.stringify(user));
    window.location.reload();
    // Guardamos al usuario en el localStorage
  } catch (error) {
    document.getElementById('error-message').innerText = error.message;
    document.getElementById('error-message').style.display = 'block';
  }
};

// Modal móvil
const loginMovil = document.getElementById('open-login-modal');
const modalLogin = document.getElementById('modalLogin');

loginMovil.addEventListener('click', () => modalLogin.showModal());

modalLogin.addEventListener('click', (event) => {
  if (event.target === modalLogin) {
    modalLogin.close();
  }
});

// Enviar formulario de login móvil
document.getElementById('logMovil').addEventListener('submit', async function (e) {
  e.preventDefault();
  const email = document.getElementById('emailLogin').value;
  const password = document.getElementById('passwordLogin').value;
  await login(email, password, modalLogin);
});

// Modal escritorio
const loginDesktop = document.getElementById('open-login-modal-desktop');
const modalLoginDesktop = document.getElementById('modalLoginDesktop');

loginDesktop.addEventListener('click', () => modalLoginDesktop.showModal());

modalLoginDesktop.addEventListener('click', (event) => {
  if (event.target === modalLoginDesktop) {
    modalLoginDesktop.close();
  }
});

// Enviar formulario de login escritorio
document.getElementById('LoginDesktop').addEventListener('submit', async function (e) {
  e.preventDefault();
  const email = document.getElementById('emailLoginDesktop').value;
  const password = document.getElementById('passwordLoginDesktop').value;
  await login(email, password, modalLoginDesktop);

});

window.addEventListener("load", () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {

    // Si existe un usuario, mostrar su nombre
    const userMovil = document.getElementById("userMovil");
    const userDesktop = document.getElementById("userDesktop");
    userDesktop.innerHTML = `${user.name} <br><button id="salirD" class="bg-teal-700 text-white text-sm font-semibold py-1 px-3 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">Salir</button>`;
    userMovil.innerHTML = `${user.name} <br><button id="salirM" class="bg-teal-700 text-white text-sm font-semibold py-1 px-3 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">Salir</button>`;
    const salirM = document.getElementById("salirM");
    const salirD = document.getElementById("salirD");
    salirM.addEventListener("click", () => {
      localStorage.clear();  // Borra todos los datos del localStorage
      alert("Se ha cerrado sesión");
      window.location.reload();
    });
    salirD.addEventListener("click", () => {
      localStorage.clear();  // Borra todos los datos del localStorage
      alert("Se ha cerrado sesión");
      window.location.reload();

    })
  }
});


let tarjetaCuartos = document.getElementById("tarjetaCuartos");

fetch('https://json-server-1-m5tg.onrender.com/habitaciones')
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo obtener la respuesta de la API');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Aquí trabajamos con los datos de la API
    let habitaciones = data; // Usamos el primer objeto de la API que contiene las categorías
    



   // Función para crear las tarjetas de habitación
function crearModal(habitacion) {
  const modal = document.createElement("div");
  modal.className = "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
  modal.id = "modalReserva";

  const modalContent = document.createElement("div");
  modalContent.className = "bg-white p-6 rounded-lg shadow-lg max-w-md w-full";

  modalContent.innerHTML = `
    <h2 class="text-lg font-bold mb-4">Reservar: ${habitacion.nombre}</h2>
    <p class="text-sm mb-4">Capacidad: ${habitacion.cantPersonas} personas</p>
    <p class="text-sm mb-4">Precio por noche: $${habitacion.precio}</p>
    <form id="formReserva">
      <label class="block mb-2 text-sm font-bold">Fecha de Inicio:</label>
      <input type="date" id="fechaInicioModal" class="w-full p-2 border rounded-md mb-4" required />
      
      <label class="block mb-2 text-sm font-bold">Fecha de Fin:</label>
      <input type="date" id="fechaFinModal" class="w-full p-2 border rounded-md mb-4" required />
      
      <div class="flex justify-end gap-4">
        <button type="button" id="cerrarModal" class="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-700">Cancelar</button>
        <button type="submit" class="bg-teal-900 text-white py-2 px-4 rounded-md hover:bg-teal-700">Confirmar</button>
      </div>
    </form>
  `;

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Configurar fechas mínimas en los inputs
  const idHabitacion = habitacion.id;
  const fechaInicioInput = document.getElementById("fechaInicioModal");
  const fechaFinInput = document.getElementById("fechaFinModal");
  const hoy = new Date().toISOString().split("T")[0];
  fechaInicioInput.setAttribute("min", hoy);

  fechaInicioInput.addEventListener("change", () => {
    if (fechaInicioInput.value) {
      fechaFinInput.setAttribute("min", fechaInicioInput.value);
    } else {
      fechaFinInput.setAttribute("min", hoy);
    }
  });

  // Cerrar el modal al hacer clic en "Cancelar"
  document.getElementById("cerrarModal").addEventListener("click", () => {
    document.body.removeChild(modal);
  });

  // Manejar el formulario de reserva
  document.getElementById("formReserva").addEventListener("submit", async (e) => {
    e.preventDefault();
    const fechaInicio = fechaInicioInput.value;
    const fechaFin = fechaFinInput.value;
  
    if (!fechaInicio || !fechaFin) {
      alert("Por favor, selecciona las fechas.");
      return;
    }
  
    if (new Date(fechaFin) < new Date(fechaInicio)) {
      alert("La fecha de fin no puede ser anterior a la fecha de inicio.");
      return;
    }
  
    // Obtener el usuario del localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("No se encontró el usuario. Por favor, inicia sesión.");
      return;
    }
  
    // Realizar la solicitud PATCH a la API para actualizar la habitación
    try {
      const response = await fetch(`https://json-server-1-m5tg.onrender.com/habitaciones/${idHabitacion}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fechaReserva: [[fechaInicio, fechaFin]],
          reserva: false, // Asegúrate de que esto es lo que necesitas
        }),
      });
  
      if (!response.ok) {
        throw new Error("Error al actualizar la reserva.");
      }
  
      // Mostrar la respuesta de la API en consola para ver el estado
      const habitacionActualizada = await response.json();
      console.log(habitacionActualizada);
  
      // Actualizar la información del usuario con la reserva
      const userUpdateResponse = await fetch(`https://json-server-1-m5tg.onrender.com/usuarios/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reservas: [...(user.reservas || []), idHabitacion], // Agregar idHabitacion al array de reservas
          fechaReservaUsuario: [...(user.fechaReservaUsuario || []), [fechaInicio, fechaFin]], // Agregar las fechas
        }),
      });
  
      if (!userUpdateResponse.ok) {
        throw new Error("Error al actualizar las reservas del usuario.");
      }
  
      console.log(await userUpdateResponse.json());
  
      // Informar al usuario
      alert(`Reserva confirmada para ${habitacionActualizada.nombre} del ${fechaInicio} al ${fechaFin}.
        *IMPORTANTE Check-in/check-out*: La hora de Check-in de las habitaciones será a las 14:00 del día. Si el usuario no hace efectiva la reserva dos horas después de que inicie el check in (16:00), la habitación
        quedará disponible para que otra persona la pueda tomar.`);
  
      // Cerrar el modal sin actualizar la página
      document.body.removeChild(modal);
  
    } catch (error) {
      alert("Hubo un error al procesar la reserva. Inténtalo de nuevo más tarde.");
      console.error(error);
    }
  });
}

    
    // Modificar renderHabitaciones para usar el modal
    function renderHabitaciones(habitaciones) {
      tarjetaCuartos.innerHTML = ''; // Limpiar tarjetas previas
    
      habitaciones.forEach(habitacion => {
        const card = document.createElement("div");
        card.className = "flex bg-white shadow-lg rounded-lg overflow-hidden mb-4";
    
        card.innerHTML = `
          <div class="flex flex-col md:flex-row gap-4 p-2.5">
            <div id="carruselHabitacion" class="flex-shrink-0 flex md:w-1/3">
              <img src="${habitacion.imagenes[0]}" 
                   alt="${habitacion.nombre}"
                   class="w-full h-auto object-cover mb-4 md:mb-0"
              />
            </div>
            <div class="flex flex-col md:flex-grow md:justify-between">
              <div>
                <h3 class="text-lg font-bold">${habitacion.nombre}</h3>
                <p class="text-sm text-gray-600">${habitacion.descripcion}</p>
                <ul class="text-sm text-gray-700 space-y-1 mt-2">
                  <li>#️⃣ Numero de Cuarto: ${habitacion.id}</li>
                  <li>👥 Capacidad: ${habitacion.cantPersonas} personas</li>
                  <li>💻 Internet: ${habitacion.internet ? "Sí" : "No"}</li>
                  <li>🍹 Minibar: ${habitacion.minibar ? "Sí" : "No"}</li>
                  <li>🛁 Jacuzzi: ${habitacion.jacuzzi ? "Sí" : "No"}</li>
                  <li>🛏️ Tipo de Cuarto: ${habitacion.tipoRoom}</li>
                </ul>
              </div>
              <div class="flex flex-col mt-4 md:mt-0">
                <p class="text-lg font-bold text-teal-900">$${habitacion.precio} por noche</p>
                <button class="bg-teal-900 text-white py-2 px-4 rounded-md hover:bg-teal-700 mt-2 md:mt-0 btn-reserva">Reservar</button>
              </div>
            </div>
          </div>
        `;
    
        tarjetaCuartos.appendChild(card);
    
        // Agregar evento al botón "Reservar"
        card.querySelector(".btn-reserva").addEventListener("click", () => {
          const user = JSON.parse(localStorage.getItem("user"));
          if (user) {
            crearModal(habitacion);
          } else {
            alert("Debes iniciar sesión para reservar");
          }
        });
      });
    }
    
    // Cargar habitaciones y mostrarlas sin necesidad de aplicar filtros
    fetch('https://json-server-1-m5tg.onrender.com/habitaciones')
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo obtener la respuesta de la API');
        }
        return response.json();
      })
      .then(data => {
        renderHabitaciones(data);  // Llama a renderHabitaciones directamente
      })
      .catch(error => {
        console.error("Error al obtener las habitaciones:", error);
      });




      function validarFechas() {
        const fechaInicio = document.getElementById("fechaInicio");
        const fechaFin = document.getElementById("fechaFin");
      
        // Obtener la fecha de hoy en formato YYYY-MM-DD
        const hoy = new Date().toISOString().split("T")[0];
      
        // Establecer la fecha de hoy como valor predeterminado para fechaInicio
        fechaInicio.value = hoy;
        fechaInicio.setAttribute("min", hoy); // Configurar el mínimo como hoy
      
        // Escuchar cambios en la fecha de inicio
        fechaInicio.addEventListener("change", () => {
          if (fechaInicio.value) {
            fechaFin.setAttribute("min", fechaInicio.value); // Ajustar el mínimo de fecha fin
          } else {
            fechaFin.setAttribute("min", hoy); // Si no hay fecha de inicio, usar hoy como mínimo
          }
        });
      
        // Validar que la fecha de fin sea mayor o igual a la fecha de inicio
        fechaFin.addEventListener("change", () => {
          if (
            fechaFin.value &&
            fechaInicio.value &&
            new Date(fechaFin.value) < new Date(fechaInicio.value)
          ) {
            alert("La fecha de fin no puede ser anterior a la fecha de inicio.");
            fechaFin.value = ""; // Reiniciar fecha de fin
          }
        });
      }
    
    // Función de filtro de habitaciones
    function filtrarHabitaciones() {
      // Aquí ya no necesitas ejecutar renderHabitaciones si no se aplican filtros
      const tipoCuarto = document.getElementById("tipoCuarto").value;
      const capacidad = document.getElementById("capacidad").value;
      const precio = document.getElementById("precio").value;
      const fechaInicioUsuario = document.getElementById("fechaInicio").value;
      const fechaFinUsuario = document.getElementById("fechaFin").value;
    
      let habitacionesFiltradas = [];
    
      // Convertir fechas de usuario a objetos Date
      const inicioUsuario = fechaInicioUsuario ? new Date(fechaInicioUsuario) : null;
      const finUsuario = fechaFinUsuario ? new Date(fechaFinUsuario) : null;
    
      // Filtrar habitaciones
      habitaciones.forEach((habitacion) => {
        let match = true;
    
        // Mostrar solo los disponibles
        if (habitacion.reserva !== true) {
          match = false;
        }
    
        // Filtrar por tipo de cuarto
        if (tipoCuarto && habitacion.tipoRoom !== tipoCuarto) {
          match = false;
        }
    
        // Filtrar por capacidad
        if (capacidad && habitacion.cantPersonas != capacidad) {
          match = false;
        }
    
        // Filtrar por rango de fechas
        if (inicioUsuario && finUsuario) {
          const reservas = habitacion.fechaReserva;
    
          // Verificar si las fechas se solapan con alguna reserva
          const hayConflicto = reservas.some((rango) => {
            const inicioReserva = new Date(rango[0]);
            const finReserva = new Date(rango[1]);
    
            // Detectar conflictos de rango
            return (
              (inicioUsuario <= finReserva && inicioUsuario >= inicioReserva) ||
              (finUsuario <= finReserva && finUsuario >= inicioReserva) ||
              (inicioUsuario <= inicioReserva && finUsuario >= finReserva)
            );
          });
    
          if (hayConflicto) {
            match = false;
          }
        }
    
        if (match) {
          habitacionesFiltradas.push(habitacion);
        }
      });
    
      // Ordenar por precio
      if (precio === "asc") {
        habitacionesFiltradas.sort((a, b) => a.precio - b.precio);
      } else if (precio === "desc") {
        habitacionesFiltradas.sort((a, b) => b.precio - a.precio);
      }
      validarFechas();
      renderHabitaciones(habitacionesFiltradas); // Renderizar habitaciones filtradas
    }
    
    // Llamar a filtrarHabitaciones si el usuario aplica un filtro
    document
      .querySelectorAll(".filters select, .filters input[type='date']")
      .forEach((input) => {
        input.addEventListener("change", filtrarHabitaciones);
      });
  })

  document.addEventListener("DOMContentLoaded", () => {
    const reservasBoton = document.getElementById("reservas-boton");
    const reservasModal = document.getElementById("reservas-modal");
    const cerrarModal = document.getElementById("cerrar-modal");
    const reservasLista = document.getElementById("reservas-lista");
  
    // Abrir el modal al hacer clic en el botón
    reservasBoton.addEventListener("click", async () => {
      try {
        // Obtener el usuario desde el localStorage para usar su ID
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
          alert("No se encontró el usuario. Por favor, inicia sesión.");
          return;
        }
  
        // Consultar al API para obtener los datos actualizados del usuario
        const response = await fetch(`https://json-server-1-m5tg.onrender.com/usuarios/${user.id}`);
        if (!response.ok) {
          throw new Error("Error al obtener los datos del usuario.");
        }
  
        const usuarioActualizado = await response.json();
  
        // Limpiar la lista de reservas antes de llenarla
        reservasLista.innerHTML = "";
  
        // Crear elementos de la lista con las reservas
        usuarioActualizado.reservas.forEach((habitacionId, index) => {
          const li = document.createElement("li");
          li.classList.add("flex", "justify-between", "items-center");
  
          // Mostrar la información de la reserva
          li.innerHTML = `
            <span>Habitación ${habitacionId}: ${usuarioActualizado.fechaReservaUsuario[index].join(" al ")}</span>
            <button data-index="${index}" class="bg-red-500 text-white px-2 py-1 rounded-md text-sm eliminar-reserva">
              Cancelar Reservacion
            </button>
          `;
  
          reservasLista.appendChild(li);
        });
  
        reservasModal.classList.remove("hidden");
      } catch (error) {
        console.error(error);
        alert("No se pudieron cargar las reservas. Intenta de nuevo más tarde.");
      }
    });
  
    // Cerrar el modal
    cerrarModal.addEventListener("click", () => {
      reservasModal.classList.add("hidden");
    });
  
    // Eliminar una reserva
    reservasLista.addEventListener("click", async (e) => {
      if (e.target.classList.contains("eliminar-reserva")) {
        try {
          // Obtener el índice de la reserva seleccionada
          const index = e.target.getAttribute("data-index");
  
          // Obtener el usuario desde el localStorage para usar su ID
          const user = JSON.parse(localStorage.getItem("user"));
          if (!user) {
            alert("No se encontró el usuario. Por favor, inicia sesión.");
            return;
          }
  
          // Consultar al API para obtener los datos actualizados del usuario
          const response = await fetch(`https://json-server-1-m5tg.onrender.com/usuarios/${user.id}`);
          if (!response.ok) {
            throw new Error("Error al obtener los datos del usuario.");
          }
  
          const usuarioActualizado = await response.json();
  
          // Actualizar las reservas y las fechas en el usuario
          usuarioActualizado.reservas.splice(index, 1);
          usuarioActualizado.fechaReservaUsuario.splice(index, 1);
  
          // Enviar los datos actualizados al API
          const updateResponse = await fetch(`https://json-server-1-m5tg.onrender.com/usuarios/${user.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              reservas: usuarioActualizado.reservas,
              fechaReservaUsuario: usuarioActualizado.fechaReservaUsuario,
            }),
          });
  
          if (!updateResponse.ok) {
            throw new Error("Error al actualizar las reservas del usuario.");
          }
  
          // Actualizar la lista de reservas en el modal
          e.target.parentElement.remove();
          alert("Reserva eliminada exitosamente.");
        } catch (error) {
          console.error(error);
          alert("No se pudo eliminar la reserva. Intenta de nuevo más tarde.");
        }
      }
    });
  });
  