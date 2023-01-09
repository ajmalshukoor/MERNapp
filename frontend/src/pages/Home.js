import { useEffect, useState } from "react";
import TravelDetails from "../components/TravelDetails";
import TravelForm from "../components/TravelForm";
import useTravelContext from "../hooks/useTravelContext"
import { useAuthContext } from "../hooks/useAuthContext";

export default function Home(){
    const {travelContent, dispatch } = useTravelContext()
    const {user} = useAuthContext()
      
    useEffect(() => {
        const fetchTravelContent = async () => {
            const response = await fetch('/api/travelDiary/', {
                headers: {'Authorization': `Bearer ${user.token}`},
            })
            const json = await response.json()

            if(response.ok){
                dispatch({type:'SET_ALL', payload: json})
            } 
        }
        if(user){
                fetchTravelContent()
        }
    }, [dispatch, user])

    return(
        <div className="row">
            <div className="col cards-custom">
                {travelContent && travelContent.map(each => <TravelDetails data={each} key={each._id}/>)}
                {(!travelContent || travelContent.length === 0)  && <h4 className="mt-5 text-center">Nothing to show!</h4>}
            </div>
            <TravelForm/>
        </div>
    )
}