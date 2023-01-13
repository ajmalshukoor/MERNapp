import { createContext, useReducer, useState } from "react";

export const ImageContext = createContext();

export function ImageContextProvider({children}){
    const [state, setState] = useState([])
    const [allImages, setAllImages] = useState()
    return(
        <ImageContext.Provider value={{state, setState, allImages, setAllImages}}>
            {children}
        </ImageContext.Provider>
    )
}