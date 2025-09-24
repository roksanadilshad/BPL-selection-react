import React from 'react';
// import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';


const SelectedPlayers = ({selectedPlayer, removePlayers}) => {
    //console.log(selectedPlayer);
     //const [addToggle, setAddToggle] = useState(false)
    return (
        <div className='w-11/12 mx-auto'>
           

          {
            selectedPlayer.map(selectedNewPlayer => <SelectedPlayer removePlayers={removePlayers} key={selectedNewPlayer.id} selectedNewPlayer={selectedNewPlayer} ></SelectedPlayer>)

           
        }
        <button className="btn btn-accent bg-[#E7FE29] border-[#E7FE29]">Add More</button>
       
        {/* {addToggle && <AvailablePlayers/>} */}
          
        </div>
    );
};

export default SelectedPlayers;