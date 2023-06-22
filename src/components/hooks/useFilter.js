import { useContext, useRef } from "react";
import { listContext } from "../../states/shopListState/listContext";

export const useFilter = () => {

    const { setProducts, globalProducts, initialArray, currentAnime } = useContext(listContext);

    const arrayAnime = [...initialArray];

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
            setProducts( [...globalProducts].filter( item => item.keyWords.includes(product.current.value)).sort( (a,b) => {
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
        if( product.current.value !== '') setProducts( [...globalProducts].filter( item => item.keyWords.includes(product.current.value)));
        if( price.current.value !== '' ){
            setProducts([...globalProducts].sort( (a,b) => {
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

        setProducts([...globalProducts].filter( item => item.anime === currentAnime));
        
    }

    return {
        anime,
        product,
        price,
        setFilters,
        cleanFilters,
    }
}
