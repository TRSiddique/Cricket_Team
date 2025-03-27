import { useState, useEffect } from "react";
import Player from "../Player/Player";
import SelectedPlayer from "../Player/SelectedPlayer";
import './Players.css'
import AvailablePlayer from "../Player/AvailablePlayer";


const Players = ({handleIsActive,isActive,coin,setCoin}) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const [selected, setSelected]=useState([])
  const handleSelected =(player)=>{
   const newSelected=[...selected, player]
    setSelected(newSelected)


  }

 console.log(selected)

  return (
    <div className='w-10/12 mx-auto mt-5 pt-20 lg:pt-5 pb-[200px] border'>
      <div className='flex justify-between'>
      <h2 className='text-4xl'></h2>

<div className='flex items-end justify-between'>
<button className={`${isActive.cart?"btn active":"btn" }`} onClick={()=>handleIsActive("cart")}>Available</button>
<button className={`${isActive.cart?"btn":"active btn"}`} onClick={()=>handleIsActive("About")}>Selected ({selected.length}) </button>
</div>
      </div>

      {isActive.cart?<AvailablePlayer setCoin={setCoin} coin={coin} handleSelected={handleSelected} players={players}></AvailablePlayer>:<SelectedPlayer handleIsActive={handleIsActive} isActive={isActive} selected={selected}></SelectedPlayer>}
      
      
      
    </div>
  );
};

export default Players;
