import { createContext, useContext, useEffect, useReducer } from 'react'
import { useAuth } from "./auth-context"
import { getLikesService, addToLikesService, deleteFromLikesService } from '../services/likesServices'
import { likesReducer } from '../reducers/likesReducer'
import { ADD_TO_LIKES, DELETE_FROM_LIKES, LIKES_REQUEST, LIKES_SUCCESS } from '../constants/likes-constants'
import toast from 'react-hot-toast'
const LikesContext = createContext()
const LikesProvider = ({ children }) => {
    const { auth } = useAuth()

    const [likesState, likesDispatch] = useReducer(likesReducer, {
        likes: [],
        loading: false
    })

    useEffect(() => {
        (async () => {
            if (auth.isAuthenticated) {
                try {
                    const response = await getLikesService(auth.token)
                    likesDispatch({ type: LIKES_REQUEST, payload: { status: true } })
                    if (response.status === 200) {
                        likesDispatch({ type: LIKES_SUCCESS, payload: response.data.likes })
                    }

                } catch (error) {
                    console.log(error)
                }
            }
        })()

    }, [auth.isAuthenticated])

    const addToLikes = async (video) => {

        try {
            const response = await addToLikesService(video, auth.token)
            if (response.status === 200 || response.status === 201) {
                likesDispatch({ type: ADD_TO_LIKES, payload: response.data.likes })
                toast.success('Added to likes')
            }
        } catch (err) {
            toast('User login required', { duration: 1800 })
        }
    }
    const deleteFromLikes = async (video) => {
        try {
            const response = await deleteFromLikesService(video._id, auth.token)
            if (response.status === 200 || response.status === 201) {
                likesDispatch({ type: DELETE_FROM_LIKES, payload: response.data.likes })
                toast.success('Removed from likes')
            }
        } catch (err) {
            console.log(err)
        }
    }
    return <LikesContext.Provider value={{ likesState, likesDispatch, addToLikes, deleteFromLikes }}>{children}</LikesContext.Provider>
}
const useLikes = () => useContext(LikesContext)
export { LikesProvider, useLikes }
