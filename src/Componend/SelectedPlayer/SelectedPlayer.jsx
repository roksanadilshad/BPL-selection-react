import React from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";

const SelectedPlayer = ({selectedNewPlayer, removePlayers}) => {
   const {image, name, battingStyle} = selectedNewPlayer;

   const handleRemove = () =>{
    removePlayers(selectedNewPlayer)
   }
    
    return (
        <div>
            <div className='border-y-[1px] border-[#7777] flex justify-between items-center m-3'>
                <div className='p-2 flex justify-between items-center'>
                    <img src={image} alt="" className='w-16 h-16 pr-2 rounded-xl' />
                    <div>
                        <h3 className='font-semibold text-2xl'>{name}</h3>
                    <p className='text-[#1313138e] pt-1'>{battingStyle}</p>
                    </div>
                </div>
                <div>
                    <RiDeleteBin6Fill onClick={handleRemove} className='text-4xl text-red-500'/>
                </div>
            </div>
           
            
            
        </div>
    );
};

export default SelectedPlayer;