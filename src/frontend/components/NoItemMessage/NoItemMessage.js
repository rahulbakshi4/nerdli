import { useAuth } from "../../context/auth-context"
export const NoItemMessage = () => {
    const { auth } = useAuth()
    return (
        <div className="no-items">
            <img src="https://res.cloudinary.com/rahulb4/image/upload/v1660799126/Pug_bgitvq_iht2e1.webp" alt="image of pug with tongue out" />
            {!auth.isAuthenticated ? <p className="ff-title text-xl text-center">Login first to see items. Woof!!</p> : <p className="ff-title text-2xl text-center">Nothing to see here</p>}
        </div>
    )
}
