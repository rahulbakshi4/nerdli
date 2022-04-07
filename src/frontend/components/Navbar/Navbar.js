import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/auth-context'
export const Navbar = () => {
    const { auth, setAuth } = useAuth()
    const navigate = useNavigate()
    const logoutHandler = () => {
        setAuth({ token: '', isAuthenticated: false })
        localStorage.removeItem('token')
        localStorage.removeItem('isAuthenticated')
        localStorage.removeItem('userName')
        localStorage.removeItem('userEmail')
        navigate("/")
    }
    return (
        <nav className="navbar ff-title">
            <h2 className="text-2xl "><Link to="/" className="links">nerdli.</Link></h2>
            <ul className="navbar-right text-normal">
                <li>
                    <span>
                        {auth.isAuthenticated ? <Link to="/profile" className="links">{localStorage.getItem("userName")}</Link> : <Link to="/login" className='links'>Log In</Link>}
                    </span>
                </li>
                {auth.isAuthenticated && <li className="pointer">
                    <span onClick={logoutHandler}> Logout
                    </span>
                </li>}
            </ul>
        </nav>
    )
}

