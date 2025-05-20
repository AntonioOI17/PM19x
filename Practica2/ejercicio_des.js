const persona = {
    nombre: "Jose",
    edad: 12,
    direccion:{   
    ciudad: "Qro",
    pais: "MX"
    }
};

//desestructuracion
const { nombre, edad, direccion: { ciudad } } = persona;
console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);


