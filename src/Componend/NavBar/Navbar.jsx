import React from 'react';
import navImg from '../../assets/logo.png'
import navCoin from '../../assets/dollar-1.png'

const Navbar = ({balance}) => {
    return (
        <div>
                 <div className="navbar mx-auto  bg-white mb-10 rounded fixed top-0 left-0 w-full bg-white shadow-md z-50">
              <div className="flex-1 ">
                <img src={navImg} alt="" className='w-[60px] h-[60px]'/>
              </div>
              <div className="flex">
                <ul className="flex justify-between items-center">
                  <li className='mr-10 text-[16px] text-[#131313]'>
                    <a href="">Home</a>
                  </li>
                  <li className='mr-10 text-[16px] text-[#131313]'>
                    <a href="">Fixture</a>
                  </li>
                  <li className='mr-10 text-[16px] text-[#131313]'>
                    <a href="">Teams</a>
                  </li>
                  <li className='mr-10 text-[16px] text-[#131313]'>
                    <a href="">Schedules</a>
                  </li>
                </ul>
                <button className='btn flex justify-center items-center gap-2'>
                  <span>{balance}</span>
                  <span> Coin</span>
                  <img src={navCoin} alt="" />
                </button>
            
              </div>
            </div>
        </div>
    );
};

export default Navbar;