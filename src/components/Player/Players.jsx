import { use, useEffect, useState } from "react";
import Player from "./Player";

const playersPromis = fetch("players.json").then(res => res.json())

const Players = ({ handleSelectPlayer, }) => {

    // const [players, setPlayers] = useState([])

    // useEffect(() => {
    //     fetch('players.json')
    //         .then(res => res.json())
    //         .then(data => setPlayers(data))
    // }, [])


    const players = use(playersPromis)
    console.log(players)

    return (
        <div className='mt-8 text-black'>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    players.map(player => <Player player={player} handleSelectPlayer={handleSelectPlayer}></Player>)
                }
            </div>
        </div>
    );
};

export default Players;