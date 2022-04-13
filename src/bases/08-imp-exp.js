import { heroes } from "../data/heroes";

export const getHeroeById = (id) => heroes.find(element => element.id === id)

export const getHeroeByOwner = (owner) => {
    return heroes.filter(heroe => heroe.owner === owner)
}


// console.log(getHeroeById(3));
// console.log(getHeroeByOwner('DC'));