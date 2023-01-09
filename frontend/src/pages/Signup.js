import { useState } from "react"
import {useSignup} from "../hooks/useSignup"

export default function Signup(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }


    return(
        <div className="row justify-content-center align-items-center">
            <form className="auth-custom card px-5 pb-5 pt-3 shadow text-secondary" onSubmit={handleSubmit}>
                <h4 className="text-center mb-5">Sign up</h4>
                <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email address</label>
                <input 
                  type="email"
                  className="form-control"
                  aria-describedby="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                </div>
                <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                </div>
                <button type="submit" className="btn btn-outline-info mt-4 fs-6 fw-bold" disabled={isLoading}>Sign up</button>
                {error && <div className="mt-3 alert alert-danger">{error}</div>}
            </form>
        </div>
      )
}