function myDisplayer(some){
    console.log(some);
}

function esPar(num){
    return num % 2 == 0;
}


function esprimo(num) {
    console.log('  ${num} es un numero primo. ');
}

// Simulemos que se consulta la pagina de antescedentes de la policia. esta requiere el num de identificacion y nos devuelve si la persona con ese numero de identificacion, tiene antescedentes o no.
const consultarPolicia = (callback) => {
    setTimeout(()=> {
        const segDesde1970= Math.floor(Date.now()/1000)
        if (!callback(segDesde1970)){
            console.log("No tiene antescedentes")
        } else {
            console.log("Tiene antescedentes")
        }
    },2000);
}


function myCalculator(num1, num2, funcallback){
    let sum = num1+num2;
    funcallback(sum);}

myCalculator(5, 5, myDisplayer);
myCalculator(5, 5, esprimo);

consultarPolicia(myDisplayer);
consultarPolicia(esprimo);
let tiempo = 3;
for(let i=1; i< 7; i++){
    
    setTimeout (i=> {
        console.log("Ejecucion: " + i)
        consultarPolicia(esPar)
    }, tiempo++ * 1000);
}