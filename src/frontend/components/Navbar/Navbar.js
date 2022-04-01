import './navbar.css'
import { Link } from 'react-router-dom'
export const Navbar = () => {

    return (
        <nav className="navbar ff-title">
            <h2 className="text-2xl "><Link to="/" className="links">nerdli.</Link></h2>
            <ul className="navbar-right text-normal">
                <li><Link to="/videos" className="links">Explore</Link></li>
                <li><a>Login</a></li>
            </ul>
        </nav>
    )
}

