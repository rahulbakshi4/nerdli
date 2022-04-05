import "./watchlatercontainer.css"
import { VideoCard } from "../VideoCard/VideoCard"
import { useWatchlater } from "../../context/watchlater-context"
import { NoItemMessage } from "../NoItemMessage/NoItemMessage"
export const WatchLaterContainer = () => {
    const { watchlater } = useWatchlater()
    return (
        <div className="video-list">
            {watchlater.watchlaterItems.length ? (<div className="item-list">

                {watchlater.watchlaterItems.map(({ _id, title, creator }) => {

                    return (<VideoCard key={_id} _id={_id} title={title} creator={creator} />)
                })}
            </div>) : (
                <NoItemMessage />
            )}

        </div>
    )
}
