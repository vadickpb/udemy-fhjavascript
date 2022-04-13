import { getHeroeById } from "./bases/08-imp-exp";



// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//     }, 2000);
// })
// .then((result) => {
//     console.log(result);
// }).catch((err) => {
    
// });


const getHeroeByIdAsync = (id) => {

    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject('no se pudo encontrar el heroe');
            }
        }, 2000);
    })
    .then(console.log)
    .catch(console.warn);
}

getHeroeByIdAsync(33)



