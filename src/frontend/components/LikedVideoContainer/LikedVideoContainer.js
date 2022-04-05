import { VideoCard } from "../VideoCard/VideoCard"
import { useLikes } from "../../context/likes-context"
import { NoItemMessage } from "../NoItemMessage/NoItemMessage"
export const LikedVideoContainer = () => {
    const { likesState } = useLikes()
    return (
        <div className="video-list">
            {likesState.likes.length ? (<div className="item-list">

                {likesState.likes.map(({ _id, title, creator }) => {

                    return (<VideoCard key={_id} _id={_id} title={title} creator={creator} />)
                })}
            </div>) : (
                <NoItemMessage />
            )}

        </div>
    )
}
