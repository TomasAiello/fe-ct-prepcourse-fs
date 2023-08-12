/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   var iguales=false;
   if (x==y){
      var iguales = true;
      return iguales;
   }
   else {
      return false;
   }

}

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
if (typeof str1 && typeof str2 === 'string' && str1.length == str2.length){
      return true;
   } 
else{
      return false;
   }; 
}


function menosQueNoventa(num) {
  if (num < 90) {
   return true;
  }
  else {
   return false;
  }
}

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if (num >50) {
      return true;
     }
     else {
      return false;
     }
}

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if (num%2 == 0){
      return true;
   }
   else {
      return false;
   }
}

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if (num%2 != 0){
      return true;
   }
   else {
      return false;
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
