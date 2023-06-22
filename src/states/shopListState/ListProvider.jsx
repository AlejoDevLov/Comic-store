import { useEffect, useState } from "react"
import { listContext } from "./listContext"
import { allAnimes } from "../../helpers";

const initialArray1 = [...allAnimes];


export const ListProvider = ({ children }) => {

  const productsStoraged = JSON.parse(localStorage.getItem('productos'));
  const animeStoraged = localStorage.getItem('currentAnime');

  const [currentAnime, setCurrentAnime] = useState(animeStoraged || '');
  const [initialArray, setInitialArray] = useState([...initialArray1]);
  const [globalProducts, setGlobalProducts] = useState( productsStoraged || [...initialArray1]);
  const [animeUrl, setAnimeUrl] = useState('');
  const [products, setProducts] = useState(initialArray);

  useEffect( () => {
    localStorage.setItem('productos', JSON.stringify(globalProducts));
  }, [globalProducts]);

  useEffect( () => {
    localStorage.setItem('currentAnime', currentAnime);
  }, [currentAnime])

      
  return (
    <listContext.Provider value ={{ setProducts, products, setGlobalProducts, globalProducts,
                                    setAnimeUrl, animeUrl, initialArray, setInitialArray,
                                    currentAnime, setCurrentAnime}}>
        {
            children
        }
    </listContext.Provider>
  )
}
