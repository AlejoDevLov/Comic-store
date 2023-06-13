import { allAnimes } from "./allAnimes"


export const getItemById = (item) => {

    // separa el id y name en un array a partir de separacion por guion
    const id = item.split('-');

    // reemplaza los guiones por espacios y elimina los espacios al inicio y final
    const name = item.slice(2).replace(/-/g, ' ').trim();

    return (allAnimes.find( item => item.id == Number(id[0]) && item.name === name));
}