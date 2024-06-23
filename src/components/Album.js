import './Album.css'
import AlbumCover from './AlbumCover'
import AlbumSongs from './AlbumSongs'

function Album() {
    return (
        <div className='album'>
            <AlbumCover></AlbumCover>
            <AlbumSongs></AlbumSongs>
        </div>
    )
}

export default Album
