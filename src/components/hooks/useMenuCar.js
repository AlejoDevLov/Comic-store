import { useContext } from "react";
import { carContext, carListContext, listContext } from "../../states";

export const useMenuCar = () => {

    const { stateCar, dispatchCar } = useContext(carContext);
    const { classCarList, itemCarList } = useContext(carListContext);
    const { setProducts, products, animeUrl } = useContext(listContext);


    let totalFormated;
    if(stateCar.length > 0){
        let total = stateCar.reduce( (add, item) =>{ 
        return add + Number(item.precio.replace(/[^0-9.-]+/g,""))*item.units;
        }, 0);

        total *= 1000;
        totalFormated = total.toLocaleString('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });
    }
    const total = totalFormated ?? '$ 0.00';


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
        localStorage.setItem(animeUrl, JSON.stringify(products));
    }

    return {
        classCarList,
        itemCarList,
        total,
        removeItem,
        stateCar
    }
}