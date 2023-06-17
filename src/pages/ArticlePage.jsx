import { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { allAnimes, getItemById, setIconHelp } from "../helpers";
import { CarouselArticle, HelpComponent, IconsNavbar, MenuCarList, ShowItem } from "../components";

import '../CSS/articlePage.css';
import { carContext, carListContext, listContext  } from "../states";

const initialClass = '';


export const ArticlePage = () => {

  const { handleCarList } = useContext(carListContext);
  const { stateCar, dispatchCar } = useContext( carContext );
  const { setProducts, animeUrl } = useContext(listContext);

  const [classCarDiv, setClassCarDiv] = useState('car-counter');
  const [classHelpIcon, setClassHelpIcon] = useState('container-help');
  const [classBtn, setClassBtn] = useState(initialClass);
  const [classIcon, setClassIcon] = useState('');
  const [classIcon2, setClassIcon2] = useState('');
  const [counter, setCounter] = useState(0);

  const {itemName} = useParams();
  
  const item = getItemById(itemName);

  const helpIcon = useRef();
  const divGrande = useRef();

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

  const totalElementsCar = stateCar.reduce( (prevValue, item) => {
    return prevValue + item.units;
  }, 0); 

  const addArticle = () => {
    const action = {
      type: '[TODO] add article',
      payload: item,
    }

    dispatchCar(action);
  }

  const onSetState = (anime, id) => {
    setProducts( allAnimes.map( element => {
      if( element.anime === anime && element.id === id){
        element.cantidad -= 1;
        console.log('entrando')
      }
      return element;
    }))
  }

  const executeFn = (anime, id) => {
    addArticle();
    onSetState(anime, id)
  }

  const elementsCarousel = allAnimes.filter( element => (
      element.keyWords.includes(item.keyWords[0])
    ));


    const setClassIconArrow = () => {
      setClassIcon('mousedown-icons');
      if(counter === 11) return;
      setCounter( (counter) => ++counter);
    }

    const removeClassIconArrow = () => {
      setClassIcon('');
    }

    const setClassIconArrow2 = () => {
      setClassIcon2('mousedown-icons');
      if(counter === 0 ) return;
      setCounter( (counter) => --counter);
    }

    function translateCarousel(){
      // console.log(counter);
      const totalTranslate = 340*counter;
      divGrande.current.style.transform=`translateX(-${totalTranslate}px)`;
    }

    const removeClassIconArrow2 = () => {
      setClassIcon2('');
    }

    const propsCarousel = {
      removeClassIconArrow,
      removeClassIconArrow2,
      translateCarousel,
      setClassIconArrow,
      setClassIconArrow2,
      elementsCarousel,
      classIcon,
      classIcon2,
      divGrande
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
