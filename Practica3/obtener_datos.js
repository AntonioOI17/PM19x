//Crea una función obtenerDatos() que simule una llamada a una API .

function simularPeticionAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({data: "Datos obtenidos de la API", status : 200});
        }, 2000); // Simula un retraso de 2 segundos
    });
}

//funcion async/await para obtener datos
async function obtenerDatos() {
    try {
        const respuesta = await simularPeticionAPI();
        console.log(respuesta.data);
        console.log(`Estado de la respuesta: ${respuesta.status}`);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

// Llamada a la función para obtener los datos
obtenerDatos()
    .then(() => console.log("Datos obtenidos correctamente"))
    .catch(error => console.error("Error en la obtención de datos:", error));
