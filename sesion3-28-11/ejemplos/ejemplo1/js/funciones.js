//FUNCIONES NOMBRADAS
function palindrome (cad) {
    
    let lcad = cad.length - 1;
    for (let i = 0; i <= lcad; i++) {
      let lini = cad[i];
      let lfin = cad[lcad - i];

      if (lini !== lfin) {
        espal = false;
        return false
      }
    }
    return true
}

let cad = "reconocer";
console.log((palindrome(cad) ? "Es" : "No es") + " palindrome.");


//FUNCIONES EXPRESIVAS


const funAnonima = function (cad) {
  let lcad = cad.length - 1;
  for (let i = 0; i <= lcad; i++) {
    let lini = cad[i];
    let lfin = cad[lcad - i];

    if (lini !== lfin) {
      espal = false;
      return false;
    }
  }
  return true;
};
console.log(funAnonima("reconocer") ? "Es palindrome" : "No es palindrome.");


const funcFlecha = (cad) => {
  let lcad = cad.length - 1;
  for (let i = 0; i <= lcad; i++) {
    let lini = cad[i];
    let lfin = cad[lcad - i];

    if (lini !== lfin) {
      espal = false;
      return false;
    }
  }
  return true;
};
console.log(funcFlecha("reconocer") ? "Es palindrome" : "No es palindrome.");


const msgPalindrome = (cad) =>
  funcFlecha(cad) ? "Es palindrome" : "No es palindrome.";

console.log(msgPalindrome("reconocer"))