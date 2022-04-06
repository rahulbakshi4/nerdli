import "./playlistModal.css"
import { useState } from "react"
import { usePlaylist } from "../../context/playlist-context"
export const PlaylistModal = ({ modal }) => {
    const { playlistState, createPlaylist, setModal, addToPlaylist } = usePlaylist()
    const [title, setTitle] = useState("")

    const createClickHandler = () => {
        if (title !== "") {
            createPlaylist(title); setTitle("")
        }
    }
    return (
        <div className={`modal-container ${modal ? "show" : "none"}`}>
            <div className="card modal">
                <div className="card-heading">
                    <h2>Playlists</h2>
                </div>
                <div className="text-sm card-desc">

                    <ul className="play-list">
                        {playlistState.playlists.map((item) => {
                            return (<li key={item._id} onClick={() => { addToPlaylist(item._id, modal); setModal(null) }}> <span>{item.title}</span>
                                <span className="material-icons md-18 stacked-btn">add</span></li>)
                        })}
                    </ul>

                    <div className="icon-div">
                        <span onClick={() => setModal(null)} className="material-icons" id="close-modal">clear</span>
                    </div>
                    <div className="modal-footer">
                        <input type="text" value={title} className="inputs modal-input" placeholder="Playlist Name" onChange={(e) => setTitle(e.target.value)} />
                        <button onClick={() => createClickHandler()} className="btn modal-btn">Create New</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
