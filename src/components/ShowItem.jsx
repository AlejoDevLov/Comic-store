import { useEffect, useRef } from "react"


export const ShowItem = ({ item, executeFn, classBtn }) => {

    const itemCard = useRef();

    useEffect( () => {
            itemCard.current.scrollIntoView({behavior:'smooth', block: 'end'});
    },[item]);

    return (
        <div className="container-article-item" ref={itemCard}>
            <div className="img-article" ><img src={item.url} alt={item.name} loading="lazy"/></div>
            <div className="title-article"><h2>{item.name}</h2></div>
            <div className="description-article"><p>{item.descripcion}</p></div>
            {
                item.talla && <div className="talla-article"><p>Tallas disponibles: [{( " " + item.talla + " ")}]</p></div>
            }
            <div className="price-article">COP {item.precio}</div>
            <div className="cantidad cantidad-article">Cantidad disponible: <span className="color-cantidad">{ item.cantidad }</span></div>
            <div className="add-to-car">
                <button  
                disabled={ item.cantidad < 1 } 
                className={ classBtn }
                onClick={ () => executeFn(item.anime,item.id) }
                >Agregar al Carrito
                </button>
            </div>
        </div>

    )
}
