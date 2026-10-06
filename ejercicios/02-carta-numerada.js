// ============================================================
// Ejercicio 02 · Carta numerada
// ============================================================
// El restaurante quiere imprimir la carta con un número por plato.
// La función NO imprime: entrega las líneas listas para usar.
//
// Crea la función cartaNumerada(menu) que retorne un array NUEVO
// de textos, uno por plato y en el mismo orden, con este formato:
//   "0. Bandeja paisa · $32000"
// El número es la posición del plato en el menú (empieza en 0).
//
// Ejemplos:
//   cartaNumerada(menu)[0] → "0. Bandeja paisa · $32000"
//   cartaNumerada(menu)[1] → "1. Ajiaco · $28000"
//   cartaNumerada([])      → []
//
// Pista: arreglo vacío → for → push de un texto → return al final.
// ============================================================


const menu = [
  { nombre: "Bandeja paisa", precio: 32000, categoria: "fuerte", disponible: true },
  { nombre: "Ajiaco", precio: 28000, categoria: "fuerte", disponible: false },
  { nombre: "Limonada de coco", precio: 9000, categoria: "bebida", disponible: true },
  { nombre: "Jugo de lulo", precio: 7000, categoria: "bebida", disponible: true },
  { nombre: "Postre de natas", precio: 11000, categoria: "postre", disponible: true },
];

function cartaNumerada(menu) {
  carta = [];
  for (let i = 0; i < menu.length; i++) {
    carta.push(`${i}. ${menu[i].nombre} · $${menu[i].precio}`);
  }
  return carta;

}

console.log(cartaNumerada(menu)[0]); // "0. Bandeja paisa · $32000"
console.log(cartaNumerada(menu)[1]); // "1. Ajiaco · $28000"
console.log(cartaNumerada([])); // []


// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { cartaNumerada };
