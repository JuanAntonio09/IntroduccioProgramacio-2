console.log(5 + 2)
// Es una soma normal, dará 7

console.log("5" + 2)
// Al estar 5 entre comillas, lo interpreta como un strig, entonces en vez
// de sumarlos, los une, dando como resultado 52

console.log(5 + 2 + "3")
// Aquí, respetando las normas de las matemáticas, actúa de izquierda a derecha, 
// por eso primero hace la suma normal 5 + 2 y luego le añade el string, dando 72.

console.log("5" + 2 + 3)
// Aquí parece que cambia pero sigue las mismas reglas, como actúa de izquierda 
// a derecha, primero hace "5" + 2, dando "52", y luego hace "52" + 3, dando
// como resultado 523.
