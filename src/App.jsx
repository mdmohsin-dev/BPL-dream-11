import { useEffect, useState } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Players from "./components/Player/Players"
import SelectedPlayers from "./components/Player/SelectedPlayers"

function App() {

  const [activeSection, setActiveSection] = useState('available')

  const [selectedPlayers, setSelectedPlayers] = useState([])

  const [coin, setCoin] = useState(0)

  const [claim, setClaim] = useState(true)


  useEffect(() => {
    const savedPlayer = localStorage.getItem("player")
    if (savedPlayer) {
      setSelectedPlayers(JSON.parse(savedPlayer))
    }
  }, [])

  const handleSelectPlayer = (player) => {
    const remainingCoin = coin - player.price;
    if (coin < player.price) {
      alert("You have do not sufficient balance")
      return
    }
    setCoin(remainingCoin)
    
    const newPlayer = [...selectedPlayers, player]
    setSelectedPlayers(newPlayer)
    localStorage.setItem("player", JSON.stringify(newPlayer))
  }


  const handleRemovePlayer = (player) => {
    const remainingPlayer = selectedPlayers.filter(p => p.player_id !== player.player_id)
    setSelectedPlayers(remainingPlayer)
    localStorage.setItem("player", JSON.stringify(remainingPlayer))
  }

  const handleCoin = (newCoin) => {
    setClaim(false)
    if (claim) {
      setCoin(coin + newCoin)
    }
    else {
      alert("You have alaready claimd")
      return
    }
  }


  return (
    <div className="bg-white">
      <div className="max-w-330 w-full mx-auto px-4 md:px-6 xl:px-0">
        <Navbar coin={coin}></Navbar>
        <Banner handleCoin={handleCoin}></Banner>

        <div className='flex flex-col-reverse gap-6 md:gap-0 md:flex-row  justify-between items-center mt-20 text-black'>
          <h3 className='text-3xl font-bold'>{activeSection === 'available' ? 'Available Players' : `Selected Players(${selectedPlayers.length})`}</h3>

          <div className='w-64 border border-gray-300 rounded-xl flex text-lg cursor-pointer'>
            <button onClick={() => setActiveSection('available')}
              className={`${activeSection === 'available' && 'bg-[#E7FE29] font-semibold'} w-1/2 text-black p-3 rounded-l-xl cursor-pointer`}>Available</button>
            <button onClick={() => setActiveSection('selected')}
              className={`${activeSection === 'selected' && 'bg-[#E7FE29]  font-semibold'} w-1/2 flex justify-end p-3 rounded-r-xl cursor-pointer text-black`}>Selected <span>({selectedPlayers.length})</span></button>
          </div>

        </div>

        <div>
          {
            activeSection === 'available' &&
            (
              <Players handleSelectPlayer={handleSelectPlayer}></Players>
            )
          }
          {
            activeSection === 'selected' && <SelectedPlayers
              handleRemovePlayer={handleRemovePlayer}
              selectedPlayers={selectedPlayers}></SelectedPlayers>
          }
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
