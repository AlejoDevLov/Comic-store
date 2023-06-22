
export const getItemById = (globalProducts, itemName) => {

    // separa el id y name en un array a partir de separacion por guion
    const id = itemName.split('-');
    // reemplaza los guiones por espacios y elimina los espacios al inicio y final
    const name = itemName.slice(2).replace(/-/g, ' ').trim();

    return (globalProducts.find( item => item.id == Number(id[0]) && item.name === name));
    // // recuperar name del item y verificar si item.name existe en localStorage
    // const anime = allAnimes.find( item => (
    //     item.name == name
    // ))

    // const newArray = allAnimes.filter( item => (
    //     item.anime == anime.anime
    // ))
    // const titleAnime = anime.anime.toLowerCase().replace(/\s/g, '-');
    
    // if( localStorage.getItem(titleAnime) ){
    //     const productos = JSON.parse(localStorage.getItem(titleAnime));
    //     return (productos.find( item => item.id == Number(id[0]) && item.name === name));
    // } else{
    //     localStorage.setItem(titleAnime, JSON.stringify(newArray))
    //     return (products.find( item => item.id == Number(id[0]) && item.name === name));
    // }

}