import React from 'react';
import logo from '../../assets/logo.png'
import { BsCoin } from "react-icons/bs";

const Navbar = ({coin}) => {
    return (
        <div className="flex justify-between w-10/12 mx-auto">
            <img src={logo} alt="" />
            <div className='flex items-center '>
                <div className='hidden lg:flex gap-4 items-center'>
                <button>Home</button>
                <button>Fixer</button>
                <button>Schedule</button>
                <button>Team</button>
                </div>
                <span className='ml-4 border px-4 flex items-center gap-2'>{coin} Coin <BsCoin /></span>


            </div>

            
        </div>
    );
};

export default Navbar;