
let nombre = "Antonio";
const edad = 21;

nombre = "Juan";

let saludo = "Hola, " + nombre + ". Tienes " + edad + " años";

console.log(saludo);


//segundo ejercicio


const cuadrado2 = (num) => {
    return num * num;
}
console.log(cuadrado2(3));
console.log(cuadrado2(8));
console.log(cuadrado2(6));

//tercer ejercicio

const saludoPersonalizado = (nombre, edad) => {
    return `Hola, me llamo   ${nombre} y tengo ${edad} años.`
};

console.log(saludoPersonalizado("Antonio", 21));

