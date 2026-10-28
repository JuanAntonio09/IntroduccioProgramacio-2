const prompt = require('prompt-sync')()

let num = Number(prompt("Escribe un número "))

if (num === 7) {
    console.log("Has endevinat el número!")
} else {
    console.log("No has encertat. Torna-ho a provar!")
}