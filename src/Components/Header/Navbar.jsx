import React from 'react';
import logo from '../../assets/logo.png'

const Navbar = ({coin}) => {
    return (
        <div className="flex justify-between w-10/12 mx-auto">
            <img src={logo} alt="" />
            <div className='flex gap-4 items-center'>
                <button>Home</button>
                <button>Fixer</button>
                <button>Schedule</button>
                <button>Team</button>
                <span className='ml-4 border px-4'>{coin} Coin</span>


            </div>

            
        </div>
    );
};

export default Navbar;