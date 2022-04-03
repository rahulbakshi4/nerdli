import { Link, NavLink } from 'react-router-dom'
import './sidebar.css'

export const Sidebar = () => {
    return (
        <aside className="side-bar">
            <div>
                <ul className="text-sm side-list">
                    <li>
                        <Link to="/" className="links">
                            <span className='material-icons'>home</span>
                            <span className="side-list-title">Home</span>
                        </Link>

                    </li>
                    <li>
                        <NavLink to="/videos" className={({ isActive }) => isActive ? "active links" : "links"}>
                            <span className='material-icons'>explore</span>
                            <span className="side-list-title">Explore</span>
                        </NavLink>

                    </li>
                    <li>
                        <Link to="/" className="links">
                            <span className='material-icons'>playlist_add</span>
                            <span className="side-list-title">Playlists</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="links">
                            <span className='material-icons'>thumb_up</span>
                            <span className="side-list-title" >Liked</span>
                        </Link>
                    </li>
                    <li>

                        <Link to="/" className="links">
                            <span className='material-icons'>history</span>
                            <span className="side-list-title" >History</span>
                        </Link>

                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "active links" : "links"} to="/watchlater">
                            <span className='material-icons'>watch_later</span>
                            <span className="side-list-title">Watch Later</span>
                        </NavLink>
                    </li>

                </ul>
            </div>
        </aside>
    )
}
