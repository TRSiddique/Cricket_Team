const SelectedPlayer = ({ selected,handleIsActive,isActive }) => {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Selected Players: {selected.length}</h1>
  
        {selected.length === 0 ? (
          <p>No players selected yet.</p>
        ) : (
          <ul>
            {selected.map((player) => {
              const { playerId, name, battingType, image } = player; // Destructuring
  
              return (
                <li key={playerId} className="flex items-center gap-4 border p-3 rounded-lg shadow-md mb-2">
                  {/* Player Image on Left */}
                  <img src={image} alt={name} className="w-16 h-16 rounded-lg object-cover border" />
  
                  {/* Player Info on Right */}
                  <div>
                    <h2 className="text-lg font-bold">{name}</h2>
                    <p className="text-gray-600">Batting Type: {battingType}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

<button className={` ${isActive.cart?"btn bg-yellow-400 active":"btn bg-yellow-300 " }`} onClick={()=>handleIsActive("cart")}>Add More Player</button>
      </div>
    );
  };
  
  export default SelectedPlayer;
  