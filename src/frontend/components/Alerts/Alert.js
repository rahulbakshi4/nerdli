
export const Alert = ({ message, variant }) => {
    return (
        <div class={`alert alert--${variant}`}>
            {message}
        </div>
    )
}
