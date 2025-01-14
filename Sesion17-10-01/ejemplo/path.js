const data = {

      author: "V-10",
    };

fetch("http://localhost:3000/posts/4", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => console.log("Success: ", data))
  .catch((error) => console.error("Error: ", error));
