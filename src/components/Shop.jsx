import { useEffect } from 'react';
import { Article } from './Article';
import { MenuCarList } from './MenuCarList';
import { useShop } from './hooks/useShop';
import '../CSS/article.css';


export const Shop = () => {

  const {
    onReduceQuantity,
    products,
  } = useShop();
  
    // if(JSON.parse(localStorage.getItem(anime))){
    //     console.log('entrando');
    //     setProducts(JSON.parse(localStorage.getItem(anime)));
    //     console.log(JSON.parse(localStorage.getItem(anime)))
    //     }

  return (
    <>
      <MenuCarList/>
      <div className="article">
          {
            ( products.length === 0) 
              ? <div className='container-empty-results'><img src='../../src/images/no-data.svg' width='150px' alt='no data found'/><br/>
                <h1>No se han encontrado Resultados</h1>
              </div>
              : products.map( (element, index) => (
                <Article element={ element } onSetState={onReduceQuantity} key={index}/>
              ))
          }
      </div>
    </>
  )
}
