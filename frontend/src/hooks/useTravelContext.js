import { useContext } from "react";
import { TravelContext } from "../context/TravelContext";

export default function useTravelContext() {
    const context = useContext(TravelContext)

    if(!context){
        throw Error('useTravelContext must be used inside a TravelContextProvider')
    }
    return context
}