import { useState } from "react";

const personajes = ['goku', 'vegeta', 'trunks'];

const [ , , p3] = personajes;

//console.log(p3);

const retornarArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornarArreglo();

//console.log(letras);

const userState = ( valor ) => {
    return [ valor, () => {console.log('hola mundo')}];
}

const arr = userState('goku')

const [nombre, setNombre] = arr;

console.log(nombre);
setNombre();