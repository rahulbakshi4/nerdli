import './sidebar.css'

export const Sidebar = () => {
    return (
        <aside className="side-bar">
            <div>
                <ul className="text-sm side-list">
                    <li>
                        <span className='material-icons'>home</span>
                        <a className="links">Home</a>
                    </li>
                    <li>
                        <span className='material-icons'>explore</span>
                        <a className="links">Explore</a>
                    </li>
                    <li>
                        <span className='material-icons'>playlist_add</span>
                        <a className="links">Playlists</a>
                    </li>
                    <li>
                        <span className='material-icons'>thumb_up</span>
                        <a className="links">Liked</a>
                    </li>
                    <li>
                        <span className='material-icons'>history</span>
                        <a className="links" >History</a>
                    </li>
                    <li>
                        <span className='material-icons'>watch_later</span>
                        <a className="links">Watch Later</a>
                    </li>

                </ul>
            </div>
        </aside>
    )
}
