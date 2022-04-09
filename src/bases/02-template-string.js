const nombre = 'Vadick';
const apellido = 'Palomino';

const nombreCompleto = `${apellido} ${nombre}`

console.log(nombreCompleto);

function getSaludo (valor) {
    return `Hola ${valor}`; 
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);