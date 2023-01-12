import { createContext, useReducer } from "react";

export const ImageContext = createContext();

export function imageReducer(state, action){
    switch(action.type){
        case 'SET_IMAGE':
            return {
                imageContent: action.payload
            }
        // case 'DELETE_ONE':
        //     return {
        //         travelContent: state.travelContent.filter(t => t._id !== action.payload._id)
        //     }
        default:
            return {imageContent: null}

    }
}

export function ImageContextProvider({children}){
    const [state, dispatch] = useReducer(imageReducer, {
        imageContent: null
    })

    return(
        <ImageContext.Provider value={{...state, dispatch}}>
            {children}
        </ImageContext.Provider>
    )
}