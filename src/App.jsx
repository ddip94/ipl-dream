import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

function App() {
  const [players, setPlayers] = useState([]);
  const [activeTab, setActiveTab] = useState("available");
  const [coin, setCoin] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [hasClaimed, setHasClaimed] = useState(false);

  useEffect(() => {
    fetch("/players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const handleClaimCredit = () => {
    if (hasClaimed) {
      toast.warning("You have already claimed your free credit");
      return;
    }

    setCoin((prev) => prev + 6000000);
    setHasClaimed(true);
    toast.success("Credit added to your account");
  };

  const handleChoosePlayer = (player) => {
    const alreadySelected = selectedPlayers.some(
      (p) => p.playerId === player.playerId,
    );

    if (alreadySelected) {
      toast.error("Player already selected");
      return;
    }

    if (selectedPlayers.length >= 6) {
      toast.error("You can select maximum 6 players");
      return;
    }

    if (coin < player.biddingPrice) {
      toast.error("Not enough coin! Claim free credit");
      return;
    }

    setCoin(coin - player.biddingPrice);
    setSelectedPlayers([...selectedPlayers, player]);
    toast.success(`${player.name} selected`);
  };

  const handleRemovePlayer = (player) => {
    setSelectedPlayers(
      selectedPlayers.filter((p) => p.playerId !== player.playerId),
    );
    setCoin(coin + player.biddingPrice);
    toast.info(`${player.name} removed`);
  };

  return (
    <div>
      <Navbar coin={coin} />
      <Banner onClaim={handleClaimCredit} hasClaimed={hasClaimed} />

      <div className="max-w-6xl mx-auto px-4 mt-10 flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          {activeTab === "available"
            ? "Available Players"
            : `Selected Player (${selectedPlayers.length}/6)`}
        </h2>

        <div className="flex border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setActiveTab("available")}
            className={`px-5 py-2 font-semibold ${
              activeTab === "available" ? "bg-[#fe6929]" : "text-gray-500"
            }`}
          >
            Available
          </button>

          <button
            onClick={() => setActiveTab("selected")}
            className={`px-5 py-2 font-semibold ${
              activeTab === "selected"
                ? "bg-[rgb(162,41,254)]"
                : "text-gray-500"
            }`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {activeTab === "available" ? (
        <AvailablePlayers
          players={players}
          selectedPlayers={selectedPlayers}
          onChoose={handleChoosePlayer}
        />
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          onRemove={handleRemovePlayer}
          onAddMore={() => setActiveTab("available")}
        />
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar
        pauseOnHover={false}
        limit={2}
        newestOnTop
      />
    </div>
  );
}

export default App;
