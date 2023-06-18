import { useContext, useRef } from "react";
import { allAnimes } from "../../helpers";
import { listContext } from "../../states/shopListState/listContext";

export const useFilter = () => {

    const { setProducts, initialProducts } = useContext(listContext);

    const arrayAnime = [...allAnimes];

    const anime = useRef();
    const product = useRef();
    const price = useRef();

    const setFilters = () => {

        if( anime.current.value == undefined || product.current.value == undefined || price.current.value == undefined) return;
    
        if( anime.current.value !== '' && product.current.value !== '' && price.current.value !== '' ){
                setProducts( arrayAnime.filter( item => (
                item.anime === anime.current.value
            )).filter( item => item.keyWords.includes(product.current.value)).sort( (a,b) => {
                if( price.current.value === 'menor' ){
                    return Number(a.precio.replace(/[^0-9.-]+/g,"")) - Number(b.precio.replace(/[^0-9.-]+/g,""))
                } else{
                    return Number(b.precio.replace(/[^0-9.-]+/g,"")) - Number(a.precio.replace(/[^0-9.-]+/g,""))
                }
            }));
            return;
        }

        if( anime.current.value !== '' && product.current.value !== '' ){
            setProducts( arrayAnime.filter( item => item.anime === anime.current.value).filter( item => item.keyWords.includes(product.current.value)));
            return;
        }

        if( anime.current.value !== '' && price.current.value !== '' ){
            setProducts( arrayAnime.filter( item => item.anime === anime.current.value).sort( (a,b) => {
                if( price.current.value === 'menor' ){
                    return Number(a.precio.replace(/[^0-9.-]+/g,"")) - Number(b.precio.replace(/[^0-9.-]+/g,""))
                } else{
                    return Number(b.precio.replace(/[^0-9.-]+/g,"")) - Number(a.precio.replace(/[^0-9.-]+/g,""))
                }
            }));
            return;
        }

        if( product.current.value !== '' && price.current.value !== ''){
            setProducts( [...initialProducts].filter( item => item.keyWords.includes(product.current.value)).sort( (a,b) => {
                if( price.current.value === 'menor' ){
                    return Number(a.precio.replace(/[^0-9.-]+/g,"")) - Number(b.precio.replace(/[^0-9.-]+/g,""))
                } else{
                    return Number(b.precio.replace(/[^0-9.-]+/g,"")) - Number(a.precio.replace(/[^0-9.-]+/g,""))
                }
            }));
            return;
        }

        if( anime.current.value !== '' ){
            setProducts( arrayAnime.filter( item => item.anime === anime.current.value));
        } 
        if( product.current.value !== '') setProducts( initialProducts.filter( item => item.keyWords.includes(product.current.value)));
        if( price.current.value !== '' ){
            setProducts([...initialProducts].sort( (a,b) => {
                if( price.current.value === 'menor' ){
                    return Number(a.precio.replace(/[^0-9.-]+/g,"")) - Number(b.precio.replace(/[^0-9.-]+/g,""))
                } else{
                    return Number(b.precio.replace(/[^0-9.-]+/g,"")) - Number(a.precio.replace(/[^0-9.-]+/g,""))
                }
            }))
        } 
    }

    const cleanFilters = () => {
        anime.current.value = '';
        product.current.value = '';
        price.current.value = '';

        setProducts(initialProducts);
        
    }

    return {
        anime,
        product,
        price,
        setFilters,
        cleanFilters,
    }
}
