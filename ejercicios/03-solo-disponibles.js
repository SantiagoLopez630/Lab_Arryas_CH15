// ============================================================
// Ejercicio 03 · Solo los platos disponibles
// ============================================================
// Algunos platos están agotados (disponible: false). El restaurante
// quiere la "carta del día": solo los platos que sí se pueden pedir.
//
// Crea la función soloDisponibles(menu) que retorne un array NUEVO
// con los platos (los objetos completos) cuyo disponible sea true,
// en el mismo orden del menú.
//
// Regla: el menú original NO se modifica (debe seguir con todos sus platos).
//
// Ejemplos (con el menú del README):
//   soloDisponibles(menu).length → 4   (el Ajiaco está agotado)
//   soloDisponibles(menu)[1]     → el objeto de "Limonada de coco"
//   soloDisponibles([])          → []
//
// Pista: es el mismo patrón de cursosEconomicos de la clase,
// con otra condición.
// ============================================================

const menu = [
  { nombre: "Bandeja paisa", precio: 32000, categoria: "fuerte", disponible: true },
  { nombre: "Ajiaco", precio: 28000, categoria: "fuerte", disponible: false },
  { nombre: "Limonada de coco", precio: 9000, categoria: "bebida", disponible: true },
  { nombre: "Jugo de lulo", precio: 7000, categoria: "bebida", disponible: true },
  { nombre: "Postre de natas", precio: 11000, categoria: "postre", disponible: true },
];

function soloDisponibles(menu) {
  let disponibles = [];
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].disponible === true) {
      disponibles.push(menu[i]);
    }
  }
  return disponibles;

}

console.log(soloDisponibles(menu).length); // 4
console.log(soloDisponibles(menu)[1]); // { nombre: "Limonada de coco", precio: 9000, categoria: "bebida", disponible: true }
console.log(soloDisponibles([])); // []

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { soloDisponibles };
