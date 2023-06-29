import { useCallback, useContext, useEffect, useMemo } from "react";
import { listContext } from "../../states";
import { useParams } from "react-router-dom";

export const useShop = () => {

    const { anime } = useParams();

    const { setProducts, products, setGlobalProducts, setAnimeUrl, 
            globalProducts, setCurrentAnime } = useContext(listContext);

    useEffect( () => {
        setAnimeUrl(anime);
        setCurrentAnime(shopItems[0].anime);
    },[anime]);

    const shopItems = useMemo(() => { 
        let shopItems = [...globalProducts];

        switch(anime){
            case 'demon-slayer':
            shopItems = shopItems.filter( item => {
                return item.anime === 'demon slayer';
            });
            return shopItems;

            case 'dragon-ball':
            shopItems = shopItems.filter( item => {
                return item.anime === 'Dragon ball';
            });
            return shopItems;

            case 'mario':
            shopItems = shopItems.filter( item => {
                return item.anime === 'Mario';
            } );
            return shopItems;

            case 'sevenDeadly':
            shopItems = shopItems.filter( item => {
                return item.anime === 'seven deadly';
            } );
            return shopItems;

            case 'los-simpsons':
            shopItems = shopItems.filter( item => {
                return item.anime === 'los Simpson';
            } );
            return shopItems;

            default:
            console.error('Hubo un error en la ruta');      
        }
    },[]);

    useEffect( () => {
            setProducts(shopItems);
    },[anime]);


    const onReduceQuantity  = useCallback( (anime2, id) => {
        setGlobalProducts([...globalProducts.map( element => {
            if( element.anime === anime2 && element.id === id){
                element.cantidad -= 1;
            }
            return element;
        })])
    },[]);
        
    return {
        onReduceQuantity,
        products,
    }
}