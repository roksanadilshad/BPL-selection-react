import React, { use } from 'react';
import Player from '../Player/player';

const AvailablePlayers = ({playersPromise}) => {
    const playersDtata = use(playersPromise);
    //console.log(playersDtata);
    
    return (
        <div className='w-11/12 mx-auto'>
            
            <div className='grid grid-cols-3 gap-4'>

            {
                playersDtata.map(player => <Player key={player.id}
                     player={player}></Player>)
            }
            
            </div>
        </div>
    );
};

export default AvailablePlayers;