import './AlbumCover.css'
import DarkSide from '../assets/darkside.jpg'
import PinkBand from '../assets/pinkband.jpeg'

function AlbumCover() {
    return (
        <div className="album-cover">
            <div className='album-cover-controls'>
                <div className='back-forward'>
                    <button className='back'>
                        <span><i class="bi bi-chevron-left"></i></span>
                    </button>
                    <button className='forward'>
                        <span><i class="bi bi-chevron-right"></i></span>
                    </button>
                </div>
                <div className='controls'>
                    <button className='bell'>
                        <span><i class="bi bi-bell"></i></span>
                    </button>
                    <button className='social'>
                        <span><i class="bi bi-people-fill"></i></span>
                    </button>
                    <button className='profile'>
                        <span><i class="bi bi-person"></i></span>
                    </button>
                </div>
            </div>
            <div className='album-main'>
                <img src = {DarkSide} alt=''/>
                <div className='album-main-info'>
                    <h5>Album</h5>
                    <h1>The Dark Side of the Moon</h1>
                    <div className='album-main-info-down'>
                        <button className='img-band'>
                            <img src = {PinkBand} alt='' />
                            <h4>Pink Floyd</h4>
                        </button>
                        <h4>1973 • 10 songs • 52 min 52 seg</h4>
                    </div>
                </div>
            </div>
            <br></br>
            <div className='gestures-main'>
                <div className='gestures-icons'>
                    <span className='play-button'><i class="bi bi-pause-fill"></i></span>
                    <span className='normal-button'><i class="bi bi-shuffle"></i></span>
                    <span className='normal-button'><i class="bi bi-plus-circle"></i></span>
                    <span className='normal-button'><i class="bi bi-arrow-down-circle"></i></span>
                    <span className='normal-button'><i class="bi bi-three-dots"></i></span>
                </div>
                <div className='gestures-list'>
                    <button className='gestures-button'>
                        <p>List</p>
                        <span><i class="bi bi-list-ul"></i></span>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default AlbumCover