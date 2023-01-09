import { useAuthContext } from "./useAuthContext";
import useTravelContext from "./useTravelContext";

export const useLogout = () => {
    const {dispatch} = useAuthContext();
    const {dispatch: dispatchTravel} = useTravelContext();

    const logout = () => {
        localStorage.removeItem('user')
        dispatch({type: 'LOGOUT'})
        dispatchTravel({type: 'SET_ALL', payload: null})
    }

    return {logout}
}