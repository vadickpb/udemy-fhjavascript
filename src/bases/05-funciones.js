const saludar = function(nombre){
    return `hola ${nombre}`
}


const saludar2 = (nombre2) => {
    return `hola ${nombre2}`
}

const saludar3 = (nombre3) => `hola desde saludar3 ${nombre3}`;

const getUser = () => (
    {
        uid: 'as1233',
        username: 'vadick'
    }
)

// function getUsuarioActivo( nombre ){
//     return {
//         uid: 'ABCD12',
//         username: nombre
//     }
// }

const getUsuarioActivo = ( nombre ) => (
    {
        uid: 'ABCD12',
        username: nombre
    }
)

const usuarioActivo = getUsuarioActivo('Vadick');

console.log(usuarioActivo);