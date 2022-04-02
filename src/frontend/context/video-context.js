import { createContext, useContext, useReducer, useEffect } from 'react'
import { VIDEO_LIST_REQUEST, VIDEO_LIST_SUCCESS } from '../constants/video-constants'
import { videoListReducer } from '../reducers/videoListReducer'
import { videoListService } from '../services/videoService'

const VideoListContext = createContext()

const VideoListProvider = ({ children }) => {

    const [state, dispatch] = useReducer(videoListReducer, {
        videos: [],
        categories: {
            notion: false,
            obsidian: false,
            logSeq: false,
            techniques: false

        },
        videoLoading: false
    })

    useEffect(() => {

        (async () => {
            try {
                let res = await videoListService();

                dispatch({
                    type: VIDEO_LIST_REQUEST,
                    payload: { status: true }
                })

                if (res.status === 200) {
                    let videos = res.data.videos
                    dispatch({ type: VIDEO_LIST_SUCCESS, payload: { videos, status: false } })
                }

            } catch (error) {
                console.log(error)
            }

        })()
    }, [])




    return <VideoListContext.Provider value={{ state, dispatch }}>{children}</VideoListContext.Provider>
}
const useVideoList = () => useContext(VideoListContext)
export { useVideoList, VideoListProvider }
