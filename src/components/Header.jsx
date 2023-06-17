import { carContext } from '../states/carState';
import { useContext, useEffect, useRef, useState } from 'react';
import { carListContext } from '../states/listCarState';
import { listContext } from '../states/shopListState/listContext';
import { FilterMenu } from './FilterMenu';
import { HelpComponent } from './HelpComponent';
import { IconsNavbar } from './IconsNavbar';
import { setIconHelp } from '../helpers';
import '../CSS/header.css';


export const Header = () => {

  const { stateCar } = useContext( carContext );
  const { handleCarList } = useContext(carListContext);
  const { setProducts, initialProducts } = useContext(listContext);

  const [classCarDiv, setClassCarDiv] = useState('car-counter');
  const [classFilter, setClassFilter] = useState('filter-container');
  const [classHelpIcon, setClassHelpIcon] = useState('container-help');

  const inputSearch = useRef();
  const iconFilter = useRef();
  const helpIcon = useRef();

  useEffect( () => {
    stateCar.length == 0 && setClassCarDiv('car-counter hide-counter');
  },[]);

  useEffect( () => {
    stateCar.length > 0 
      ? setClassCarDiv('car-counter') 
      : setClassCarDiv('car-counter hide-counter');
  },[stateCar]);

  const totalElementsCar = stateCar.reduce( (prevValue, item) => {
      return prevValue + item.units;
  }, 0); 

  const searchKeywords = (e) => {
    // console.log(e.key);
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


  return (
    <>
        <nav className="navbar">
            <div className='filter'><img src="../../icons/Bars3BottomLeft.svg" alt="menu-icon" height="50%" onClick={setFilterClass}/></div>
            <div className="search"><input type="text" placeholder='Buscar...' onKeyDown={ searchKeywords } ref={inputSearch}/><img src="../../icons/MagnifyingGlass.svg" alt="icon-search" height="50%" onClick={ searchKeywordsOnClick }/></div>
            <IconsNavbar 
              setIconHelp={() => setIconHelp(helpIcon, setClassHelpIcon)} 
              classCarDiv={classCarDiv} 
              totalElementsCar={totalElementsCar} 
              handleCarList={handleCarList}
            />
        </nav>
        <FilterMenu refClass={iconFilter} classFilter={classFilter}/>
        <HelpComponent helpIcon={helpIcon} classIcon={classHelpIcon}/>
    </>
  )
}