import { ALL, LOGSEQ, NOTION, OBSIDIAN, TECHNIQUES, VIDEO_LIST_REQUEST, VIDEO_LIST_SUCCESS } from "../constants/video-constants";

const videoListReducer = (state, action) => {
    switch (action.type) {
        case VIDEO_LIST_REQUEST:
            return { ...state, videoLoading: action.payload.status }
        case VIDEO_LIST_SUCCESS:
            if (action.payload.videos) {
                return { ...state, videos: [...action.payload.videos], videoLoading: action.payload.status }
            }

        case NOTION:
            return {
                ...state, categories: {
                    notion: true,
                    obsidian: false,
                    logSeq: false,
                    techniques: false
                }

            }
        case OBSIDIAN:
            return {
                ...state, categories: {
                    notion: false,
                    obsidian: true,
                    logSeq: false,
                    techniques: false
                }

            }
        case LOGSEQ:
            return {
                ...state, categories: {
                    notion: false,
                    obsidian: false,
                    logSeq: true,
                    techniques: false
                }

            }

        case TECHNIQUES:
            return {
                ...state, categories: {
                    notion: false,
                    obsidian: false,
                    logSeq: false,
                    techniques: true
                }

            }
        case ALL:
            return {
                ...state,
                categories: {
                    notion: false,
                    obsidian: false,
                    logSeq: false,
                    techniques: false
                }
            }
        default:
            return state

    }
}
export { videoListReducer }
