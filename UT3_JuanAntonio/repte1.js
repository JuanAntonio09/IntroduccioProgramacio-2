const prompt = require('prompt-sync')()

const CODI_SECRET = 7
let nom = prompt("Com et noms? ")
let edat = Number(prompt("Quants anys tens? "))
console.log("Benvingut/a, " + nom + "!")

let puntuacio = 0

let proba1 = prompt("Introdueix el codi secret: ")
if (proba1 == CODI_SECRET) {
    console.log("La porta s'ha obert!")
    puntuacio += 10
} else {
    console.log("Codi incorrecte. No pots entrar")
}