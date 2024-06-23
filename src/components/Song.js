import './Song.css'

function Song({number, title, plays, time}) {
    return (
        <div className='song'>
            <div className='number'>
                <h4 className='song-number'>{number}</h4>
            </div>
            <div className='title-band'>
                <h4> {title}</h4>
                <p>Pink Floyd</p>
            </div>
            <div className='song-plays-div'>
                <h4 className='song-plays'>{plays}</h4>
            </div>
            <div className='song-time-div'>
                <h4 className='song-time'>{time}</h4>
            </div>
        </div>
    )
}

export default Song
