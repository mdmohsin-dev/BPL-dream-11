import { FaFlag, FaUser } from "react-icons/fa";


const Player = ({ player,handleSelectPlayer }) => {

    const { player_img, player_name, player_country, player_category, ratting, batting_style, price } = player

    return (
        <div className='w-full border border-gray-300 rounded-2xl p-4 text-black'>
            <img className='w-full h-64 rounded-2xl ' src={player_img} alt="" />
            <div className="flex items-center gap-3 pt-6">
                <FaUser></FaUser>
                <p className="text-xl font-semibold">{player_name}</p>
            </div>
            <div className="pt-6 flex items-center justify-between border-b border-gray-300 pb-6">
                <div className="flex items-center gap-3">
                    <FaFlag></FaFlag>
                    <p>{player_country}</p>
                </div>
                <p className="bg-gray-200 py-1 px-2 rounded-lg">{player_category}</p>
            </div>
            <div className="flex items-center justify-between pt-4">
                <p className="font-bold">Ratting: {ratting}</p>
                <p className="font-bold">{batting_style}</p>
            </div>
            <div className="flex justify-between items-center pt-5">
                <p className="font-bold ">Price:${price}</p>
                <button onClick={()=>handleSelectPlayer(player)}
                className="bg-[#E7FE29] text-black border border-gray-300 py-1 px-2 cursor-pointer rounded-lg hover:-translate-y-1 transition">Choose player</button>
            </div>
        </div>
    );
};

export default Player;