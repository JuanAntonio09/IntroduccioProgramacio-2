const prompt = require('prompt-sync')()


let edat = Number(prompt("Introdueix la teva edat "))
let entrada = prompt("Tens entrada? (si/no) ")

if (edat >= 18 && entrada.toLowerCase() == "si") {
    console.log("Accés permès")
} else {
    console.log("Accés denegat")
}