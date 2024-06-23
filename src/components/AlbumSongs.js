import './AlbumSongs.css'
import Song from './Song'

function AlbumSongs() {
    return (
        <div className="album-songs">
            <div className='album-songs-texts'>
                <h4 className='album-songs-number'>#</h4>
                <h4 className='album-songs-title'>Title</h4>
                <h4 className='album-songs-plays'>Plays</h4>
                <h4 className='album-songs-time'><i class="bi bi-clock"></i></h4>
            </div>
            <hr></hr>
            <div className='album-songs-container'>
                <Song number = {"1"} title = {"Speak to Me"} plays = {"99,422,150"} time = {"1:05"}></Song>
                <Song number = {"2"} title = {"Breathe(In The Air)"} plays = {"344,836,417"} time = {"2:49"}></Song>
                <Song number = {"3"} title = {"On The Run"} plays = {"103,695,092"} time = {"3:45"}></Song>
                <Song number = {"4"} title = {"Time"} plays = {"363,802,158"} time = {"6:53"}></Song>
                <Song number = {"5"} title = {"The Great Gig In The Sky"} plays = {"290,549,448"} time = {"4:43"}></Song>
                <Song number = {"6"} title = {"Money"} plays = {"501,129,312"} time = {"6:22"}></Song>
                <Song number = {"7"} title = {"Us and Them"} plays = {"181,742,808"} time = {"7:49"}></Song>
                <Song number = {"8"} title = {"Any Color You Want"} plays = {"101,049,121"} time = {"3:26"}></Song>
                <Song number = {"9"} title = {"Brain Damage"} plays = {"192,960,318"} time = {"3:46"}></Song>
                <Song number = {"10"} title = {"Eclipse"} plays = {"85,527,810"} time = {"2:10"}></Song>
                <Song number = {"11"} title = {"What Do You Want From Me"} plays = {"57,093,910"} time = {"4:21"}></Song>
                <Song number = {"12"} title = {"Dogs"} plays = {"57,487,642"} time = {"17:05"}></Song>
                <Song number = {"13"} title = {"Shine On You Crazy Diamond(Pts. 1-5)"} plays = {"214,413,067"} time = {"13:31"}></Song>
            <div className='song-credits'>
                <p>Page made with React in June, 2024</p>
                <p>Creator: Santiago Lozano</p>
            </div>
            </div>
            
        </div>
    )
}

export default AlbumSongs
