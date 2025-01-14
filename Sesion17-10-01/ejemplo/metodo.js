const data = {
  posts: [
    {
      title: "Viernes de mimir",
      author: "C4",
      id: 4,
    },
  ],
};

fetch("http://localhost:3000/posts/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json", // Asegúrate de que 'Content-Type' esté correcto
  },
  body: JSON.stringify(data), // Convierte 'data' a una cadena JSON
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Convierte la respuesta en JSON
  })
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error); // Verifica el error en la consola
  });
