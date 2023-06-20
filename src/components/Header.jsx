import { useEffect } from 'react';
import { FilterMenu } from './FilterMenu';
import { HelpComponent } from './HelpComponent';
import { IconsNavbar } from './IconsNavbar';
import { setIconHelp } from '../helpers';
import { useHeader } from './hooks/useHeader';
import '../CSS/header.css';


export const Header = () => {

  const {
    inputSearch, iconFilter, helpIcon,
    handleCarList, classCarDiv, setClassCarDiv,
    classFilter, classHelpIcon, setClassHelpIcon,
    totalElementsCar, searchKeywords, searchKeywordsOnClick,
    setFilterClass, stateCar
  } = useHeader();

  useEffect( () => {
    stateCar.length == 0 && setClassCarDiv('car-counter hide-counter');
  },[]);

  useEffect( () => {
    stateCar.length > 0 
      ? setClassCarDiv('car-counter') 
      : setClassCarDiv('car-counter hide-counter');
  },[stateCar]);


  return (
    <>
        <nav className="navbar">
            <div className='filter'><img src="/icons/Bars3BottomLeft.svg" alt="menu-icon" height="50%" onClick={setFilterClass}/></div>
            <div className="search"><input type="text" placeholder='Buscar...' onKeyDown={ searchKeywords } ref={inputSearch}/><img src="/icons/MagnifyingGlass.svg" alt="icon-search" height="50%" onClick={ searchKeywordsOnClick }/></div>
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