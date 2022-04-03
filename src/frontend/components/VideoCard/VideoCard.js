import "./videocard.css"
import { useState, useEffect } from "react"
import { useAuth } from "../../context/auth-context"
import { useWatchlater } from "../../context/watchlater-context"
import { addToWatchLaterService, deleteFromWatchLaterService } from "../../services/watchLaterServices"
import { useNavigate } from "react-router-dom"
export const VideoCard = ({ id, title, creator }) => {
    const { auth } = useAuth()
    const navigate = useNavigate()
    const { watchlater, setWatchlater } = useWatchlater()
    const [dropdown, setDropdown] = useState("none")
    const [inWatchlater, setInWatchlater] = useState(false)
    const video = { id, title, creator }

    useEffect(() => {
        if (watchlater.watchlaterItems) {
            watchlater.watchlaterItems.find((item) => item.id === video.id) &&
                setInWatchlater(true)
        }
    }, [watchlater.watchlaterItems]);

    const addToWatcherLater = async (video) => {
        try {
            const response = await addToWatchLaterService(video, auth.token)
            if (response.status === 200 || response.status === 201) {
                setWatchlater((prevData) => ({ ...prevData, watchlaterItems: response.data.watchlater }))
                setInWatchlater(true)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const deleteFromWatchlater = async (video) => {
        try {
            const response = await deleteFromWatchLaterService(video.id, auth.token)
            if (response.status === 200 || response.status === 201) {
                setWatchlater((prevData) => ({ ...prevData, watchlaterItems: response.data.watchlater }))
                setInWatchlater(false)
            }
        } catch (err) {
            console.log(err)
        }
    }

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
                    {!inWatchlater && <span onClick={() => auth.isAuthenticated ? addToWatcherLater(video) && setDropdown("none") : navigate("/login")} >Add to Watch later</span>}
                    {inWatchlater && <span onClick={() => auth.isAuthenticated ? deleteFromWatchlater(video) : navigate("/login")}>Delete From Watch Later</span>}
                </li>
            </ul>
        </div>
    )
}
