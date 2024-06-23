import './FriendlyAct.css'
import Friend from './Friend'
import friend1 from '../assets/pro-pic-1.jpg'
import friend2 from '../assets/pro-pic-2.jpg'
import friend3 from '../assets/pro-pic-3.jpg'
import friend4 from '../assets/pro-pic-4.jpg'
import friend5 from '../assets/pro-pic-5.jpg'
import friend6 from '../assets/pro-pic-6.jpg'
import friend7 from '../assets/pro-pic-7.jpg'
import friend8 from '../assets/pro-pic-8.jpg'
import friend9 from '../assets/pro-pic-9.jpg'
import friend10 from '../assets/pro-pic-10.jpg'
import friend11 from '../assets/pro-pic-11.jpg'
import friend12 from '../assets/pro-pic-12.jpg'
import friend13 from '../assets/pro-pic-13.jpg'
import friend14 from '../assets/pro-pic-14.jpg'
import friend15 from '../assets/pro-pic-15.jpg'
import friend16 from '../assets/pro-pic-16.jpg'
import friend17 from '../assets/pro-pic-17.jpg'
import friend18 from '../assets/pro-pic-18.jpg'
import friend19 from '../assets/pro-pic-19.jpg'
import friend20 from '../assets/pro-pic-20.jpg'
import friend21 from '../assets/pro-pic-21.jpg'
import friend22 from '../assets/pro-pic-22.jpg'

function FriendlyAct() {
    return (
        <div className='friendly-act'>
            <div className='friendly-act-upper'>
                <h4>Friendly Activity</h4>
                <button className='friendly-act-button'><i class="bi bi-person-add"></i></button>
                <button className='friendly-act-button'><i class="bi bi-x"></i></button>
            </div>
            <div className='friendly-act-people'>
                <Friend img={friend1} name={'Virgilio Lozano'} song = {"Changing of The Guards"} artist = {"Bob Dylan"} album = {"Street - Legal"}></Friend>
                <Friend img={friend13} name={'Luis González'} song = {"TOP -Japanese ver.-"} artist = {"Stray Kids"} album = {"TOP -Japanese ver.-"}></Friend>
                <Friend img={friend2} name={'Leo Corona'} song = {"Ajedrez"} artist = {"Leo Corona, Ray Maldonado"} album = {"Ajedrez"}></Friend>
                <Friend img={friend3} name={'Adrian Treviño'} song = {"Brindge Over Troubled Water"} artist = {"Jacob Collier"} album = {"Djesse Vol. 4"}></Friend>
                <Friend img={friend4} name={'Daniel Salinas'} song = {"Silhouettes"} artist = {"Avicii"} album = {"Silhouettes"}></Friend>
                <Friend img={friend15} name={'Ari Medina'} song = {"Touching The Sky"} artist = {"Rauw Alejandro"} album = {"Touching The Sky"}></Friend>
                <Friend img={friend9} name={'Dante Casso'} song = {"My Way"} artist = {"Frank Sinatra"} album = {"Nothing But The Best"}></Friend>
                <Friend img={friend18} name={'Jassia García'} song = {"Cough Syrup"} artist = {"Young The Giant"} album = {"Young The Giant"}></Friend>
                <Friend img={friend16} name={'Oscar Garza'} song = {"Desvelado"} artist = {"Bobby Pulido"} album = {"Desvelado"}></Friend>
                <Friend img={friend5} name={'Diego Garza'} song = {"Innerbloom"} artist = {"RÜFÜS DU SOL"} album = {"Bloom"}></Friend>
                <Friend img={friend10} name={'Hugo Hernández'} song = {"Mr. Clean"} artist = {"Joung Gravy"} album = {"Snow Cougar"}></Friend>
                <Friend img={friend11} name={'Heidi Sánchez'} song = {"WHERE SHE GOES"} artist = {"Bad Bunny"} album = {"WHERE SHE GOES"}></Friend>
                <Friend img={friend20} name={'Gabriel Betancourt'} song = {"Volví a Nacer"} artist = {"Carlos Vives"} album = {"Corazon Profundo"}></Friend>
                <Friend img={friend22} name={'Luis Zermeño'} song = {"Silence and I"} artist = {"The Alan Parsons Project"} album = {"Eye In The Sky"}></Friend>
                <Friend img={friend17} name={'Paulina Aragón'} song = {"Layla"} artist = {"Derek & The Dominos"} album = {"Layla And The Other Assorted Love Songs"}></Friend>
                <Friend img={friend6} name={'Gerardo Silos'} song = {"For Sale? - Interlude"} artist = {"Kendrick Lamar"} album = {"To Pimp A Butterfly"}></Friend>
                <Friend img={friend14} name={'Paulina Lozano'} song = {"Wish You Were Here"} artist = {"Pink Floyd"} album = {"Wish You Were Here"}></Friend>
                <Friend img={friend7} name={'Cesar Marrufo'} song = {"Wat's Wrong(feat. Zacari, Kendrick Lamar)"} artist = {"Isaiah Rashad"} album = {"The Sun's Tirade"}></Friend>
                <Friend img={friend12} name={'Camila Lozano'} song = {"LoveBomb"} artist = {"Nessa Barrett"} album = {"young forever"}></Friend>
                <Friend img={friend8} name={'Alfredo Rodríguez'} song = {"Surf"} artist = {"Mac Miller"} album = {"Circles"}></Friend>
                <Friend img={friend19} name={'Camila Aguirre'} song = {"Teeth"} artist = {"ENHYPEN"} album = {"DARK MOON SPECIAL ALBUM"}></Friend>
                <Friend img={friend21} name={'Ana Cedillo'} song = {"Bailando - Spanish Version"} artist = {"Enrique Iglesias"} album = {"SEX AND LOVE"}></Friend>
            </div>
        </div>
    )
}

export default FriendlyAct
