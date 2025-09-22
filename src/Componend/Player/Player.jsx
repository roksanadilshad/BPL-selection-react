import React from 'react';

const Player = ({player}) => {
    console.log(player);

    
    const {name, role, battingStyle, bowlingStyle, age, country, image, price, rating} = player;
    return (
        <div className='border-1 border-[#cac8c856] rounded-2xl p-5'>
            <div className='border-b-1 border-[#cac8c856]'>

            <img src={image} alt="" className='w-[300px] h-[250px] rounded-2xl'/>
            <h3>Name: {name}</h3>
            <p>{country}</p>
            <p>{role}</p>
            </div>
            
            <h5>Rating {rating}</h5><span>Age:{age}</span>
            <h5>{battingStyle} </h5> <span>{bowlingStyle}</span>
            <h5>Price: {price}cr</h5>
        </div>
    );
};

export default Player;