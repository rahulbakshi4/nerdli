import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/auth-context"
import { useLikes } from "../../context/likes-context"
import { usePlaylist } from "../../context/playlist-context"
import { useVideoList } from "../../context/video-context"
import { useWatchlater } from "../../context/watchlater-context"
import { getVideoByIdService } from "../../services/videoService"
import { VideoCard } from "../VideoCard/VideoCard"
import { PlaylistModal } from "../PlaylistModal/PlaylistModal"
import "./singlevideocontainer.css"
export const SingleVideoContainer = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [video, setVideo] = useState({})
    const { title, creator, description, categoryName } = video
    const { state } = useVideoList()
    const { auth } = useAuth()
    const { modal, setModal } = usePlaylist()
    const { watchlater, addToWatcherLater, deleteFromWatchlater } = useWatchlater()
    const { likesState, addToLikes, deleteFromLikes } = useLikes()
    const inWatchlater = watchlater.watchlaterItems.find((item) => item._id === id)
    const inLikes = likesState.likes.find((item) => item._id === id)
    const relatedVideos = state.videos.filter((item) => item._id !== id && item.categoryName === categoryName)

    useEffect(() => {
        (async () => {
            try {
                const response = await getVideoByIdService(id)
                if (response.status === 200 || response.status === 201) {
                    setVideo(response.data.video)
                }
            } catch (error) {
                console.log('error')
            }
        })()
    }, [id])


    const addLikeHandler = () => {
        if (!auth.isAuthenticated) {
            navigate('/login')
        }
        addToLikes(video)
    }

    const dislikeHandler = () => {
        if (!auth.isAuthenticated) {
            navigate('/login')
        }
        deleteFromLikes(video)
    }

    const deleteClickHandler = () => {
        if (!auth.isAuthenticated) {
            navigate('/login')
        }
        deleteFromWatchlater(id)

    }
    const addClickHandler = () => {
        if (!auth.isAuthenticated) {
            navigate('/login')
        }
        addToWatcherLater(video)
    }
    const addToPlaylistHandler = () => {
        if (!auth.isAuthenticated) {
            navigate('/login')
        }
        else { setModal(video) }
    }

    return (
        <div className="video-list grow">
            <div className="video-container">
                <div className="video">
                    <iframe
                        width='100%'
                        height='100%'
                        src={`https://www.youtube.com/embed/${id}`}
                        title='YouTube video player'
                        frameBorder='0'
                        style={{ borderRadius: '0.5rem' }}
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen={true}
                    ></iframe>

                    <div className="video-actions">
                        <img src="https://res.cloudinary.com/rahulb4/image/upload/v1643855031/peep_rssuj0.png"
                            className="avatar avatar-small" alt="user avatar" />
                        <div className="list-content">

                            <p className="text-large">{title}</p>
                            <p className="text-sm">{creator}</p>
                        </div>
                        <div className="video-action-btn chips basic-chips">
                            {!inLikes &&
                                <button onClick={() => addLikeHandler()} className="chip">
                                    <span className="material-icons">thumb_up</span>
                                    Like
                                </button>
                            }
                            {inLikes &&
                                <button onClick={() => dislikeHandler()} className="chip">
                                    <span className="material-icons">thumb_down</span>
                                    Dislike
                                </button>
                            }
                            {!inWatchlater && <button onClick={() => addClickHandler()} className="chip">
                                <span className="material-icons">watch_later</span>
                                Watch Later
                            </button>}
                            {inWatchlater && <button onClick={() => deleteClickHandler()} className="chip">
                                <span className="material-icons">watch_later</span>
                                Delete From Watch Later
                            </button>}

                            <button onClick={() => addToPlaylistHandler()} className="chip">
                                <span className="material-icons">playlist_add</span>
                                Add
                            </button>
                        </div>
                    </div>
                    <div className="desc-div">
                        <p className="">{description}</p>
                    </div>

                </div>

                <div className="related-div">
                    <h2 className="text-large fw-semibold">Related Videos</h2>
                    <div className="item-list">
                        {relatedVideos.map(({ _id, title, creator }) =>
                            <VideoCard key={_id} _id={_id} title={title} creator={creator} />
                        )}
                    </div>

                </div>
            </div>

        </div>
    )
}
