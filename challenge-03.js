/* 
  El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱
  Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
  Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.
  ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. 
    Por suerte sólo los ha dejado en medio de los paréntesis...

    "bici coche (balón) bici coche peluche" // -> ✅
    "(muñeca) consola bici" // ✅

  Ejemplos:
    "bici coche (balón bici coche" // -> ❌
    "peluche (bici [coche) bici coche balón" // -> ❌
    "(peluche {) bici" // -> ❌
    "() bici" // ❌
    "(a() bici (a)" // ❌

  Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. 
  ¡Y acaba con la travesura del Grinch!
*/

const letter = "bici coche (()) bici coche peluche";

/**
 * @param {string} letter
 * @returns {boolean}
 */
export default function isValid(letter) {
  const lettersArray = [...letter];
  const openingParenthesisCount = lettersArray.filter((l) => l === "(").length;
  const closingParenthesisCount = lettersArray.filter((l) => l === ")").length;

  if (openingParenthesisCount !== closingParenthesisCount) {
    return false;
  }

  if (lettersArray.includes("(") && lettersArray.includes(")")) {
    const parenthesisStartIndex = lettersArray.indexOf("(");
    const parenthesisEndIndex = lettersArray.lastIndexOf(")");
    let validationArray = [];

    for (let i = parenthesisStartIndex + 1; i < parenthesisEndIndex; i++) {
      validationArray.push(lettersArray[i]);
    }

    validationArray = validationArray.filter((letter) => letter !== " ");
    console.log(validationArray);

    if (
      validationArray.length <= 2 ||
      validationArray.includes("[") ||
      validationArray.includes("{")
    ) {
      return false;
    }

    return true;
  }

  return false;
}
