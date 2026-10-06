// ============================================================
// Ejercicio 01 · Acceso a un plato
// ============================================================
// En Fogón Andino el menú es un array de objetos. Cada plato tiene:
//   { nombre: "Ajiaco", precio: 28000, categoria: "fuerte", disponible: false }
//
// Crea la función describirPlato(menu, posicion) que retorne
// un texto con el nombre y el precio del plato en esa posición,
// con este formato exacto:  "Ajiaco · $28000"
//
// Regla: si en esa posición no hay plato, retorna exactamente
// "Ese plato no existe" (sin pedirle .nombre a undefined).
//
// Ejemplos (con el menú del README):
//   describirPlato(menu, 0)  → "Bandeja paisa · $32000"
//   describirPlato(menu, 1)  → "Ajiaco · $28000"
//   describirPlato(menu, 9)  → "Ese plato no existe"
//
// Pista: primero guarda menu[posicion] en una variable y
// pregunta si es undefined, como en describirCurso de la clase.
// ============================================================

const menu = [
  { nombre: "Bandeja paisa", precio: 32000, categoria: "fuerte", disponible: true },
  { nombre: "Ajiaco", precio: 28000, categoria: "fuerte", disponible: false },
  { nombre: "Limonada de coco", precio: 9000, categoria: "bebida", disponible: true },
  { nombre: "Jugo de lulo", precio: 7000, categoria: "bebida", disponible: true },
  { nombre: "Postre de natas", precio: 11000, categoria: "postre", disponible: true },
];

function describirPlato(menu, posicion) {
  if (menu[posicion] === undefined) {
    return "Ese plato no existe";
  } else {
    return `${menu[posicion].nombre} · $${menu[posicion].precio}`;
  }   
}

console.log(describirPlato(menu, 0)); // "Bandeja paisa · $32000"
console.log(describirPlato(menu, 1)); // "Ajiaco · $28000"
console.log(describirPlato(menu, 9)); // "Ese plato no existe"  
// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { describirPlato };
