

  document.getElementById('menu-toggle').addEventListener('click', (event) => {
    const menuContent = document.getElementById('menu-content');
    
    
    

    menuContent.classList.toggle('hidden');
    event.stopPropagation(); // Evitar que el clic cierre el menú inmediatamente
  });

  // Cerrar el menú de registro y el menú de navegación si se hace clic fuera de ellos
  document.addEventListener('click', (event) => {
    const loginContent = document.getElementById('login-content');
    const menuContent = document.getElementById('menu-content');
    
    // Si clic en fuera de ambos menús, cerrarlos
    if (
      !menuContent.contains(event.target) &&
      !document.getElementById('menu-toggle').contains(event.target)
    ) {
      menuContent.classList.add('hidden');
    }
  });

  const inputDob = document.getElementById("fechaNacimiento");
  const today = new Date();
  const minAgeDate = new Date(today.setFullYear(today.getFullYear() - 18));
  const year = minAgeDate.getFullYear();
  const month = ("0" + (minAgeDate.getMonth() + 1)).slice(-2); // Mes en formato 2 dígitos
  const day = ("0" + minAgeDate.getDate()).slice(-2); // Día en formato 2 dígitos
  const formattedDate = `${year}-${month}-${day}`;
  inputDob.max = formattedDate;



  // Modal
      const termsLink = document.getElementById('terms-link');
      const termsModal = document.getElementById('terms-modal');
      const closeModal = document.getElementById('close-modal');
      const acceptCheckbox = document.getElementById('accept-terms');
      const submitButton = document.querySelector('button[type="submit"]');

      // Mostrar el modal cuando se haga clic en "términos y condiciones"
      termsLink.addEventListener('click', (e) => {
        e.preventDefault();
        termsModal.classList.remove('hidden');
      });

      // Cerrar el modal cuando se haga clic en "Cerrar"
      closeModal.addEventListener('click', () => {
        termsModal.classList.add('hidden');
      });

      // Habilitar el botón de envío si se aceptan los términos
      acceptCheckbox.addEventListener('change', () => {
        submitButton.disabled = !acceptCheckbox.checked;
      });

const form = document.getElementById("formu")

const Alldatos = (event ) => {
  event.preventDefault();

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;


  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden. Por favor, verifica nuevamente.");
    return; // Detener el flujo si las contraseñas no coinciden
  }


  // Verificar si los términos y condiciones están aceptados
  const acceptTerms = document.getElementById("accept-terms").checked;
  if (!acceptTerms) {
    alert("Debes aceptar los términos y condiciones para continuar.");
    return; // Detener el flujo si no se aceptan los términos
  }

  const datos = new FormData(event.target);
  const usuarios = Object.fromEntries(datos.entries());
  form.reset();
  console.log(usuarios)
  return usuarios;
}


const postData = async (nuevoUsuario) => {
    
    try{
        const response = await fetch ("https://json-server-1-m5tg.onrender.com/usuarios", {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(nuevoUsuario)
        });
        if(response.ok){
            const jsonResponse = await response.json();
            const {email, fechaNacimiento, name, password, phone} = jsonResponse 
            console.log("Usuario guardado", jsonResponse)
            
            window.location.href = "/index.html";
        }


    } catch(Error){
        console.log(Error)
    }
}
form.addEventListener("submit", (event)=>{
    const nuevoUsuario = Alldatos(event);
    if (nuevoUsuario){
        postData(nuevoUsuario)
        alert("¡Registro exitoso! Ahora serás redirigido a tu cuenta.");
    }
});