import {useState} from 'react'
import DeleteConfirm from "./DeleteConfirm"
import { formatDistance, subDays } from 'date-fns'

export default function TravelDetails({data}){

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return(
        <div className="card card-custom mt-5 ms-4 w-100 border-0 shadow p-3 mb-5 bg-body-tertiary rounded" style={{width: "18rem"}}>
            <div className="card-body">
                <div className="row align-items-center">
                    <div className="col-11">
                        <h5 className="card-title">{data.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{data.createdAt.split("T")[0]}</h6>
                    </div>
                    <span className="col-1 material-symbols-outlined py-1 px-0 text-center delete-custom" onClick={handleShow}>Delete</span>
                </div>
                <p className="card-text mt-3">{data.description}</p>
                {/* <a href="#" className="card-link">Card link</a> */}
                <DeleteConfirm show={show} handleClose={handleClose} handleShow={handleShow} data={data}/>
            </div>
        </div>
        )
}