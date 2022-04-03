import { createContext, useContext, useState, useEffect } from 'react'
import { getWatchLaterService } from '../services/watchLaterServices'
import { useAuth } from "./auth-context"

const WatchLaterContext = createContext()
const WatchLaterProvider = ({ children }) => {
    const { auth } = useAuth()
    const [watchlater, setWatchlater] = useState({
        watchlaterItems: [],
        watchlaterLoading: false,
        watchlaterError: false
    })
    useEffect(() => {
        (async () => {
            if (auth.isAuthenticated) {
                try {
                    const response = await getWatchLaterService(auth.token)
                    if (response.status === 200) {
                        setWatchlater((prevItems) => ({
                            ...prevItems, watchlaterItems: response.data.watchlater, watchlaterLoading: false
                        }))
                        console.log(watchlater)
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

    return <WatchLaterContext.Provider value={{ watchlater, setWatchlater }}>{children}</WatchLaterContext.Provider>
}
const useWatchlater = () => useContext(WatchLaterContext)
export { WatchLaterProvider, useWatchlater }
