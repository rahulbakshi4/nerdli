import "./videocard.css"
import { useState, useEffect } from "react"
import { useAuth } from "../../context/auth-context"
import { useWatchlater } from "../../context/watchlater-context"
import { useNavigate, useLocation, useParams } from "react-router-dom"
import { useLikes } from "../../context/likes-context"
import { useHistory } from "../../context/history-context"
import { usePlaylist } from "../../context/playlist-context"
export const VideoCard = ({ _id, title, creator }) => {
    const location = useLocation()
    const { auth } = useAuth()
    const { id } = useParams()
    const navigate = useNavigate()
    const video = { _id, title, creator }
    const {
        watchlater,
        addToWatcherLater,
        deleteFromWatchlater } = useWatchlater()
    const {
        likesState,
        deleteFromLikes } = useLikes()

    const {
        historyState,
        addToHistory,
        deleteFromHistory } = useHistory()
    const { setModal, deleteFromPlaylist
    } = usePlaylist()
    const inLikes = likesState.likes.find((item) => item._id === video._id)
    const inHistory = historyState.history.find((item) => item._id === video._id)
    const [dropdown, setDropdown] = useState("none")

    const [inWatchlater, setInWatchlater] = useState(false)


    useEffect(() => {
        if (watchlater.watchlaterItems) {
            watchlater.watchlaterItems.find((item) => item._id === video._id) &&
                setInWatchlater(true)
        }

    }, [watchlater.watchlaterItems]);


    const addClickHandler = () => {
        if (!auth.isAuthenticated) {
            navigate('/login')
        }
        addToWatcherLater(video)
        setDropdown("none")
    }

    const deleteClickHandler = () => {
        if (!auth.isAuthenticated) {
            navigate('/login')
        }
        deleteFromWatchlater(_id)
        setDropdown("none")
    }
    const dislikeHandler = () => {
        deleteFromLikes(video)
        setDropdown("none")
    }
    const addToPlaylistHandler = () => {
        if (!auth.isAuthenticated) {
            navigate('/login')
        }
        else {
            setModal(video);
            setDropdown("none")
        }
    }
    return (
        <div className="card">
            <div>
                <img onClick={() => {
                    navigate(`/videos/${_id}`); (auth.isAuthenticated && !inHistory) &&
                        addToHistory(video)
                }} className="card-img"
                    src={`https://i.ytimg.com/vi/${_id}/maxresdefault.jpg`} alt="card image" />
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
                    <span onClick={() => addToPlaylistHandler()}>Add to Playlist</span>
                </li>

                <li>
                    <span className='material-icons'>watch_later</span>
                    {!inWatchlater &&
                        <span onClick={() => addClickHandler()} >
                            Add to Watch later
                        </span>}

                    {inWatchlater &&
                        <span onClick={() => deleteClickHandler()}>
                            Delete From Watch Later
                        </span>}
                </li>
                {inLikes &&
                    <li>
                        <span className='material-icons'>thumb_down</span>
                        <span onClick={() => dislikeHandler()} >Dislke</span>
                    </li>
                }
                {location.pathname === "/history" &&
                    <li>
                        <span className='material-icons'>thumb_down</span>
                        <span onClick={() => deleteFromHistory(video)} >Delete From History</span>
                    </li>
                }
                {location.pathname === `/playlist/${id}` &&
                    <li>
                        <span className='material-icons'>thumb_down</span>
                        <span onClick={() => deleteFromPlaylist(id, video._id)} >Delete From Playlist</span>
                    </li>
                }
            </ul>

        </div>
    )
}
