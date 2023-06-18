import { useCallback, useContext, useEffect, useMemo } from "react";
import { listContext } from "../../states";
import { useParams } from "react-router-dom";
import { allAnimes } from "../../helpers";

export const useShop = () => {

    const { anime } = useParams();

    const { setProducts, products, setInitialProducts, setAnimeUrl } = useContext(listContext);

    useEffect( () => {
        setAnimeUrl(anime);
        localStorage.setItem('url', anime);
    },[]);

    const productos = useMemo(() => { 
        let productos = allAnimes;

        switch(anime){
            case 'demon-slayer':
            productos = productos.filter( item => {
                return item.anime === 'demon slayer';
            });
            return productos;

            case 'dragon-ball':
            productos = productos.filter( item => {
                return item.anime === 'Dragon ball';
            });
            return productos;

            case 'mario':
            productos = productos.filter( item => {
                return item.anime === 'Mario';
            } );
            return productos;

            case 'sevenDeadly':
            productos = productos.filter( item => {
                return item.anime === 'seven deadly';
            } );
            return productos;

            case 'los-simpsons':
            productos = productos.filter( item => {
                return item.anime === 'los Simpson';
            } );
            return productos;

            default:
            console.error('Hubo un error en la ruta');      
        }
    },[anime]);

    const onReduceQuantity  = useCallback( (anime, id) => {
        setProducts( products.map( element => {
        if( element.anime === anime && element.id === id){
            element.cantidad -= 1;
        }
        return element;
        }))        
    },[products]);

    return {
        setInitialProducts,
        onReduceQuantity,
        anime,
        productos,
        products
    }
}