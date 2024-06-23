import './LibraryAlbum.css'

function LibraryAlbum({cover, title, artist}) {
    return (
        <button className='library-album'>
            <img src = {cover} alt={`${title} cover`} className='library-album-cover' />
            <div className='library-album-info'>
                <h4 className='library-album-title'>{title}</h4>
                <div className='library-album-band'>
                    <h4>Album • {artist}</h4>
                </div>
            </div>
        </button>
    )
}

export default LibraryAlbum
