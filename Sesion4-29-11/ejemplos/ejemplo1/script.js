


while(menu !== 5); {
  let menu = Number(
    prompt(`*** MENU ***
    1. Agregar un producto
    2. Eliminar un producto
    3. Mostrar el inventario
    4. Buscar producto
    5. Salir
    (Escoja una opcion de 1 al 5)`)
  );
  if (menu === 1) {
      
      let nombre = prompt("Ingrese el nombre del producto");
      let precio = Number(prompt("Ingrese el precio"));
      let cantidad = Number(prompt("Ingrese la cantidad"));

      let inventario = {};
      inventario.producto = [nombre, precio, cantidad];
      
    }

  if (menu === 3) {
    console.log(
      "Nombre Producto \t\t  Precio \t\t Cantidad",
      "\n",

      String(inventario.objeto1).replace(",", "  "),
      "\n"
    );
  }
} 