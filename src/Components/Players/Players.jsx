import { useState, useEffect } from "react";
import Player from "../Player/Player";
const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className='w-10/12 mx-auto'>
      <h2 className='text-4xl'>Available Player</h2>
      <div className="grid grid-cols-3">
        {players.map((player) => (
          <Player player={player}></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
