const prompt = require('prompt-sync')()


let temperatura = prompt("Introduce la temperatura ")
let message = temperatura >= 30 ? "Fa molta calor" : "Temperatura agradable"

console.log(message)
