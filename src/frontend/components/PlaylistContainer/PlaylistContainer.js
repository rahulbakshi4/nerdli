import "./playlistcontainer.css"
import { usePlaylist } from "../../context/playlist-context"
import { useNavigate } from "react-router-dom"
import { NoItemMessage } from "../NoItemMessage/NoItemMessage"
export const PlaylistContainer = () => {
    const { playlistState, deletePlaylist } = usePlaylist()
    const navigate = useNavigate()
    return (
        <div className="video-list">
            {playlistState.playlists.length ? (<>

                <div className="item-list">
                    {playlistState.playlists.map(({ _id, title, videos }) => {

                        return (
                            <div key={_id} className="stacked-list no-shadow card">
                                <div className="stacked-items">
                                    <div onClick={() => navigate(`/playlist/${_id}`)} className="list-content playlist-details">
                                        <p className="text-normal fw-semibold">{title}</p>
                                        <p className="text-sm">{videos.length} Videos</p>
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
