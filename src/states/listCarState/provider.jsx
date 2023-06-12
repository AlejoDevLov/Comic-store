import { useCallback, useRef, useState } from "react"
import { carListContext } from "."


export const ListCarProvider = ({ children }) => {

    const [classCarList, setClassCarList] = useState('container-list');

    const itemCarList = useRef();

    const handleCarList = useCallback( () => {
        if( itemCarList ){
            if(itemCarList.current.classList.contains('hide-container-car-list')){
                setClassCarList('container-list');
                return;
            } else{
                setClassCarList('container-list hide-container-car-list');
                return;
            }
        }
        console.log(itemCarList.current)
      },[]);


    return (
        <carListContext.Provider value = {{ handleCarList, classCarList, itemCarList }}>
            {
                children
            }
        </carListContext.Provider>
    )
}