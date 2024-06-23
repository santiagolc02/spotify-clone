import './LibraryButton.css'

function LibraryButton({icon, title}) {
    return (
        <button className='library-button'>
            <span>{icon}</span>
            <h4>{title}</h4>
        </button>
    )
}

export default LibraryButton
