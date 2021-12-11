/* 
  Invertir en criptomonedas es casi un deporte de riesgo. El otro día hackearon Bitmart y ha hecho que el valor de Bitcoin, y otras monedas, bajase un 25%.
  Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.
  La lista de precios es un array de números y representa el tiempo de izquierda a derecha. 
  Por lo que ten en cuenta que no puedes comprar a un precio que esté a la derecha de la venta y no puedes vender a un precio que esté a la izquierda de la compra.

  Por ejemplo:
    const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
    maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

    const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
    maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)

  Si ese día no se puede sacar ningún beneficio, tenemos que devolver -1 para evitar que hagamos una locura:
      const pricesDoge = [18, 15, 12, 11, 9, 7]
      maxProfit(pricesDoge) = // -> -1 (no hay ganancia posible)

      const pricesAda = [3, 3, 3, 3, 3]
      maxProfit(pricesAda) = // -> -1 (no hay ganancia posible)
*/

const pricesEth = [10, 20, 30, 40, 50, 60, 70];
const pricesDoge = [18, 15, 12, 11, 9, 7];
const pricesAda = [3, 3, 3, 3, 3];

/**
 * @param {number[]} prices
 * @returns {number} Maximum possible profit. Or -1, if there's no profit on the given day.
 */
export default function maxProfit(prices) {
  let maximumProfit = -1;
  let profit = 0;

  prices.forEach((price, idx) => {
    for (let i = idx + 1; i <= prices.length; i++) {
      profit = prices[i] - price;

      if (profit > 0 && profit > maximumProfit) {
        maximumProfit = profit;
      }
    }
  });

  return maximumProfit;
}

console.log(maxProfit(pricesDoge));