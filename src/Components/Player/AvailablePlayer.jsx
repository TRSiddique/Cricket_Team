
import Player from './Player';

const AvailablePlayer = ({players,handleSelected,coin}) => {

    
    return (

        <div>
           <h1 className="text-2xl font-bold mb-4">Available Player</h1>

            <div className="grid grid-cols-3">
        {players.map((player) => (
          <Player coin={coin} handleSelected={handleSelected} player={player}></Player>
        ))}
      </div>



            
        </div>
    );
};

export default AvailablePlayer;