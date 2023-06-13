import { useContext, useEffect, useState } from "react";
import { carContext } from "../states/carState";
import { SizeTShirt } from "./SizeTShirt";
import { Link } from "react-router-dom";

const initialClass = '';

export const Article = ({ element, onSetState }) => {

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

  useEffect( () => {
    isAvailable ? setClassBtn('disabled') : setClassBtn('');
  }, [isAvailable] );


  return (
      <div className="card animate__animated animate__slideInUp" key={ id }>
          <div className='image'><Link to={`../articlePage/${id}-${name.replace(/\s/g,'-')}`}><img src={url} alt={anime} loading="lazy"/></Link></div>
          <div className='title'><h2>{name}</h2></div>
            {
              element?.talla && <SizeTShirt sizes={ element.talla }/> 
            }
          <div className='price'>{precio}</div>
          <div className="cantidad">Cantidad disponible: <span className="color-cantidad">{ cantidad }</span></div>
          <div className='button'>
              <button 
                disabled={ isAvailable } 
                className={ classBtn }
                onClick={ () => executeFn(anime,id) }
                >Comprar
              </button>
          </div>
      </div>
  )
}
