
export const Button = ({ className, text, onClick }) => {

    return (
        <button className={className} onClick={onClick} type='button' role='button'>
            {text}
        </button>
    )

}