import "./videocard.css"
export const VideoCard = ({ id, title, creator }) => {
    return (
        <div class="card">
            <div>
                <img class="card-img" src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`} alt="card image" />
            </div>
            <ul class="stacked-list">
                <li class="stacked-items">
                    <img src="https://picsum.photos/id/1012/200" class="avatar avatar-small" alt="user avatar" />
                    <div class="list-content">
                        <p class="text-normal fw-semibold">{title}</p>
                        <p class="text-sm">{creator}</p>
                    </div>
                    <button class="icon-btn material-icons stacked-btn">more_vert</button>
                </li></ul>
        </div>
    )
}
