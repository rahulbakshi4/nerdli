import { VideoCard } from "../VideoCard/VideoCard"
import { useLikes } from "../../context/likes-context"
export const LikedVideoContainer = () => {
    const { likesState } = useLikes()
    console.log(likesState.likes)
    return (
        <div className="video-list">
            {likesState.likes.length ? (<div className="item-list">

                {likesState.likes.map(({ _id, title, creator }) => {

                    return (<VideoCard key={_id} _id={_id} title={title} creator={creator} />)
                })}
            </div>) : (
                <div className="no-items">
                    <img className="" src="https://res.cloudinary.com/rahulb4/image/upload/v1648955255/Pug_bgitvq.png" alt="" />
                    <p className="ff-title text-2xl text-center">Nothing to see here</p>
                </div>
            )}

        </div>
    )
}
