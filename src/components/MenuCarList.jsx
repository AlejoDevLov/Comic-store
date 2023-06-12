import { useContext, useEffect, useMemo, useRef } from 'react';
import '../CSS/menuCarList.css';
import { carContext } from '../states/carState/carContext';
import { carListContext } from '../states/listCarState';
import { listContext } from '../states/shopListState/listContext';


export const MenuCarList = () => {

  const { stateCar, dispatchCar } = useContext(carContext);
  const { classCarList, itemCarList } = useContext(carListContext);
  const { setProducts, products } = useContext(listContext);

  
  let totalFormated;
  if(stateCar.length > 0){
    let total = stateCar.reduce( (add, item) =>{ 
      return add + Number(item.precio.replace(/[^0-9.-]+/g,""))*item.units;
    }, 0);

    total *= 1000;
    totalFormated = total.toLocaleString('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });
    // console.log(totalFormated);
  }
  const total = totalFormated ?? '$ 0.00';

  // console.log(stateCar);

  const removeItem = (name, id) => {
    const action = {
      type: '[TODO] delete article',
      payload: {
        anime: name,
        id,
      }
    }
    dispatchCar( action );

    setProducts( products.filter( product => {

        if( product.anime === name && product.id === id ){
          product.cantidad += 1;
        }
        return product;
      })
      ) 
  }



  return (
    <>
      <div className={ classCarList } ref={ itemCarList }>
          {
            stateCar.map( (item, index) => (
              <div key={index}>
                <div className='item-container-car' >
                  <div className='img-car'><img src={item.url} alt={item.name} /></div>
                  <div className='title-car'>{item.name}</div>
                  <div className='price-car'>{item.precio}</div>
                  <div className='subtract-icon-car'><ion-icon name="remove-circle-outline" onClick={ () => removeItem(item.anime, item.id) }></ion-icon></div>
                  <div className="units">{item.units}</div>
                </div>
                <hr/>
              </div>
            ))
          }
        <div className="go-to-pay"><pre><h3>Ir a Pagar  </h3></pre><ion-icon name="card-outline"></ion-icon></div>
        <div className="total-car"><div className="total-text-car">TOTAL: </div><div className="total-price-car">{total}</div></div>
      </div>
    </>
  )
}
