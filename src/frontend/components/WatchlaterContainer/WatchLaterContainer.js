import "./watchlatercontainer.css"
import { VideoCard } from "../VideoCard/VideoCard"
import { useWatchlater } from "../../context/watchlater-context"
export const WatchLaterContainer = () => {
    const { watchlater } = useWatchlater()
    console.log(watchlater.watchlaterItems)
    return (
        <div className="video-list">
            {watchlater.watchlaterItems.length ? (<div className="item-list">

                {watchlater.watchlaterItems.map(({ id, title, creator }) => {

                    return (<VideoCard key={id} id={id} title={title} creator={creator} />)
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
