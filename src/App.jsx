
import { Suspense, useState } from 'react';
import './App.css';
import AvailablePlayers from './Componend/AvailablePlayers/AvailablePlayers';
import Navbar from './Componend/NavBar/Navbar';
import SelectedPlayers from './Componend/SelectedPlayers/selectedPlayers';

const playersPromise = fetch('/players.json')
.then(res => res.json())

function App() {
 const [toggle, setToggle] = useState(true);
const [balance, setBalance] = useState(300);
const [selectedPlayer, setSelectedPlayer] = useState([]);
//console.log(selectedPlayer);

  return (
    <>
    

   <Navbar balance={balance}></Navbar>
   <div className='flex justify-between items-center p-4 w-11/12 mx-auto mt-20'>

            <h2 className='font-bold text-3xl text-[131313] py-4'>Available Players</h2>
            <div  className='border-1  rounded-2xl border-[#7777774d]'>

            <button onClick={() => setToggle(true)} className={`p-2.5 rounded-2xl  ${toggle ? "bg-[#E7FE29]": ""}`}>Available</button>
            <button onClick={() => setToggle(false)} className={`p-2.5 rounded-2xl ${toggle === false ? "bg-[#E7FE29]": ""}`}>Selected <span>(0)</span></button>
            </div>
            </div>
     {
      toggle === true ? 
   <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>   
<AvailablePlayers setSelectedPlayer={setSelectedPlayer} selectedPlayer={selectedPlayer} balance={balance} setBalance={setBalance} playersPromise={playersPromise}></AvailablePlayers>
   </Suspense> 
   :
<SelectedPlayers selectedPlayer={selectedPlayer}></SelectedPlayers>
     }


    

    </>
  )
}

export default App
