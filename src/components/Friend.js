import './Friend.css'

function Friend({img, name, song, artist, album}) {
    return (
        <div className='friend'>
            <img src = {img} alt="" className='friend-img' />
            <div className='friend-info'>
                <h4>{name}</h4>
                <h2 className='song-artist'>{song} • {artist}</h2>
                <div className='friendly-info-album'>
                    <span><i class="bi bi-disc"></i></span>
                    <p>{album}</p>
                </div>
            </div>
            <span className='currently'><i class="bi bi-music-note-beamed"></i></span>
        </div>
    )
}

export default Friend
