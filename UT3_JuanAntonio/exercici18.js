const prompt = require('prompt-sync')()

let edat = Number(prompt("Quants anys tens? "))
let ANScarnet = prompt("Tens carnet d'estudiant? (si/no) ")

let carnet = ANScarnet.toLowerCase() === "si"

if (edat >= 18 && edat <= 65 && carnet) {
    console.log("Preu: 5€")
} else {
    console.log("Preu: 10€")
}