import React, { use } from 'react';
import Player from '../Player/player';

const AvailablePlayers = ({playersPromise, setBalance, balance, selectedPlayer, setSelectedPlayer}) => {
    const playersDtata = use(playersPromise);
    //console.log(playersDtata);
    
    return (
        <div className='w-11/12 mx-auto'>
            
            <div className='grid grid-cols-3 gap-4'>

            {
                playersDtata.map(player => <Player selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} balance={balance}  setBalance={setBalance} key={player.id}
                     player={player}></Player>)
            }
            
            </div>
        </div>
    );
};

export default AvailablePlayers;