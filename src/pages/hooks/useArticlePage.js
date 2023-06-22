import { useContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../../helpers";
import { carContext, carListContext, listContext } from "../../states";


const initialClass = '';

export const useArticlePage = () => {

    const { handleCarList } = useContext(carListContext);
    const { stateCar, dispatchCar } = useContext( carContext );
    const { animeUrl, initialArray, globalProducts, setGlobalProducts } = useContext(listContext);

    const [classCarDiv, setClassCarDiv] = useState('car-counter');
    const [classHelpIcon, setClassHelpIcon] = useState('container-help');
    const [classBtn, setClassBtn] = useState(initialClass);
    const [classIcon, setClassIcon] = useState('');
    const [classIcon2, setClassIcon2] = useState('');
    const [counter, setCounter] = useState(0);

    const {itemName} = useParams();

    const item = getItemById( globalProducts, itemName);

    const helpIcon = useRef();
    const divGrande = useRef();

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
    setGlobalProducts( [...globalProducts].map( element => {
        if( element.anime === anime && element.id === id){
        element.cantidad -= 1;
        }
        return element;
    }))
    }
    

    const executeFn = (anime, id) => {
        addArticle();
        onSetState(anime, id)
    }

    const elementsCarousel = globalProducts.filter( element => (
        element.keyWords.includes(item.keyWords[0])
    ));


    const setClassIconArrow = () => {
        setClassIcon('mousedown-icons');
        if(counter === 11) setCounter(0);
        setCounter( (counter) => ++counter);
    }

    const removeClassIconArrow = () => {
        setClassIcon('');
    }

    const setClassIconArrow2 = () => {
        setClassIcon2('mousedown-icons');
        if(counter === 0 ) setCounter(11);
        setCounter( (counter) => --counter);
    }

    function translateCarousel(){
        const totalTranslate = 340*counter;
        divGrande.current.style.transform=`translateX(-${totalTranslate}px)`;
    }

    const removeClassIconArrow2 = () => {
        setClassIcon2('');
    }


    return {
        handleCarList,
        animeUrl,
        classCarDiv,
        setClassCarDiv,
        classHelpIcon,
        setClassHelpIcon,
        classBtn,
        setClassBtn,
        classIcon,
        classIcon2,
        helpIcon,
        totalElementsCar,
        executeFn,
        elementsCarousel,
        setClassIconArrow,
        setClassIconArrow2,
        removeClassIconArrow,
        removeClassIconArrow2,
        translateCarousel,
        item,
        divGrande,
        stateCar
    }

}