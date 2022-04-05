import { VideoCard } from "../VideoCard/VideoCard"
import { useHistory } from "../../context/history-context"
import { NoItemMessage } from "../NoItemMessage/NoItemMessage"
export const HistoryContainer = () => {
    const { historyState, clearAllHistory } = useHistory()
    const data = [...historyState.history]
    return (
        <div className="video-list">


            {historyState.history.length ? (<><button onClick={() => clearAllHistory()} className="btn btn-ghost fw-semibold text-large">Clear All</button><div className="item-list">

                {data.reverse().map(({ _id, title, creator }) => {

                    return (<VideoCard key={_id} _id={_id} title={title} creator={creator} />)
                })}
            </div></>) : (
                <NoItemMessage />
            )}

        </div>
    )
}
