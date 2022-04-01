import { VideoCard } from "../VideoCard/VideoCard"
import "./videosContainer.css"
import { videos } from "../../../backend/db/videos"
export const VideosContainer = () => {
    return (
        <div className="video-list">
            <div className="chips basic-chips">
                <button className="chip">
                    All
                </button>
                <button className="chip">
                    notion
                </button>
                <button className="chip">
                    obsidian
                </button>
                <button className="chip">
                    logseq
                </button>
                <button className="chip">
                    techniques
                </button>
            </div>
            <div className="product-list">
                {videos.map(({ _id, title, creator }) => <VideoCard key={_id} id={_id} title={title} creator={creator} />)}
            </div>
        </div>

    )
}
