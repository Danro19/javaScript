const miPromesa = new Promise ( (resolve, reject) => {
    const exito = true;
    if (exito){
        console.log("Esperando ...")
        setTimeout (() => {
            resolve("Valor que devuelve la promesa");
        }, 2000);
    } else {
        reject("Hubo un error en la operacion")
    }
});


miPromesa
    .then( res => {
        console.warn("No hubo error en la promesa");
        console.log(res)
    })
    .catch(res => {
        console.error("Error en la promesa");
        console.log(res)
    })