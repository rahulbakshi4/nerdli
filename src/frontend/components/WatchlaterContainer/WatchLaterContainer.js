import "./watchlatercontainer.css"
import { VideoCard } from "../VideoCard/VideoCard"
import { useWatchlater } from "../../context/watchlater-context"
import { NoItemMessage } from "../NoItemMessage/NoItemMessage"
import { useAuth } from "../../context/auth-context"
export const WatchLaterContainer = () => {
    const { watchlater } = useWatchlater()
    const { auth } = useAuth()
    return (
        <div className="video-list">
            {watchlater.watchlaterItems.length && auth.isAuthenticated ? (<div className="item-list">

                {watchlater.watchlaterItems.map(({ _id, title, creator }) => {

                    return (<VideoCard key={_id} _id={_id} title={title} creator={creator} />)
                })}
            </div>) : (
                <NoItemMessage />
            )}

        </div>
    )
}
