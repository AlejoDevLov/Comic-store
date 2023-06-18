import { useEffect } from "react";
import { SizeTShirt } from "./SizeTShirt";
import { Link } from "react-router-dom";
import { useArticle } from "./hooks/useArticle";


export const Article = ({ element, onSetState }) => {

  const { classBtn, setClassBtn,
    url, id, anime, precio, cantidad,
    name, executeFn, isAvailable 
  } = useArticle(element, onSetState);

  useEffect( () => {
    isAvailable ? setClassBtn('disabled') : setClassBtn('');
  }, [isAvailable] );

  return (
      <div className="card" key={ id }>
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
