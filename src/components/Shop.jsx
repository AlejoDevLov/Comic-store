import { useCallback, useMemo, useEffect, useContext } from 'react';
import { allAnimes } from '../helpers';
import { Article } from './Article';

import '../CSS/article.css';
import { useParams } from 'react-router-dom';
import { MenuCarList } from './MenuCarList';
import { listContext } from '../states/shopListState/listContext';


export const Shop = () => {

  // desestructuracion de 'anime' en params.anime
  const { anime } = useParams();

  const { setProducts, products, setInitialProducts } = useContext(listContext);
  
  const productos = useMemo(() => { 
    let productos = allAnimes;

    switch(anime){
        case 'demon-slayer':
          productos = productos.filter( item => {
            return item.anime === 'demon slayer';
          });
          return productos;

        case 'dragon-ball':
          productos = productos.filter( item => {
            return item.anime === 'Dragon ball';
          });
          return productos;

        case 'mario':
          productos = productos.filter( item => {
            return item.anime === 'Mario';
          } );
          return productos;

        case 'sevenDeadly':
          productos = productos.filter( item => {
            return item.anime === 'seven deadly';
          } );
          return productos;

        case 'los-simpsons':
          productos = productos.filter( item => {
            return item.anime === 'los Simpson';
          } );
          return productos;

        default:
          console.error('Hubo un error en la ruta');      
    }
  },[anime]);

  useEffect( () => {
    setInitialProducts(productos);
  },[anime]);


  const onReduceQuantity  = useCallback( (anime, id) => {
        setProducts( products.map( element => {
          if( element.anime === anime && element.id === id){
            element.cantidad -= 1;
          }
          return element;
        }))        
  },[products]);
  

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
