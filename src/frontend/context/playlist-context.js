import { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { useAuth } from "./auth-context"
import {
    getAllPlaylistService, createPlaylistService,
    deletePlaylistService,
    addToPlaylistService, deleteFromPlaylistService
} from '../services/playlistServices'
import {
    ALL_PLAYLIST_SUCCESS, ALL_PLAYLIST_REQUEST,
    ADD_TO_PLAYLIST, DELETE_FROM_PLAYLIST,
    CREATE_PLAYLIST, DELETE_PLAYLIST
} from "../constants/playlist-constants"
import { playlistReducer } from '../reducers/playlistReducer'
import toast from 'react-hot-toast'
const PlaylistContext = createContext()

const PlaylistProvider = ({ children }) => {
    const { auth } = useAuth()
    const [modal, setModal] = useState(null)
    const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
        playlists: [],
        loading: false
    })
    useEffect(() => {
        (async () => {
            if (auth.isAuthenticated) {
                try {
                    const response = await getAllPlaylistService(auth.token)
                    playlistDispatch({ type: ALL_PLAYLIST_REQUEST, payload: { status: true } })
                    if (response.status === 200) {
                        playlistDispatch({ type: ALL_PLAYLIST_SUCCESS, payload: response.data.playlists })
                    }

                } catch (error) {
                    console.log(error)
                }
            }
        })()

    }, [auth.isAuthenticated])

    const createPlaylist = async (title) => {

        try {
            const response = await createPlaylistService(title, auth.token)
            if (response.status === 200 || response.status === 201) {
                playlistDispatch({ type: CREATE_PLAYLIST, payload: response.data.playlists })
            }
        } catch (err) {
            console.log(err)
        }

    }

    const deletePlaylist = async (playlistID) => {
        try {
            const response = await deletePlaylistService(playlistID, auth.token)
            if (response.status === 200 || response.status === 201) {
                playlistDispatch({ type: DELETE_PLAYLIST, payload: response.data.playlists })
                toast.success('Playlist deleted')
            }
        } catch (err) {
            console.log(err)
        }
    }

    const addToPlaylist = async (playlistID, video) => {
        try {
            const response = await addToPlaylistService(playlistID, video, auth.token)
            if (response.status === 200 || response.status === 201) {
                playlistDispatch({ type: ADD_TO_PLAYLIST, payload: response.data.playlist })
                toast.success('Added to playlist')
            }
        } catch (err) {
            console.log(err)
        }

    }
    const deleteFromPlaylist = async (playlistID, videoID,) => {
        try {
            const response = await deleteFromPlaylistService(playlistID, videoID, auth.token)
            if (response.status === 200 || response.status === 201) {
                playlistDispatch({ type: DELETE_FROM_PLAYLIST, payload: response.data.playlist })
                toast.success('Deleted from playlist')
            }
        } catch (err) {
            console.log(err)
        }

    }
    return <PlaylistContext.Provider value={{
        playlistState, playlistDispatch, createPlaylist,
        deletePlaylist, modal, setModal, addToPlaylist, deleteFromPlaylist
    }}>{children}</PlaylistContext.Provider>
}
const usePlaylist = () => useContext(PlaylistContext)
export { PlaylistProvider, usePlaylist }
