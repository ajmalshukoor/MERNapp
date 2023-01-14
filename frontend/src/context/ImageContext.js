import { createContext, useReducer, useState } from "react";

export const ImageContext = createContext();

export function ImageContextProvider({children}){
    const [state, setState] = useState([{
        createdAt: "2023-01-13T02:10:43.025Z",
        imgUrl: "uploads\\1673575843011.png",
        item_id: "63c0985b10c7ab",
        updatedAt: "2023-01-13T02:10:43.025Z",
        __v: 0,
        _id: "4ca24cd33f8"
    }])
    const [allImages, setAllImages] = useState(null)
    return(
        <ImageContext.Provider value={{state, setState, allImages, setAllImages}}>
            {children}
        </ImageContext.Provider>
    )
}