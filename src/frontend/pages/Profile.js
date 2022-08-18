import React from 'react'
import "../styles/profile.css"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth-context'
import toast from 'react-hot-toast'
export const Profile = () => {
    const { auth, setAuth } = useAuth()
    const navigate = useNavigate()
    const logoutHandler = () => {
        setAuth({ token: '', isAuthenticated: false })
        localStorage.removeItem('token')
        localStorage.removeItem('isAuthenticated')
        localStorage.removeItem('userName')
        localStorage.removeItem('userEmail')
        toast.success('You are logged out')
        navigate("/")
    }
    return (
        <section className="profile-section">
            <div className="">
                <h2 className="fw-semibold text-3xl ff-title">My Profile </h2>
            </div>
            <div className="card h-card">
                <div>
                    <img className="h-card-img"
                        src="https://res.cloudinary.com/rahulb4/image/upload/v1643855031/peep_rssuj0.png"
                        alt="Horizontal card image" />
                </div>

                <div className="h-card-content profile-details card-desc">
                    <div className="card-headings">
                        <p>{localStorage.getItem("userName")}</p>
                        <p>{localStorage.getItem("userEmail")}</p>
                    </div>
                    <button onClick={() => logoutHandler()} className="btn outlined">Logout</button>
                </div>

            </div>

        </section>
    )
}
