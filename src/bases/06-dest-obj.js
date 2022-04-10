const persona = {
    nombre: 'Vadick',
    apellido: 'Palomino',
    edad: 34,
    clave: 'ingeniero'
}

//const { nombre, edad } = persona

// console.log( nombre, edad );
// console.log(persona.apellido);
// console.log(persona.edad);


const retornarPersona = ({clave, nombre, edad, rango = 'capitan'}) => {
    //console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad
    }
}

const {nombreClave, anios} = retornarPersona(persona)

console.log(nombreClave, anios);