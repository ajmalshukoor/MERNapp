import {Link} from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
import {useAuthContext} from '../hooks/useAuthContext'


export default function Navbar() {
    const {logout} = useLogout()
    const {user} = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return(
        <header>
            <nav className="navbar shadow nav-custom position-fixed w-100 z-1">
                <Link className="navbar-brand fw-bold fs-4 ms-5 text-secondary" to="/">Travel Diary</Link>
            {!user &&
            <div className="me-1">
                <Link className="navbar-brand fw-semibold fs-5 text-secondary" to="/login">Login</Link>
                <Link className="navbar-brand fw-semibold fs-5 text-secondary" to="/signup">Signup</Link>
            </div>
            }
            {user &&
            <div className="row align-items-center text-center me-1">
                <Link className="col navbar-brand fw-semibold fs-5  text-secondary">{window.innerWidth < 500 ? (user.email).slice(0,5)+"..." : user.email}</Link>
                <span className="col navbar-brand fw-semibold fs-6  text-secondary btn btn-info" onClick={handleClick}>Logout</span>
            </div>
            }
            </nav>
        </header>
    )
}