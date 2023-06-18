const initialState = [];

// Reducer que se pasará como argumento al useReducer
export const reducer = ( state = initialState, action = {} ) => {

    switch(action.type) {
        case '[TODO] add article':
            if( state.includes(action.payload) ){
                state.map( item => {
                    if (item.id === action.payload.id && item.anime === action.payload.anime){
                        if( !item.units ) item.units = 1;
                        if ( item.units ) item.units += 1;
                    } 
                    return item;
                })
                localStorage.setItem('stateCar', JSON.stringify(state));
                return [ ...state];
            } else {
                action.payload.units = 1;
                const newState = [...state, action.payload ];
                localStorage.setItem('stateCar', JSON.stringify(newState));
                return newState;
            }
                                
        case '[TODO] delete article':
            state.map( (item) => {
                if( item.anime === action.payload.anime && item.id === action.payload.id ){
                    if ( item.units > 1 ){
                        item.units -= 1;
                        return;
                    } 
                    else{
                        state = state.filter( item2 => {
                            return !(item2.anime === action.payload.anime && item2.id === action.payload.id );
                    })
                    }
                }
            });
            localStorage.setItem('stateCar', JSON.stringify(state));
            return [...state ]

        default:
            return [...state];
    }
}