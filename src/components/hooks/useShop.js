import { useCallback, useContext, useEffect, useMemo } from "react";
import { listContext } from "../../states";
import { useParams } from "react-router-dom";
import { allAnimes } from "../../helpers";

export const useShop = () => {

    const { anime } = useParams();

    const { setProducts, products, setInitialProducts, setAnimeUrl } = useContext(listContext);

    useEffect( () => {
        setAnimeUrl(anime);
        localStorage.setItem('url',anime);
    },[anime]);

    const productos = useMemo(() => { 
        let productos = [...allAnimes];

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
    },[]);

    useEffect( () => {
        setInitialProducts(productos);
        setProducts(productos);
    },[]);

    const onReduceQuantity  = useCallback( (anime2, id) => {
        setProducts( products.map( element => {
        if( element.anime === anime2 && element.id === id){
            element.cantidad -= 1;
        }
        return element;
        }));
        localStorage.setItem(anime, JSON.stringify(products));
    },[products[0]]);

    useEffect(() => {
        if(JSON.parse(localStorage.getItem(anime))){
            console.log('entrando');
            setProducts(JSON.parse(localStorage.getItem(anime)));
            console.log(JSON.parse(localStorage.getItem(anime)))
            }
        }, [])

    return {
        setInitialProducts,
        onReduceQuantity,
        anime,
        productos,
        products,
        setProducts
    }
}