const productos = [
    { nombre: "Laptop", precio: 12000 },
    { nombre: "Mouse", precio: 250 },
    { nombre: "Teclado", precio: 750 },
    { nombre: "Monitor", precio: 3000 }
];


//uso de filter y map
const productosmayor = productos
    .filter((producto) => producto.precio > 1000)
    .map((producto) => producto.nombre);    
console.log(productosmayor);



