import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import DeleteConfirm from "./DeleteConfirm"
import formatDistance from 'date-fns/formatDistance'
import { useAuthContext } from "../hooks/useAuthContext";
import useTravelContext from '../hooks/useTravelContext';
import useImageContext from '../hooks/useImageContext';


export default function TravelDetails({data}){

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const {dispatch} = useTravelContext()
    const {state, setState} = useImageContext()
    const {user} = useAuthContext()

    // const handleClick = async () => {
    //     const response = await fetch(`/api/travelDiary/${data._id}`, {
    //         headers: {'Authorization': `Bearer ${user.token}`},
    //     })
    //     const json = await response.json()
    //     if(response.ok){
    //         dispatch({type:'SHOW_ONE', payload: json})
    //     } 
    // }
    const handleClick = async () => {
        const response = await fetch(`/api/travelDiary/${data._id}`, {
            headers: {'Authorization': `Bearer ${user.token}`},
        })
        const json = await response.json()
        if(response.ok){
            dispatch({type:'SHOW_ONE', payload: json})

            const imgResponse = await fetch(`/api/image/${data._id}/`, {
                headers: {'Authorization': `Bearer ${user.token}`}
            })
            const imgJson = await imgResponse.json()
            setState(imgJson)
        } 
    }

    return(
        <div className="card card-custom mt-5 w-100 border-0 shadow p-3 mb-5 bg-body-tertiary rounded" style={{width: "18rem"}}>
            <div className="card-body">
                <div className="row align-items-center">
                    <div className="col-10">
                        <h5 className="card-title">{data.name}</h5>
                        {/* <h6 className="card-subtitle mb-2 text-muted">{data.date.split("T")[0]}</h6> */}
                        <h6 className="card-subtitle mb-2 text-muted">{formatDistance(new Date(data.date), new Date(), {addSuffix: true})}</h6>
                    </div>
                    <span className="col-1 mb-3 ms-3 material-symbols-outlined py-1 px-0 text-center delete-custom" onClick={handleShow}>Delete</span>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <p className="card-text mt-3">{data.description.slice(0,70)+"...."}</p>
                    <Link className="material-symbols-outlined text-secondary arrow-custom text-decoration-none mt-5 ms-5" to={`/${data._id}`} onClick={handleClick}>arrow_forward</Link>
                </div>
                {/* <a href="#" className="card-link">Card link</a> */}
                <DeleteConfirm show={show} handleClose={handleClose} handleShow={handleShow} data={data}/>
            </div>
        </div>
        )
}
