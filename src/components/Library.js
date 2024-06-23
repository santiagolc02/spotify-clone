import './Library.css'
import LibraryAlbum from './LibraryAlbum'
import LibraryButton from './LibraryButton'
import MovingPic from '../assets/moving-pictures.jpg'
import DivisionBell from '../assets/the-division-bell.jpg'
import RAM from '../assets/ram-album.jpg'
import Toxicity from '../assets/toxicity.jpg'
import Octvarium from '../assets/octavarium.jpg'
import Cigarettes from '../assets/cigarettes.jpg'
import Coisas from '../assets/coisas.jpg'
import Nevermind from '../assets/nevermind.jpg'
import AROBTTH from '../assets/a-rush-of-blood.jpg'
import ECOS from '../assets/ecos.jpg'
import ATRH from '../assets/at-the-roadhouse.jpg'
import FearInoculum from '../assets/fear-inoculum.jpg'
import Keane from '../assets/keane.jpg'
import IAmIWas from '../assets/i-am-i-was.jpg'
import JarOfFlies from '../assets/jar-of-flies.jpg'
import Deftones from '../assets/Deftones.jpg'
import Foo from '../assets/foo-fighters.jpg'
import Money from '../assets/money-for-nothing.jpg'
import Drake from '../assets/drake.jpg'


function Library() {
    return (
        <div className='library'>
            <div className='home-search'>
                <LibraryButton icon = {<i class="bi bi-house"></i>} title = "Home"></LibraryButton>
                <LibraryButton icon = {<i class="bi bi-search"></i>} title = "Search"></LibraryButton>
            </div>

            <div className='library-div'>
                <div className='library-top'>
                    <button className='library-button-library'>
                        <span><i class="bi bi-music-note-list"></i></span>
                        <h4>My Library</h4>
                    </button>
                    <div className='library-icons'>
                        <button className='plus-sign'><i class="bi bi-plus-lg"></i></button>
                        <button className='show-more'><i class="bi bi-arrow-right"></i></button>
                    </div>  
                </div>
            <div className='library-buttons'>
                <button className='library-buttons-button'>PLaylists</button>
                <button className='library-buttons-button'>Podcasts & Shows</button>
                <button className='library-buttons-button'>Albums</button>
                <button className='library-buttons-button'>Artists</button>
            </div>
            <div className='search-recents'>
                <button className='search-button'>
                    <span><i class="bi bi-search"></i></span>
                </button>
                <button className='recents-button'>
                    <h4>Recents</h4>
                    <span className='recents-button-icon'><i class="bi bi-list-ul"></i></span>
                </button>
            </div>
            <div className='library-albums'>
                <LibraryAlbum cover = {MovingPic} title = {"Moving Pictures"} artist = {"Rush"}></LibraryAlbum>
                <LibraryAlbum cover = {DivisionBell} title = {"The Division Bell"} artist = {"Pink Floyd"}></LibraryAlbum>
                <LibraryAlbum cover = {Money} title = {"Money For Nothing"} artist = {"Dires Straits"}></LibraryAlbum>
                <LibraryAlbum cover = {RAM} title = {"Random Access Memories"} artist = {"Darf Punk"}></LibraryAlbum>
                <LibraryAlbum cover = {Toxicity} title = {"Toxicity"} artist = {"System of A Down"}></LibraryAlbum>
                <LibraryAlbum cover = {Drake} title = {"Dark Lane Demo Tapes"} artist = {"Drake"}></LibraryAlbum>
                <LibraryAlbum cover = {Octvarium} title = {"Octavarium"} artist = {"Dream Theater"}></LibraryAlbum>
                <LibraryAlbum cover = {JarOfFlies} title = {"Jar of Flies"} artist = {"Alice in Chains"}></LibraryAlbum>
                <LibraryAlbum cover = {Cigarettes} title = {"Cigarettes After Sex"} artist = {"Cigarettes After Sex"}></LibraryAlbum>
                <LibraryAlbum cover = {Coisas} title = {"Coisas da Geração"} artist = {"Lagum"}></LibraryAlbum>
                <LibraryAlbum cover = {FearInoculum} title = {"Fear Inoculum"} artist = {"TOOL"}></LibraryAlbum>
                <LibraryAlbum cover = {IAmIWas} title = {"i am > i was"} artist = {"21 Savage"}></LibraryAlbum>
                <LibraryAlbum cover = {Deftones} title = {"Saturday Night Wrist"} artist = {"Deftones"}></LibraryAlbum>
                <LibraryAlbum cover = {AROBTTH} title = {"A Rush of Blood to The Head"} artist = {"Coldplay"}></LibraryAlbum>
                <LibraryAlbum cover = {ECOS} title = {"ECOS"} artist = {"Camilo Septimo"}></LibraryAlbum>
                <LibraryAlbum cover = {Keane} title = {"Hopes and Fears"} artist = {"Keane"}></LibraryAlbum>
                <LibraryAlbum cover = {ATRH} title = {"At the Roadhouse"} artist = {"The Paper Kites"}></LibraryAlbum>
                <LibraryAlbum cover = {Nevermind} title = {"Nevermind"} artist = {"Nirvana"}></LibraryAlbum>
                <LibraryAlbum cover = {Foo} title = {"The Color And The Shape"} artist = {"Foo Fighers"}></LibraryAlbum>
            </div>
            
            </div>
        </div>
    )
}

export default Library
