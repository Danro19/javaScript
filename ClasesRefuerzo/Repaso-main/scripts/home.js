document.addEventListener("DOMContentLoaded", () => {
  // Aquí va tu código




//carrucel uno
const carouselContainerUno = document.getElementById("carousel-container");
const leftButtonUno = document.getElementById("left");
const rightButtonUno = document.getElementById("right");
const itemsUno = document.querySelectorAll(".uno");
const itemWidthUno = carouselContainerUno.offsetWidth;
let currentIndexUno = 0;

function updateCarouselUno() {
  carouselContainerUno.scrollTo({
    left: currentIndexUno * itemWidthUno,
    behavior: "smooth",
  });
}

leftButtonUno.addEventListener("click", () => {
  currentIndexUno = (currentIndexUno - 1 + itemsUno.length) % itemsUno.length;
  updateCarouselUno();
});

rightButtonUno.addEventListener("click", () => {
  currentIndexUno = (currentIndexUno + 1) % itemsUno.length;
  updateCarouselUno();
});

setInterval(() => {
  currentIndexUno = (currentIndexUno + 1) % itemsUno.length;
  updateCarouselUno();
}, 3000);

//carrusel dos
const carouselContainerDos = document.getElementById("carousel-containerDos");
const leftButtonDos = document.getElementById("leftDos");
const rightButtonDos = document.getElementById("rightDos");
const itemsDos = document.querySelectorAll(".Dos");
const itemWidthDos = carouselContainerDos.offsetWidth;
let currentIndexDos = 0;
function updateCarouselDos() {
  carouselContainerDos.scrollTo({
    left: currentIndexDos * itemWidthDos,
    behavior: "smooth",
  });
}

leftButtonDos.addEventListener("click", () => {
  currentIndexDos = (currentIndexDos - 1 + itemsDos.length) % itemsDos.length;
  updateCarouselDos();
});

rightButtonDos.addEventListener("click", () => {
  currentIndexDos = (currentIndexDos + 1) % itemsDos.length;
  updateCarouselDos();
});

setInterval(() => {
  currentIndexDos = (currentIndexDos + 1) % itemsDos.length;
  updateCarouselDos();
}, 3000);



// Carrusel principal
const carouselContainer = document.querySelector(".carousel-container");
const leftButton = document.getElementById("zeroLeft");
const rightButton = document.getElementById("zeroRight");
const items = document.querySelectorAll(".carousel-item");

// Variables globales
const itemWidth = carouselContainer.offsetWidth;
let currentIndex = 0;
let isScrolling = false; // Bandera para evitar conflictos entre el intervalo y los clics

// Función para actualizar el carrusel
function updateCarousel() {
  carouselContainer.scrollTo({
    left: currentIndex * itemWidth,
    behavior: "smooth",
  });
}

leftButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

rightButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}, 3000);
function updateCarousel() {
  carouselContainer.scrollTo({
    left: currentIndex * itemWidth,
    behavior: "smooth",
  });
}





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


  

  document.getElementById("register-movile").addEventListener("click", () => {
    // Redirigir a la página de registro
    window.location.href = "/Page/registro.html"; // Reemplaza con la URL de la página de registro
  });
  document.getElementById("register-desktop").addEventListener("click", () => {
    // Redirigir a la página de registro
    window.location.href = "/Page/registro.html"; // Reemplaza con la URL de la página de registro
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
  }});

});


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
