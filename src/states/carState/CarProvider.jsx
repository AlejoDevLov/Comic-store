import { useReducer } from "react";
import { carContext, reducer } from "./";

// crear y exportar providerContext
export const CarProvider = ({ children }) => {

    const initialState = [];

    // recuperar carrito del localStorage
    const init = () => {
        const itemsCar = JSON.parse(localStorage.getItem('stateCar'));
        return itemsCar || [];
    }

    // Hook useReducer, que manerjará el estado
    const [stateCar, dispatchCar] = useReducer(reducer, initialState, init);

    return (
        <carContext.Provider value = {{ stateCar, dispatchCar }}>
            { children }
        </carContext.Provider>
    )
}