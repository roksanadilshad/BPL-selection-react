
import { Suspense, useState } from 'react';
import './App.css';
import { ToastContainer} from 'react-toastify';
import AvailablePlayers from './Componend/AvailablePlayers/AvailablePlayers';
import Navbar from './Componend/NavBar/Navbar';
import SelectedPlayers from './Componend/SelectedPlayers/selectedPlayers';

const playersPromise = fetch('/players.json')
.then(res => res.json())

function App() {
 const [toggle, setToggle] = useState(true);
const [balance, setBalance] = useState(800);
const [selectedPlayer, setSelectedPlayer] = useState([]);
//console.log(selectedPlayer);
const removePlayers = (pera) => {
     //console.log(pera);
     const filterdData = selectedPlayer.filter(plyr => plyr.id !== pera.id);
     //console.log(filterdData);
     setSelectedPlayer(filterdData);
     setBalance(balance + pera.price);
     
}

  return (
    <>
    

   <Navbar balance={balance}></Navbar>
   <div className='flex justify-between items-center pt-4 mt-20 
   w-11/12 mx-auto'>

            <h2 className='font-bold text-3xl text-[#131313] py-4'>
              {
                toggle ? "Available Players" : `Selected Player (${selectedPlayer.length}/6)`
              }
            </h2>

            <div  className='border-1  rounded-2xl border-[#7777774d] '>

            <button onClick={() => setToggle(true)} className={`p-2.5 rounded-2xl  ${toggle ? "bg-[#E7FE29]": ""}`}>Available</button>
            <button onClick={() => setToggle(false)} className={`p-2.5 rounded-2xl ${toggle === false ? "bg-[#E7FE29]": ""}`}>Selected <span>({selectedPlayer.length})</span></button>
            </div>
            </div>
     {
      toggle === true ? 
   <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>   
<AvailablePlayers setSelectedPlayer={setSelectedPlayer} selectedPlayer={selectedPlayer} balance={balance} setBalance={setBalance} playersPromise={playersPromise}></AvailablePlayers>
   </Suspense> 
   :
<SelectedPlayers removePlayers={removePlayers} selectedPlayer={selectedPlayer}></SelectedPlayers>
     }


    <ToastContainer></ToastContainer>

    </>
  )
}

export default App
