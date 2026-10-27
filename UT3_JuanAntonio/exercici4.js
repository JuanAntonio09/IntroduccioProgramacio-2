let a = 4

let b = 4


let c = ++a

let d = b++



console.log(a)
// 5
console.log(b)
// 5
console.log(c)
// 5
console.log(d)
// 4

/*
La diferencia entre a++ y ++a parece complicada pero una vez lo entiendes
es fácil. ++a es prefijo y a++ es sufijo, la forma de prefijo aumenta en 1
tanto la variable a la que afecta como la variable que la ejecuta, por eso
ambas dan 5, sin embargo, la forma de sufijo unicamente afecta a la variable
que la ejecuta, por eso en el apartado c da 5 pero en el b se queda igual, en 4.
*/
