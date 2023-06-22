import { useEffect } from "react";
import { Link } from "react-router-dom";
import { setIconHelp } from "../helpers";
import { CarouselArticle, HelpComponent, IconsNavbar, MenuCarList, ShowItem } from "../components";
import { useArticlePage } from "./hooks";
import '../CSS/articlePage.css';


export const ArticlePage = () => {

  const { handleCarList, animeUrl, classCarDiv, setClassCarDiv, classHelpIcon,
    setClassHelpIcon, classBtn, setClassBtn, classIcon, classIcon2, helpIcon,
    totalElementsCar, executeFn, elementsCarousel, setClassIconArrow, setClassIconArrow2,
    removeClassIconArrow, removeClassIconArrow2, translateCarousel, item,
    divGrande, stateCar } = useArticlePage();


  useEffect( () => {
    stateCar.length == 0 && setClassCarDiv('car-counter hide-counter');
  },[]);

  useEffect( () => {
    item.cantidad < 1 ? setClassBtn('disabled') : setClassBtn('');
  }, [item.cantidad < 1] );

  useEffect( () => {
    stateCar.length > 0 
      ? setClassCarDiv('car-counter') 
      : setClassCarDiv('car-counter hide-counter');
  },[stateCar]);

  const propsCarousel = { removeClassIconArrow, removeClassIconArrow2, 
      translateCarousel, setClassIconArrow, setClassIconArrow2, 
      elementsCarousel, classIcon, classIcon2, divGrande
    }


  return (
    <>
      <nav className="navbar">
        <div className="padding-div"><Link to={`../shop/${animeUrl}`}><ion-icon name="arrow-back-outline"></ion-icon></Link><h1>Regresar</h1></div>
        <IconsNavbar 
          setIconHelp={() => setIconHelp(helpIcon, setClassHelpIcon)} 
          classCarDiv={classCarDiv} 
          totalElementsCar={totalElementsCar} 
          handleCarList={handleCarList}
        />
        <MenuCarList/>
        <HelpComponent helpIcon={helpIcon} classIcon={classHelpIcon}/>
      </nav>

      <div className="container-article-page article" >
        <ShowItem item={item} executeFn={executeFn} classBtn={classBtn}/>
        <CarouselArticle propsCarousel={propsCarousel}/>
      </div>
      
    </>
  )
}
