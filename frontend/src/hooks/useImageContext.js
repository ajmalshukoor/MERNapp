import { useContext } from "react";
import { ImageContext } from "../context/ImageContext";

export default function useImageContext() {
    const context = useContext(ImageContext)

    if(!context){
        throw Error('useTravelContext must be used inside a TravelContextProvider')
    }
    return context
}