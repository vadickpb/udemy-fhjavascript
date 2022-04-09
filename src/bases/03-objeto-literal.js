const persona = {
    nombre : 'vadick',
    apellidos: 'palomino',
    edad:   34,
    direccion: {
        ciudad: 'Cusco',
        calle: 'Urb Santa ursula',
        numero: 15
    },
    cursos : ['matematicas', 'lenguaje', 'fisica', 'estadistica']
}

//con 3 puntos clonamos un objeto en ES6 con Spread
const persona2 = {...persona}

console.log(`el curso del alumno ${ persona.nombre } es ${persona.cursos[1]} y su direccion es ${persona.direccion.calle} con numero ${persona.direccion.numero} `);

console.log(persona2);