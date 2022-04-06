import React from 'react'
import { PlaylistContainer, Sidebar } from '../components'

export const Playlist = () => {
    return (
        <div className='main-container'>
            <Sidebar />
            <PlaylistContainer />
        </div>
    )
}
