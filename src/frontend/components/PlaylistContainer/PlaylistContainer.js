import "./playlistcontainer.css"
import { usePlaylist } from "../../context/playlist-context"
import { useNavigate } from "react-router-dom"
import { NoItemMessage } from "../NoItemMessage/NoItemMessage"
import { useAuth } from "../../context/auth-context"
export const PlaylistContainer = () => {
    const { playlistState, deletePlaylist } = usePlaylist()
    const navigate = useNavigate()
    const { auth } = useAuth()
    return (
        <div className="video-list">
            {playlistState.playlists.length && auth.isAuthenticated ? (<>

                <div className="item-list">
                    {playlistState.playlists.map(({ _id, title, videos }) => {

                        return (
                            <div key={_id} className="stacked-list no-shadow card">
                                <div className="stacked-items">
                                    <div onClick={() => navigate(`/playlist/${_id}`)} className="list-content playlist-details">
                                        <p className="text-normal fw-semibold">{title}</p>
                                        <p className="text-sm">{videos.length} {videos.length === 1 ? "Video" : "Videos"}</p>
                                    </div>
                                    <button onClick={() => deletePlaylist(_id)} className="icon-btn material-icons stacked-btn">delete</button>
                                </div>
                            </div>
                        )
                    })}
                </div></>) : (
                <NoItemMessage />
            )}
        </div>
    )
}
