const arreglo = [0, 1, 2, 3, 4];

const arreglo2 = [...arreglo, 6];

const arreglo3 = arreglo2.map( function(numero){
    return numero*2;
})

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);