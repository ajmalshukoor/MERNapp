import { createContext, useReducer, useState } from "react";

export const ImageContext = createContext();

export function ImageContextProvider({children}){
    const [state, setState] = useState([])

    return(
        <ImageContext.Provider value={{state, setState}}>
            {children}
        </ImageContext.Provider>
    )
}