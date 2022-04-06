import { useNavigate } from "react-router-dom"
export const NotFound = () => {
    const navigate = useNavigate()
    return (
        <section className="hero-section">
            <div className="content-container">
                <h2 className="fw-semibold text-4xl ff-title">404 </h2>
                <p className=" text-large">You've landed in the middle of nowhere. We tried but couldn't find the page you are looking for.</p>
                <div className="btn-container">
                    <button onClick={() => navigate("/")} className="hero-btn">Back To Home</button>
                </div>

            </div>
            <div className="hero-image-container">
                <img className="hero-img"
                    src="https://res.cloudinary.com/rahulb4/image/upload/v1649263523/cactus.png"
                    alt="illustration sof a cactus" />
            </div>
        </section>
    )
}
