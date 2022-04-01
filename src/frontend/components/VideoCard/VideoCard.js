import "./videocard.css"
export const VideoCard = ({ id, title, creator }) => {
    return (
        <div className="card">
            <div>
                <img className="card-img" src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`} alt="card image" />
            </div>
            <ul className="stacked-list">
                <li className="stacked-items">
                    <img src="https://picsum.photos/id/1012/200" className="avatar avatar-small" alt="user avatar" />
                    <div className="list-content">
                        <p className="text-normal fw-semibold">{title}</p>
                        <p className="text-sm">{creator}</p>
                    </div>
                    <button className="icon-btn material-icons stacked-btn">more_vert</button>
                </li></ul>
        </div>
    )
}
