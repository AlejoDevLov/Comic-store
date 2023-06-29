
export const getItemById = (globalProducts, itemName) => {

    // separa el id y name en un array a partir de separacion por guion
    const id = itemName.split('-');
    // reemplaza los guiones por espacios y elimina los espacios al inicio y final
    const name = itemName.slice(2).replace(/-/g, ' ').trim();

    return (globalProducts.find( item => item.id == Number(id[0]) && item.name === name));
}