const prompt = require('prompt-sync')()

let temp = Number(prompt("¿Qué temperatura hace? "))

if (temp < 10) {
    console.log("Fa fred.")
} else if (temp >=10 && temp < 25) {
     console.log("Temperatura moderada.") 
} else {
    console.log("Fa calor.")
}
   
