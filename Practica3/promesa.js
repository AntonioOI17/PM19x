//funcion verificar usuario 
function verificar(usuario) {
    return new Promise((resolve, reject) => {
        if (usuario === "admir") {
            resolve("Acceso concedido");
        } else {
            reject("Acceso denegado");
        }
    });
}

// Uso de la función verificar:
verificar("admir")
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));

verificar("usuariooo")
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));