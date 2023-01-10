import {Button, Modal} from 'react-bootstrap'
import useTravelContext from "../hooks/useTravelContext"
import { useAuthContext } from "../hooks/useAuthContext"

export default function DeleteConfirm({show, handleClose, data}) {
    const {dispatch} = useTravelContext()
    const {user} = useAuthContext()

    const handleClick = async () => {
        if(!user) return

        const response = await fetch('/api/travelDiary/'+data._id, {
            method:'DELETE',
            headers: {'Authorization': `Bearer ${user.token}`}
        })
        const json = await response.json();

        if(response.ok){
            dispatch({type: 'DELETE_ONE', payload: json})
        }
    }

    return(
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Title className="mx-auto mt-3 text-secondary">Confirm Delete</Modal.Title>
                <Modal.Body>Do you want to delete this item?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleClick}>
                    Confirm
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
