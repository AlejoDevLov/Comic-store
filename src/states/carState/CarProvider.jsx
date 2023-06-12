import { useReducer } from "react";
import { carContext, reducer } from "./";

// crear y exportar providerContext
export const CarProvider = ({ children }) => {

    const initialState = [];

    // Hook useReducer, que manerjará el estado
    const [stateCar, dispatchCar] = useReducer(reducer, initialState);

    return (
        <carContext.Provider value = {{ stateCar, dispatchCar }}>
            { children }
        </carContext.Provider>
    )
}