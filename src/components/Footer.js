import './Footer.css'
import DarkSide from '../assets/darkside.jpg'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-left'>
                <img src= {DarkSide} alt = ""></img>
                <div className='song-band'>
                    <h4>Us and Them</h4>
                    <p>Pink Floyd</p>
                </div>
                <p className='add'><i class="bi bi-plus-circle"></i></p>
            </div>
            <div className='footer-middle'>
                <div className='footer-controls'>
                    <span className='footer-m-button'><i class="bi bi-shuffle"></i></span>
                    <span className='footer-m-button'><i class="bi bi-skip-backward"></i></span>
                    <span className='footer-m-button-play'><i class="bi bi-pause-circle-fill"></i></span>
                    <span className='footer-m-button'><i class="bi bi-skip-forward"></i></span>
                    <span className='footer-m-button'><i class="bi bi-repeat"></i></span>
                </div>
                <div className='progress-bar-main'>  
                    <p>0:34</p>                  
                    <div className='progress-bar'>
                        <div className='progress'>
                            <i className='dot' class="bi bi-dot"></i>
                        </div>
                    </div>
                    <p>7:14</p>
                </div>
            </div>
            <div className='footer-right'>
                <span><i class="bi bi-info-circle"></i></span>
                <span><i class="bi bi-mic"></i></span>
                <span><i class="bi bi-list"></i></span>
                <span><i class="bi bi-speaker"></i></span>
                <span><i class="bi bi-volume-up"></i></span>
                <div className='progress-bar-right'></div>
                <span><i class="bi bi-pip"></i></span>
                <span className='last-element'><i class="bi bi-arrows-angle-expand"></i></span>
            </div>
        </div>
    )
}

export default Footer
