import {useState} from 'react'
import DeleteConfirm from "./DeleteConfirm"
import formatDistance from 'date-fns/formatDistance'

export default function TravelDetails({data}){

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return(
        <div className="card card-custom mt-5 w-100 border-0 shadow p-3 mb-5 bg-body-tertiary rounded" style={{width: "18rem"}}>
            <div className="card-body">
                <div className="row align-items-center">
                    <div className="col-11">
                        <h5 className="card-title">{data.name}</h5>
                        {/* <h6 className="card-subtitle mb-2 text-muted">{data.date.split("T")[0]}</h6> */}
                        <h6 className="card-subtitle mb-2 text-muted">{formatDistance(new Date(data.date), new Date(), {addSuffix: true})}</h6>
                    </div>
                    <span className="col-1 material-symbols-outlined py-1 px-0 text-center delete-custom" onClick={handleShow}>Delete</span>
                </div>
                <p className="card-text mt-3">{data.description.slice(0,70)+"...."}</p>
                {/* <a href="#" className="card-link">Card link</a> */}
                <DeleteConfirm show={show} handleClose={handleClose} handleShow={handleShow} data={data}/>
            </div>
        </div>
        )
}