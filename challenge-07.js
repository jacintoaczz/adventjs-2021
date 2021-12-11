/* 
  Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.
  Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.
  La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. Veamos unos ejemplos:

    const almacen = {
      'estanteria1': {
        'cajon1': {
          'producto1': 'coca-cola',
          'producto2': 'fanta',
          'producto3': 'sprite'
        }
      },
      'estanteria2': {
        'cajon1': 'vacio',
        'cajon2': {
          'producto1': 'pantalones',
          'producto2': 'camiseta' // <- ¡Está aquí!
        }
      }
    }
                
    contains(almacen, 'camiseta') // true

    const otroAlmacen = {
      'baul': {
        'fondo': {
          'objeto': 'cd-rom',
          'otro-objeto': 'disquette',
          'otra-cosa': 'mando'
        }
      }
    }
      
    contains(otroAlmacen, 'gameboy') // false

  Ten en cuenta que la tienda es enorme. Tiene diferentes almacenes y, como has visto en los ejemplos, cada uno puede tener diferentes organizaciones.
  Lo importante es buscar que el producto está en los almacenes.
*/

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: "coca-cola",
      producto2: "fanta",
      producto3: "sprite",
    },
  },
  estanteria2: {
    cajon1: "vacio",
    cajon2: {
      producto1: "pantalones",
      producto2: "camiseta", // <- ¡Está aquí!
      cajon3: {
        producto1: "zapatos",
        cajon4: {
          producto1: "sandalias",
        },
      },
    },
  },
};

/** Iterates through inner objects recursively (if they exist) and looks for the desired product name
 *  within the values of those objects.
 * @param {string} productName
 * @param {object} object
 */
const searchForValue = (productName, object) => {
  let isProductNameFound = false;
  const innerObjectkeys = Object.keys(object);

  innerObjectkeys.every((key) => {
    if (typeof object[key] === "object") {
      isProductNameFound = searchForValue(productName, object[key]);
      if (isProductNameFound) return false;
    } else if (object[key] === productName) {
      isProductNameFound = true;
      return false;
    }

    return true;
  });

  return isProductNameFound;
};

/**
 * @param {object} store
 * @param {string} product
 */
export default function contains(store, product) {
  let isFound = false;
  const storeKeys = Object.keys(store);

  storeKeys.every((key) => {
    if (typeof store[key] === "object") {
      isFound = searchForValue(product, store[key]);

      if (isFound) return false;
    } else if (store[key] === product) {
      isFound = true;

      return false;
    }

    return true;
  });

  return isFound;
}

console.log(contains(almacen, "sandalias"));
