import { IoTrashOutline } from "react-icons/io5";

const SelectedPlayers = ({ selectedPlayers, handleRemovePlayer }) => {

    return (
        <div className="mt-8 text-black">
            {
                selectedPlayers.map(selectPlayer => <div className="mb-6 border border-gray-300 flex justify-between items-center p-4 rounded-2xl">
                    <div className="flex items-center gap-6">
                        <img className="w-20 h-20 rounded-2xl" src={selectPlayer.player_img} alt="" />
                        <div>
                            <p className="text-2xl font-semibold">{selectPlayer.player_name}</p>
                            <p className="text-[#717171]">Left hand bat</p>
                        </div>
                    </div>

                    <button onClick={() => handleRemovePlayer(selectPlayer)}
                        className="cursor-pointer"><IoTrashOutline size={26} color="red"></IoTrashOutline></button>
                </div>)
            }

        </div>
    );
};

export default SelectedPlayers;