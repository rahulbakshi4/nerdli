import "./videocard.css"
import { useState } from "react"
export const VideoCard = ({ id, title, creator }) => {
    const [dropdown, setDropdown] = useState("none")
    return (
        <div className="card">
            <div>
                <img className="card-img" src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`} alt="card image" />
            </div>
            <ul className="stacked-list">
                <li className="stacked-items">
                    <img src="https://res.cloudinary.com/rahulb4/image/upload/v1643855031/peep_rssuj0.png" className="avatar avatar-small" alt="user avatar" />
                    <div className="list-content">
                        <p className="text-normal fw-semibold">{title}</p>
                        <p className="text-sm">{creator}</p>
                    </div>
                    <button onClick={() => setDropdown("show")} className="icon-btn material-icons stacked-btn">more_vert</button>
                </li>
            </ul>
            <ul className={`list-group dropdown-list ${dropdown}`}>
                <div className="icon-div">
                    <span onClick={() => setDropdown("none")} className="material-icons md-18">clear</span>
                </div>
                <li>
                    <span className='material-icons'>playlist_add</span>
                    <span >Add to Playlist</span>
                </li>

                <li>
                    <span className='material-icons'>watch_later</span>
                    <span >Watch Later</span>
                </li>
            </ul>
        </div>
    )
}
