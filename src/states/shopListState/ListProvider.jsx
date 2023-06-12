import { useEffect, useState } from "react"
import { listContext } from "./listContext"



export const ListProvider = ({ children }) => {

    const [initialProducts, setInitialProducts] = useState([]);
    const [products, setProducts] = useState(initialProducts);

    useEffect( () => {
        setProducts(initialProducts);
    },[initialProducts]);

    
  return (
    <listContext.Provider value ={{ setProducts, products, setInitialProducts, initialProducts }}>
        {
            children
        }
    </listContext.Provider>
  )
}
