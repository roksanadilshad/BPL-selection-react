import React, { useState } from 'react';
import { IoPerson } from "react-icons/io5";
import { BsFlagFill } from "react-icons/bs";

const Player = ({player, setBalance, balance, selectedPlayer, setSelectedPlayer}) => {
    //console.log(player);
    const [isSelected, setIsSelect] = useState(false);

    
    const {name, role, battingStyle, age, country, image, price, rating} = player;

    const HandleBalance = () =>{
        if(balance < price){
            alert('no enough coin!!')
            return
        };
        setIsSelect(true);
                setBalance(balance - price);
                
    setSelectedPlayer([...selectedPlayer, player])
    }
    return (
        <div className='border-1 border-[#cac8c856] rounded-2xl p-5'>
            <div className='border-b-1 border-[#cac8c856]'>
                <div className='overflow-hidden w-64 h-48 rounded-xl'>

            <img src={image} alt="" className='w-full h-full object-cover'/>
                </div>


            <div className='flex justify-left items-center py-2.5 font-semibold text-2xl text-[#131313]'>

            <IoPerson className='rounded-full mr-2 text-2xl'/>
            <h3>{name}</h3>
            </div>
            <div className='flex justify-between items-center py-2.5'>
                <div className='flex justify-left items-center py-2.5 text-[#13131386] text-[16px]'>
              <BsFlagFill className=' mr-2 text-2xl'/>
            <p>{country}</p>
                </div>
            <p className='p-2 bg-[#5352521f] rounded-xl text-[#131313e3] text-[16px]'>{role}</p>
            </div>
            </div>

            <div className='flex justify-between items-center py-0.5'>

            <h5 className='text-[#131313] font-bold text-[16px]'>Rating {rating}</h5>
            <span>Age:{age}</span>
            </div>
            <div className='flex justify-between items-center py-0.5'>

            <h5 className=' text-[#131313] font-bold text-[16px]'>{battingStyle} </h5> 
            <p className='text-[#13131386] text-[16px]'></p>

            </div>
            <div className='flex justify-between items-center pt-0.5'>

            <h5 className='text-[#131313] font-bold text-[16px]'>Price: {price}k</h5>
            <button disabled={isSelected} onClick={() => HandleBalance(player)} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl ">{isSelected?"Selected":"Choose Player"}</button>
            </div>
           
        </div>
    );
};

export default Player;