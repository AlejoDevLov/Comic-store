import { useState } from "react"
import { listContext } from "./listContext"


export const ListProvider = ({ children }) => {

    const [initialProducts, setInitialProducts] = useState([]);
    const [animeUrl, setAnimeUrl] = useState( localStorage.getItem('url') || '');
    const [products, setProducts] = useState(initialProducts || []);

    
  return (
    <listContext.Provider value ={{ setProducts, products, setInitialProducts, initialProducts, setAnimeUrl, animeUrl }}>
        {
            children
        }
    </listContext.Provider>
  )
}
