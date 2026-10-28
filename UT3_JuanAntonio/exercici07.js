/*
== es una comparación debil, mientras que === es estricta, esto quiere decir
que == unicamente compara valores, mientras que === compara tanto valor como tipo.
5 == "5" dará true ya que combierte el string en un número, por otro lado, 5 === "5"
dará false ya que los tipos no coinciden.
*/

console.log(5 == "5")
//true, porque el string se pasa a número.

console.log(5 === "5")
//false, los tipos son diferentes.

console.log(0 == false)
//true, false pasa de boolean a número, y 0 es igual que 0.

console.log(0 === false)
//false, los tipos son diferentes.

/*
Es recomendable usar === en lugar de == para evitar errores comunes de comparación, 
por ejemplo, si se compara un número con un string que contiene un número,
el resultado puede ser inesperado si se usa ==, ya que el string se convertirá a número.
*/