// ============================================================
// Ejercicio 06 · Cancelar el último plato
// ============================================================
// La mesa se arrepiente del último plato que pidió.
//
// Crea la función cancelarUltimo(pedido) que:
//   - Quite el último plato del pedido usando pop.
//   - Retorne "Se canceló: " + el nombre del plato quitado.
//   - Si el pedido está vacío, no quite nada y retorne
//     exactamente "El pedido está vacío".
//
// Ejemplos:
//   cancelarUltimo([bandeja, limonada]) → "Se canceló: Limonada de coco"
//                                          (el pedido queda solo con la bandeja)
//   cancelarUltimo([])                  → "El pedido está vacío"
//
// Pista: pop DEVUELVE el elemento que quitó; guárdalo en una variable.
// ============================================================

const menu = [
  { nombre: "Bandeja paisa", precio: 32000, categoria: "fuerte", disponible: true },
  { nombre: "Ajiaco", precio: 28000, categoria: "fuerte", disponible: false },
  { nombre: "Limonada de coco", precio: 9000, categoria: "bebida", disponible: true },
  { nombre: "Jugo de lulo", precio: 7000, categoria: "bebida", disponible: true },
  { nombre: "Postre de natas", precio: 11000, categoria: "postre", disponible: true },
];

function cancelarUltimo(pedido) {
  if (pedido.length === 0) {
    return "El pedido está vacío";
  }
  const platoCancelado = pedido.pop();
  return `Se canceló: ${platoCancelado}`;

}

console.log(cancelarUltimo([ "Bandeja", "Limonada" ])); // "Se canceló: Limonada de coco"
console.log(cancelarUltimo([])); // "El pedido está vacío"

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { cancelarUltimo };
