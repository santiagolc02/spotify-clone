import './App.css';
import Library from './components/Library'
import Album from './components/Album'
import FriendlyAct from './components/FriendlyAct';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <div className='top-section'>
        <Library></Library>
        <Album></Album>
        <FriendlyAct></FriendlyAct>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App;
