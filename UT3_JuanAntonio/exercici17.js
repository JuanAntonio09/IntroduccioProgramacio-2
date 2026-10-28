let hora = 9
if (hora < 10 || hora > 18) {
    console.log("Accés denegat")
}
// Dará Accés denegat porque la hora es menor que diez, cumpliendo
// una de las dos condiciones.

let hora = 15
let capDeSetmana = false
if (hora < 10 || hora > 18 || capDeSetmana) {
    console.log("Accés denegat")
}
// No dará Accés denegat porque ninguna de las condiciones es verdadera.

let hora = 17
let capDeSetmana = true
if (hora < 10 && hora > 18 && capDeSetmana) {
    console.log("Accés denegat")
}
// No dará accés denegat ya que es imposible que la hora sea menor que
// 10 y mayor a 18 al mismo tiempo.
