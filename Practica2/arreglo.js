const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "Maria", edad: 28 }
];

//find
const persona_en = personas.find((persona) => persona.nombre === "Luis");
console.log(`La persona encontrada es ${persona_en.nombre}`);

//forEach
personas.forEach((persona) => {
    console.log(`Nombre: ${persona.nombre}, y tiene: ${persona.edad}`);
});

//reduce para sumar edades
const edadsum = personas.reduce((acumulador, persona) => {
    return acumulador + persona.edad;
},0);

console.log(`La suma de las edades es: ${edadsum}`);

