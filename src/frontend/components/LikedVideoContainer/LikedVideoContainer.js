import { VideoCard } from "../VideoCard/VideoCard"
import { useLikes } from "../../context/likes-context"
import { NoItemMessage } from "../NoItemMessage/NoItemMessage"
import { useAuth } from "../../context/auth-context"
export const LikedVideoContainer = () => {
    const { likesState } = useLikes()
    const { auth } = useAuth()
    return (
        <div className="video-list">
            {likesState.likes.length && auth.isAuthenticated ? (<div className="item-list">

                {likesState.likes.map(({ _id, title, creator }) => {

                    return (<VideoCard key={_id} _id={_id} title={title} creator={creator} />)
                })}
            </div>) : (
                <NoItemMessage />
            )}

        </div>
    )
}
