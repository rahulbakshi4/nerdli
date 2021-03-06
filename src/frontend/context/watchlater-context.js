import { createContext, useContext, useState, useEffect } from 'react'
import { getWatchLaterService, addToWatchLaterService, deleteFromWatchLaterService } from '../services/watchLaterServices'
import { useAuth } from "./auth-context"

const WatchLaterContext = createContext()
const WatchLaterProvider = ({ children }) => {
    const { auth } = useAuth()
    const [watchlater, setWatchlater] = useState({
        watchlaterItems: [],
        watchlaterLoading: false,
        watchlaterError: false
    })
    const [inWatchlater, setInWatchlater] = useState(false)
    useEffect(() => {
        (async () => {
            if (auth.isAuthenticated) {
                try {
                    const response = await getWatchLaterService(auth.token)
                    if (response.status === 200) {
                        setWatchlater((prevItems) => ({
                            ...prevItems, watchlaterItems: response.data.watchlater, watchlaterLoading: false
                        }))
                    }

                } catch (error) {
                    console.log(error)
                    setWatchlater((prevItems) => ({
                        ...prevItems, watchlaterError: true
                    }))
                }
            }
        })()

    }, [auth.isAuthenticated])

    const addToWatcherLater = async (video) => {
        try {
            const response = await addToWatchLaterService(video, auth.token)
            if (response.status === 200 || response.status === 201) {
                setWatchlater((prevData) => ({ ...prevData, watchlaterItems: response.data.watchlater }))
                setInWatchlater(true)
            }
        } catch (err) {
            console.log(err)
        }
    }
    const deleteFromWatchlater = async (id) => {
        try {
            const response = await deleteFromWatchLaterService(id, auth.token)
            if (response.status === 200 || response.status === 201) {
                setWatchlater((prevData) => ({ ...prevData, watchlaterItems: response.data.watchlater }))
                setInWatchlater(false)
            }
        } catch (err) {
            console.log(err)
        }
    }
    return <WatchLaterContext.Provider value={{ watchlater, setWatchlater, addToWatcherLater, deleteFromWatchlater, inWatchlater, setInWatchlater }}>{children}</WatchLaterContext.Provider>
}
const useWatchlater = () => useContext(WatchLaterContext)
export { WatchLaterProvider, useWatchlater }
