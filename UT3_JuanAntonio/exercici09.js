const prompt = require('prompt-sync')()

let nom = Number(prompt("Quants anys tens? "))
if (nom >= 18) {
    console.log("Ets major d'edat")
} else {
    console.log("Ets menor d'edat")
}