import '../CSS/menuCarList.css';
import { useMenuCar } from './hooks/useMenuCar';


export const MenuCarList = () => {

  const {
    classCarList,
    itemCarList,
    total,
    removeItem,
    stateCar
  } = useMenuCar();

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
                  <div className='subtract-icon-car'><ion-icon name="remove-circle-outline" onClick={ () => removeItem(item.anime, item.id, item.anime) }></ion-icon></div>
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
