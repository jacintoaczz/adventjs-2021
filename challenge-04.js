/* 
  ¡Es hora de poner el árbol de navidad en casa! 🎄
  Para ello vamos a crear una función que recibe la altura del árbol, 
  que será un entero positivo del 1 a, como máximo, 100.

  Si le pasamos el argumento 5, se pintaría esto:
    ____*____
    ___***___
    __*****__
    _*******_
    *********
    ____#____
    ____#____

  Creamos un triángulo de asteríscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. 
  Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
  Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

  Otro ejemplo con un árbol de altura 3:
    __*__
    _***_
    *****
    __#__
    __#__

  Ten en cuenta que el árbol es un string y necesitas los saltos de línea 
  \n para cada línea para que se forme bien el árbol.
*/

/**
 * @param {number} height
 */
export default function createXmasTree(height) {
  let tree = "";

  if (parseInt(height) !== NaN) {
    if (height >= 1 && height <= 100) {
      let treeFloor = "";
      for (let floor = 0; floor < height; floor++) {
        let spaces = height - (1 + floor);
        let stars = 2 * floor + 1;

        // Building the tree
        for (let i = 0; i < spaces; i++) {
          treeFloor += "_";
        }
        for (let i = 0; i < stars; i++) {
          treeFloor += "*";
        }
        for (let i = 0; i < spaces; i++) {
          treeFloor += "_";
        }
        treeFloor += "\n";

        // Now we add the base
        if (floor === height - 1) {
          for (let i = 0; i < 2; i++) {
            for (let i = 0; i < height - 1; i++) {
              treeFloor += "_";
            }
            treeFloor += "#";
            for (let i = 0; i < height - 1; i++) {
              treeFloor += "_";
            }
            if (i === 0) treeFloor += "\n";
          }
        }
      }

      tree += treeFloor;
    }
  }

  return tree;
}

console.log(createXmasTree(1));

/* 
  Logica:
    Los espacios de relleno que necesita el arbol por cada tramo los calcularemos con la ecuacion:
    espacios = tamaño - (1 + tramo)
    Es decir, supongamos que la altura es de 90, entonces, para el primer tramo (tramo 0), el arbol debe tener
    89 espacios de cada lado. Para el segundo tramo (tramo 1), 88, y asi sucesivamente. 
*/
