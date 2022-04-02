import "../styles/auth.css"
import { useState } from "react"
import { SignUpService } from "../services/authServices"
import { Link, useNavigate } from "react-router-dom"
import { Alert } from "../components"

export const SignUp = () => {
    const navigate = useNavigate()
    const [signUp, setSignUp] = useState({
        name: "", email: "", password: "", confirmPassword: ""
    })
    const [error, setError] = useState(false)
    const signUpHandler = async (e) => {
        e.preventDefault()
        const { name, email, password } = signUp
        const token = await SignUpService(name, email, password)
        if (token && signUp.confirmPassword === signUp.password) {
            navigate("/login")
        }
        else {
            setError(true)
        }
    }
    return (
        <main>
            <div className="form-container">
                <h1 className="text-2xl fw-semibold ff-title text-center">Sign Up Here</h1>

                <form onSubmit={signUpHandler}>
                    <div className="form-content">
                        <div className="label-container">
                            <label htmlFor="name">
                                Name
                            </label>
                            <input onChange={(e) => setSignUp({ ...signUp, name: e.target.value })} type="text" name="name" placeholder="Enter Your Name" required />
                        </div>
                    </div>
                    <div className="form-content">
                        <div className="label-container">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input onChange={(e) => setSignUp({ ...signUp, email: e.target.value })} type="email" name="email" placeholder="test.js@gmail.com" required />
                        </div>
                    </div>

                    <div className="form-content">
                        <div className="label-container">
                            <label htmlFor="password">
                                Password
                            </label>
                            <input onChange={(e) => setSignUp({ ...signUp, password: e.target.value })} type="password" name="password" placeholder="*********" required />
                        </div>
                    </div>

                    <div className="form-content">
                        <div className="label-container">
                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input onChange={(e) => setSignUp({ ...signUp, confirmPassword: e.target.value })} type="password" name="confirmpassword" placeholder="*********" required />
                        </div>
                    </div>

                    {error && <div className="form-content"><div className="label-container"><Alert message={"Passwords did not match"} variant={'error'} /></div> </div>}

                    <div className="form-content">
                        <button type="submit" className="form-btn bg-dark">
                            Sign Up
                        </button>
                    </div>

                </form>
                <div className="form-actions">
                    <p className="text-center">
                        Already have an account? <Link to="/login" className="text-dark"> Log In Here</Link>
                    </p>
                </div>
            </div>
        </main>
    )
}
