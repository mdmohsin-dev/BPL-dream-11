import { useEffect, useState } from "react";
import Player from "./Player";

const Players = ({ handleSelectPlayer }) => {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    return (
        <div className='mt-8 text-black'>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    players.map(player => <Player key={player.player_id} player={player} handleSelectPlayer={handleSelectPlayer}></Player>)
                }
            </div>
        </div>
    );
};

export default Players;