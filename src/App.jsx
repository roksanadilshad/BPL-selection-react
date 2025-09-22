
import { Suspense } from 'react';
import './App.css';
import AvailablePlayers from './Componend/AvailablePlayers/AvailablePlayers';
import Navbar from './Componend/NavBar/Navbar';
import SelectedPlayers from './Componend/SelectedPlayers/selectedPlayers';

const playersPromise = fetch('/players.json')
.then(res => res.json())

function App() {
 
  return (
    <>
 
   <Navbar></Navbar>
   <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
    
<AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
   </Suspense>

<SelectedPlayers></SelectedPlayers>

    </>
  )
}

export default App
