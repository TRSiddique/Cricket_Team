

const Player = ({player,handleSelected,coin,setCoin}) => {
    const { image, name, role, country, biddingPrice ,battingType} = player; 

 const handleClick = () => {
        if (biddingPrice > coin) {
          alert(`Sad!! 
You don't have enough money to buy this player`);
        } else {

            alert(`${name} is selected`);
          handleSelected(player);
          setCoin(coin-player.biddingPrice);
         
        }
      };
    return (
    
    <div className="border p-4 rounded-lg shadow-lg h-[450px] ">   
        <img src={image} alt={name} className="w-full h- object-cover mx-auto " /> 
        
        <h3 className="text-lg font-semibold mt-2">{name}</h3>
        <p>{country}</p>
        <p className="text-gray-600">{role} </p>
        <p>Batting Type: {battingType}</p>
        <div className="flex justify-between">
        <p className="text-green-600 font-bold">Price: ${biddingPrice}</p>
        <button onClick={handleClick} className='border' >Choose Player</button>
        </div>
    </div>
   
    );
};

export default Player;