import { createContext, useReducer } from "react";

export const TravelContext = createContext();

export function travelReducer(state, action){
    switch(action.type){
        case 'SET_ALL':
            return {
                travelContent: action.payload
            }
        case 'SHOW_ONE':
            return {
                travelContent: [action.payload]
            }
        case 'CREATE_ONE':
            if(!state.travelContent){
                return {
                    travelContent: [action.payload]
                }
            }
            return {
                travelContent: [action.payload, ...state.travelContent]
            }
        case 'DELETE_ONE':
            return {
                travelContent: state.travelContent.filter(t => t._id !== action.payload._id)
            }
        default:
            return {travelContent: null}

    }
}

export function TravelContextProvider({children}){
    const [state, dispatch] = useReducer(travelReducer, {
        travelContent: null
    })

    return(
        <TravelContext.Provider value={{...state, dispatch}}>
            {children}
        </TravelContext.Provider>
    )
}