const prompt = require('prompt-sync')()

let num1 = Number(prompt("Escribe un número "))
let num2 = Number(prompt("Escribe otro número "))
let op = prompt("Escoge una operación ")

if (op === "+") {
    console.log(num1 + num2)
} else if (op === "-") {
    console.log(num1 - num2)
} else if (op === "*") {
    console.log(num1 * num2)
} else if (num2 === 0 && op === "/") {
    console.log("Operació no vàlida.")
} else if (op === "/") {
    console.log(num1 / num2)
} else {
    console.log("Operació no vàlida")
}