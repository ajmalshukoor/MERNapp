import {useState} from "react";
import useTravelContext from "../hooks/useTravelContext";
import { useAuthContext } from "../hooks/useAuthContext";
import DatePicker from "react-datepicker"

export default function TravelForm() {
    const [date, setDate] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [error, setError] = useState(null);
    const [emptyField, setEmptyField] = useState([]);
    const {dispatch} = useTravelContext();
    const {user} = useAuthContext();

    const formData = new FormData()
    formData.append('date', date)
    formData.append('name', name)
    formData.append('description', description)
    formData.append('image', image)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!user) {
            setError('You must be logged in')
        }

        const response = await fetch('/api/travelDiary/', { 
            method: 'POST',
            body: formData,
            headers:{
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()
        if(!response.ok){
            setError(json.error)
            console.log(json.emptyFields)
            setEmptyField(json.emptyFields)
        }
        if(response.ok){
            dispatch({type:"CREATE_ONE", payload: json})
            setError(null)
            setName('')
            setDescription('')
            setEmptyField([])
        }
    }
    return(
        <form className="col-sm-12 col-md-6 p-5 mt-5" encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="form-custom">
                <label htmlFor="date" className="form-label fs-6">When</label>
                <DatePicker
                 className={`w-100 form-control shadow p-3 mb-5 bg-body-tertiary rounded ${emptyField.includes('date') ? 'border border-danger':''}`}
                 showMonthDropdown
                 selected={date}
                 value={date}
                 name="date"
                 onChange={(e) => setDate(e)}
                />
            </div>
            <div className="form-custom">
                <label htmlFor="exampleInputEmail1" className="form-label fs-6">Where</label>
                <input 
                 type="text"
                 value={name} 
                 onChange={(e) => setName(e.target.value)}
                 className={`form-control shadow p-3 mb-5 bg-body-tertiary rounded ${emptyField.includes('name') ? 'border border-danger':''}`}
                 id="exampleInputEmail1" 
                 name="name"
                 aria-describedby="emailHelp"
                />
            </div>
            <div className="form-custom">
                <label htmlFor="exampleInputPassword1" className="form-label fs-6">How was the experience?</label>
                <textarea
                 type="text"
                 value={description}
                 onChange={(e) => setDescription(e.target.value)}
                 name="description"
                 className={`form-control shadow p-3 mb-5 bg-body-tertiary rounded ${emptyField.includes('description') ? 'border border-danger':''}`}
                 id="exampleInputPassword1"
                 />
            </div>
            <div className="form-custom">
                <label htmlFor="image" className="form-label fs-6">Upload your memories</label>
                <input
                type="file"
                title="Upload your memories"
                accept=".png, .jpg, .jpeg"
                name="image"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                className={`form-control shadow p-3 mb-5 bg-body-tertiary rounded ${emptyField.includes('description') ? 'border border-danger':''}`}
                />
            </div>

            {error && <div className="mb-2 fs-6 p-3 bg-danger bg-opacity-10 border border-danger rounded">{error}</div>}
            <button type="submit" value={description} className="btn btn-outline-info fs-6 fw-bolder">Add</button>
        </form>
    )
}