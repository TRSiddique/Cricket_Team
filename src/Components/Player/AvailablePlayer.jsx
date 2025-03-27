
import Player from './Player';

const AvailablePlayer = ({players,handleSelected,coin,setCoin}) => {

    
    return (

        <div>
           <h1 className="text-2xl font-bold mb-4 ">Available Player</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player) => (
          <Player setCoin={setCoin} coin={coin} handleSelected={handleSelected} player={player}></Player>
        ))}
      </div>



            
        </div>
    );
};

export default AvailablePlayer;