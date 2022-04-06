
import { useParams, useNavigate } from "react-router-dom"
import { VideoCard } from "../VideoCard/VideoCard"
import { NoItemMessage } from "../NoItemMessage/NoItemMessage"
import { usePlaylist } from "../../context/playlist-context"
export const SinglePlaylistContainer = () => {
    const { id } = useParams()
    const { playlistState } = usePlaylist()
    const currentPlaylist = playlistState.playlists.find((item) => item._id === id)
    return (
        <div className="video-list">
            {currentPlaylist && currentPlaylist.videos.length !== 0 ? (<div className="item-list">

                {currentPlaylist.videos.map(({ _id, title, creator }) => {

                    return (<VideoCard key={_id} _id={_id} title={title} creator={creator} />)
                })}
            </div>) : (
                <NoItemMessage />
            )}

        </div>

    )
}
