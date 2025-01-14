const formu = document.getElementById("formulary");
const boxTask = document.getElementById("boxTask");

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function loadTasks() {
  fetch("http://localhost:3000/posts")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((task) => addElementos(task)); 
    })
    .catch((error) => console.error("Error al cargar tareas desde el servidor:", error));
}

loadTasks();

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

formu.addEventListener("submit", (event) => {
  event.preventDefault();

  const task = document.getElementById("task").value.trim();

  if (task) {
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task, completed: false }), 
    })
      .then((response) => response.json())
      .then((data) => {
        const taskWithId = { id: data.id, task: data.task, completed: data.completed };
        tasks.push(taskWithId);
        saveTasks(tasks);
        addElementos(taskWithId);
      })
      .catch((error) => console.error("Error al agregar tarea al servidor:", error));
  } else {
    alert("Error. La tarea no se pudo realizar.");
  }

  document.getElementById("task").value = ""; 
});

function addElementos(taskWithId) {
  const div = document.createElement("div");
  div.classList.add("newTask");

  const completedClass = taskWithId.completed ? "completed" : "";

  div.innerHTML = `
    <div>
        <p class="${completedClass}">${taskWithId.task}</p>
    </div>
    <div>
        <button class="done">✔</button>
        <button class="delete">🗑️</button>
    </div>
  `;

  boxTask.appendChild(div);

  const deleteButton = div.querySelector(".delete");
  deleteButton.addEventListener("click", () => {
    const taskIndex = tasks.findIndex((task) => task.id === taskWithId.id);
    if (taskIndex > -1) {
      tasks.splice(taskIndex, 1); 
    }
    saveTasks(tasks);
    div.remove();

    fetch(`http://localhost:3000/posts/${taskWithId.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log("Tarea eliminada del servidor:", data))
      .catch((error) => console.error("Error al eliminar tarea del servidor:", error));
  });

  const doneButton = div.querySelector(".done");
  doneButton.addEventListener("click", () => {
    const taskText = div.querySelector("p");
    taskText.classList.toggle("completed");

    fetch(`http://localhost:3000/posts/${taskWithId.id}`, {
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !taskWithId.completed }), 
    })
      .then((response) => response.json())
      .then((data) => {
        taskWithId.completed = !taskWithId.completed;
      })
      .catch((error) => console.error("Error al actualizar tarea en el servidor:", error));
  });
}
