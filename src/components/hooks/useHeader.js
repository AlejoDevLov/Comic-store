import { useContext, useRef, useState } from "react";
import { carContext, carListContext, listContext } from "../../states";


export const useHeader = () => {

    const { stateCar } = useContext( carContext );
    const { handleCarList } = useContext(carListContext);
    const { setProducts, initialProducts } = useContext(listContext);

    const [classCarDiv, setClassCarDiv] = useState('car-counter');
    const [classFilter, setClassFilter] = useState('filter-container');
    const [classHelpIcon, setClassHelpIcon] = useState('container-help');

    const inputSearch = useRef();
    const iconFilter = useRef();
    const helpIcon = useRef();

    const totalElementsCar = stateCar.reduce( (prevValue, item) => {
        return prevValue + item.units;
    }, 0); 

    const searchKeywords = (e) => {
    if(e.key == 'Enter'){
        const keys = e.target.value.toLowerCase().trim();
        if( keys != ''){
        setProducts( initialProducts.filter( product => {
            return product.keyWords.includes(keys);
        }) )
        return;
        }
        setProducts(initialProducts);
    }
    }

    const searchKeywordsOnClick = () => {
    const keys = inputSearch.current.value.toLowerCase().trim();
    if( keys != ''){
        setProducts( initialProducts.filter( product => {
            return product.keyWords.includes(keys);
        }) )
        return;
    }
    setProducts(initialProducts);
    }

    const setFilterClass = () => {
    if(!iconFilter) return;
    if( iconFilter.current.classList.contains('filter-clip')){
        setClassFilter('filter-container');
    } else{
        setClassFilter('filter-container filter-clip');
    }
    }

  return {
    inputSearch,
    iconFilter,
    helpIcon,
    handleCarList,
    classCarDiv,
    setClassCarDiv,
    classFilter,
    classHelpIcon,
    setClassHelpIcon,
    totalElementsCar,
    searchKeywords,
    searchKeywordsOnClick,
    setFilterClass,
    stateCar
  }
}
