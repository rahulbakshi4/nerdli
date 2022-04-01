import "../styles/home.css"
import { useNavigate } from "react-router-dom"
export const HomePage = () => {
    const navigate = useNavigate()
    return (

        <section className="hero-section">
            <div className="content-container">
                <h1 className="fw-semibold ff-title">Declutter Your Thoughts and Ideas </h1>
                <p>Learn to leverage the true potential of your ideas and thoughts to build a personal knowledge management system in this world of information overload. With nerdli take your skill of note taking to the next level.</p>
                <div className="btn-container">
                    <button onClick={() => navigate("/videos")} className="hero-btn">Start Learning</button>
                    <img className="home-arrow" src="https://res.cloudinary.com/rahulb4/image/upload/v1648686353/scribbles-scribbles-73_uuxgql.svg" alt="image showing arrow to button" />
                </div>

            </div>
            <div className="hero-image-container">
                <img className="hero-img"
                    src="https://res.cloudinary.com/rahulb4/image/upload/v1648683857/Skribblhead.png"
                    alt="illustration showing a confused man" />
            </div>
        </section>



    )
}
