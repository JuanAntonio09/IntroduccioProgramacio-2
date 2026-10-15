let resultat1 = "no és un número" / 2
let resultat2 = NaN + 10
let resultat3 = 1 / 0
console.log(resultat1) //NaN Porque no puedes dividir una string con un número
console.log(resultat2) //NaN Porque NaN de por si mismo no es un número
console.log(resultat3) //Infinity, dividir cualquier número por 0 da infinito
