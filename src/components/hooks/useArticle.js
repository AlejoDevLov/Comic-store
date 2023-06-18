import { useContext, useState } from "react";
import { carContext } from "../../states/carState";



const initialClass = '';

export const useArticle = (element,onSetState) => {

    const [classBtn, setClassBtn] = useState(initialClass);

    const { url, id, name, precio, anime, cantidad } = element;

    const { dispatchCar } = useContext(carContext)
    
    const addArticle = () => {
        const action = {
        type: '[TODO] add article',
        payload: element,
        }

        dispatchCar(action);
    }

    const executeFn = (anime, id) => {
        addArticle();
        onSetState(anime, id)
    }

    const isAvailable = ( cantidad < 1 );

    return {
        classBtn,
        setClassBtn,
        url,
        id,
        anime,
        precio,
        name,
        executeFn,
        isAvailable,
        cantidad,
  }
}
