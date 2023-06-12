import { useContext, useEffect, useRef } from "react"
import { allAnimes } from "../helpers";
import { listContext } from "../states/shopListState/listContext";

export const FilterMenu = ({ refClass, classFilter }) => {

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
            setInitialProducts( arrayAnime.filter( item => item.anime === anime.current.value));
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


  return (
    <>
        <div className={classFilter} ref={ refClass }>

            <div className="filter-anime">
                <label htmlFor="anime-select">Anime/Caricatura</label>
                <select name="anime" id="anime-select" ref={anime}>
                    <option value=""></option>
                    <option value="Dragon ball">Dragon Ball</option>
                    <option value="demon slayer">Demon Slayer</option>
                    <option value="seven deadly">Nanatsu no Taizai</option>
                    <option value="los Simpson">Los Simpsons</option>
                    <option value="Mario">Mario Bros</option>
                </select>
            </div>

            <div className="filter-product">
                <label htmlFor="product-select">Producto</label>
                <select name="product" id="product-select" ref={product}>
                    <option value=""></option>
                    <option value="camiseta">Camisetas</option>
                    <option value="llavero">Llaveros</option>
                    <option value="vaso">Vasos</option>
                    <option value="case">Cases</option>
                    <option value="figura">Figuras</option>
                </select>
            </div>

            <div className="filter-price">
                <label htmlFor="price-select">Precios</label>
                <select name="price" id="price-select" ref={price}>
                    <option value=""></option>
                    <option value="menor">Menor a mayor</option>
                    <option value="mayor">Mayor a menor</option>
                </select>
            </div>
            
            <div className="buttons-filter">
                <button onClick={setFilters}>Aplicar filtros</button>
                <button onClick={cleanFilters}>Limpiar filtros</button>
            </div>
        </div>
    </>
  )
}
