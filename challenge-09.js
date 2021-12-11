/* 
  En la fábrica de Papa Noél 🎅 se acerca el día especial... y todavía tenemos un montón de cosas por contar. 😅
  Por suerte a Mark Zucktheelf 🧝 se le ha ocurrido crear una función que permita agrupar un array, 
  que puede ser de valores u objetos, a través de una función o de una propiedad.
  Nos trae un montón de ejemplos:

    groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
    groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
    groupBy([{age: 23}, {age: 24}], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }

    groupBy(
      [1397639141184, 1363223700000],
      timestamp => new Date(timestamp).getFullYear()
    )
    // { 2013: [1363223700000], 2014: [1397639141184] }

    groupBy([
      { title: 'JavaScript: The Good Parts', rating: 8 },
      { title: 'Aprendiendo Git', rating: 10 },
      { title: 'Clean Code', rating: 9 },
    ], 'rating')
    // { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
    //   9: [{ title: 'Clean Code', rating: 9 }],
    //   10: [{ title: 'Aprendiendo Git', rating: 10 }] }

  Como ves, la función groupBy recibe una colección (array) y una función o una propiedad, 
  y devuelve un objeto con claves que son los valores de la función ejecutada pasando como argumento cada elemento o de la propiedad por cada elemento. 
  Luego los valores son un array de los valores que tengan la misma llave.

  La dificultad del reto está más en comprender la función que en la implementación. ¡Suerte!.
*/

/** Evaluates each element of the provided array to generate the return object keys.
 *  Then groups each element of the array by it's corresponding return value when evaluated
 *  on the provided function.
 * @param {any[]} array
 * @param {function} func
 */
const groupByResult = (array, func) => {
  const keys = array.map((item) => func(item));
  const uniqueKeys = [...new Set(keys)];
  let returnObj = {};

  uniqueKeys.map((key) => (returnObj[key] = []));
  array.forEach((el) => {
    uniqueKeys.forEach((key) => {
      if (key === func(el)) returnObj[key] = [...returnObj[key], el];
    });
  });

  return returnObj;
};

/**
 * @param {string[]} array
 */
const groupByLength = (array) => {
  const keys = array.map((item) => item.length);
  const uniqueKeys = [...new Set(keys)];
  let returnObj = {};

  uniqueKeys.map((key) => (returnObj[key] = []));
  array.forEach((el) => {
    uniqueKeys.forEach((key) => {
      if (key === el.length) returnObj[key] = [...returnObj[key], el];
    });
  });

  return returnObj;
};

/**
 * @param {object[]} array
 * @param {string} key
 */
const groupByKey = (array, key) => {
  const keys = array.map((item) => item[key]);
  let returnObj = {};

  keys.map((key) => (returnObj[key] = []));
  array.forEach((obj) => {
    const objKeys = Object.keys(obj);

    objKeys.forEach((k) => {
      keys.forEach((key) => {
        if (key === obj[k]) returnObj[key] = [...returnObj[key], obj];
      });
    });
  });

  return returnObj;
};

/**
 * @param {any[]} array
 * @param {string} criteria
 */
const groupByCriteria = (array, criteria) => {
  if (criteria === "length") return groupByLength(array);

  return groupByKey(array, criteria);
};

/**
 * @param {any[]} collection
 * @param {function | string} it
 */
export default function groupBy(collection, it) {
  switch (typeof it) {
    case "function":
      return groupByResult(collection, it);

    case "string":
      return groupByCriteria(collection, it);

    default:
      return {};
  }
}
