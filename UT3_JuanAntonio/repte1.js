const prompt = require('prompt-sync')()
const CODI_SECRET = 7

let nom = prompt("Com et noms? ")
let edat = Number(prompt("Quants anys tens? "))
console.log("Benvingut/da, " + nom + "!")

let puntuacio = 0

let proba1 = prompt("Introdueix el codi secret: ")
if (proba1 == CODI_SECRET) {
    console.log("La porta s'ha obert!")
    puntuacio += 10
    if (edat >= 16) {
    console.log("Pots entrar a la sala del tresor.")
    let tresor = prompt("Vols agafar el tresor? ")

    switch(tresor) {
    case "si":
        console.log("Has aconseguit el tresor!");
        puntuacio += 20;
        break;
    default:
      console.log("No has aconseguit el tresor."); 
}


}   else {
    console.log("Ets massa jove per entrar a la sala.")
    } 
} else {
    console.log("Codi incorrecte. No pots entrar")
}



console.log("--- RESULTAT FINAL ---")

console.log(
    "Jugador: " + nom,
    "\nEdat: " + edat,
    "\nPuntuació: " + puntuacio,
)
// "\n" es un salto de linea, no quería que quedase todo en una linea y a su vez
// tampoco queria hacer 3 console logs.

puntuacio >= 30 ? console.log("Has guanyat!") : console.log("No has aconseguit el tresor.")