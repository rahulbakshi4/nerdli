import { VideoCard } from "../VideoCard/VideoCard"
import "./videosContainer.css"
import { videos } from "../../../backend/db/videos"
export const VideosContainer = () => {
    return (
        <div className="video-list">
            <div class="chips basic-chips">
                <button class="chip">
                    All
                </button>
                <button class="chip">
                    notion
                </button>
                <button class="chip">
                    obsidian
                </button>
                <button class="chip">
                    logseq
                </button>
                <button class="chip">
                    techniques
                </button>
            </div>
            <div className="product-list">
                {videos.map(({ _id, title, creator }) => <VideoCard id={_id} title={title} creator={creator} />)}
            </div>
        </div>

    )
}
