import React from 'react';
import bannerImage from '../../assets/banner-main.png'
import bgShadow from '../../assets/bg-shadow.png';

const Banner = ({claimCoin}) => {

    const handleClaimClick = () => {
        alert("🎉 You have claimed free coins!");
        claimCoin(); // Calling the function to update the coin state
      };
    return (
        <div className='flex flex-col w-10/12 items-center mx-auto border h-[400px] p-20 text-white' style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2)),url(${bgShadow})` }}
>
            <img className='h-40 w-40' src={bannerImage} alt="" />
            <h3 className='text-3xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h3>
            <p>Beyond Boundaries Beyond Limit</p>
            <button  onClick={handleClaimClick}  className='px-4 py-2 border border-blue-500 text-blue-500 rounded-lg bg-yellow-300 text-black font-bold lg:mt-10'>Claim Free Coin</button>
            
        </div>
    );
};

export default Banner;