import useTravelContext from "../hooks/useTravelContext"

export default function TravelDetails({data}){

    const {dispatch} = useTravelContext()

    const handleClick = async () => {
        const response = await fetch('/api/travelDiary/'+data._id, {
            method:'DELETE'
        })
        const json = await response.json();

        if(response.ok){
            dispatch({type: 'DELETE_ONE', payload: json})
        }
    }

    return(
        <div className="card card-custom mt-5 ms-2 w-100 border-0 shadow p-3 mb-5 bg-body-tertiary rounded" style={{width: "18rem"}}>
            <div className="card-body">
                <div className="row align-items-center">
                    <div className="col-11">
                        <h5 className="card-title">{data.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{data.createdAt.split("T")[0]}</h6>
                    </div>
                    <span className="col-1 material-symbols-outlined py-1 px-0 text-center delete-custom" onClick={handleClick}>Delete</span>
                </div>
                <p className="card-text mt-3">{data.description}</p>
                {/* <a href="#" className="card-link">Card link</a> */}
            </div>
        </div>
        )
}