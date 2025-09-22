import React, { use } from 'react';
import Player from '../Player/player';

const AvailablePlayers = ({playersPromise}) => {
    const playersDtata = use(playersPromise);
    //console.log(playersDtata);
    
    return (
        <div>
            <h2>Available Players {playersDtata.length}</h2>
            {
                playersDtata.map(player => <Player key={player.id}
                     player={player}></Player>)
            }
            
        </div>
    );
};

export default AvailablePlayers;