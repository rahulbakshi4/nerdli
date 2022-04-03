import { VideoCard } from "../VideoCard/VideoCard"
import "./videosContainer.css"
import { useVideoList } from "../../context/video-context"
import { ALL, LOGSEQ, NOTION, OBSIDIAN, TECHNIQUES } from "../../constants/video-constants"
import { categorisedVideos } from "../../utils/filter-function"
export const VideosContainer = () => {

    const { state, dispatch } = useVideoList()
    const categorisedData = categorisedVideos(state.videos, state.categories)
    const data = categorisedData
    return (
        <div className="video-list">
            <div className="chips basic-chips">
                <button onClick={() => dispatch({ type: ALL })} className="chip">
                    All
                </button>
                <button onClick={() => dispatch({ type: NOTION })} className="chip">
                    notion
                </button>
                <button onClick={() => dispatch({ type: OBSIDIAN })} className="chip">
                    obsidian
                </button>
                <button onClick={() => dispatch({ type: LOGSEQ })} className="chip">
                    logseq
                </button>
                <button onClick={() => dispatch({ type: TECHNIQUES })} className="chip">
                    techniques
                </button>
            </div>
            <div className="item-list">
                {data.map(({ _id, title, creator }) => <VideoCard key={_id} id={_id} title={title} creator={creator} />)}
            </div>
        </div>

    )
}
