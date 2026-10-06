const SelectedPlayers = ({ selectedPlayers, onRemove, onAddMore }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-6">
      {selectedPlayers.length === 0 && (
        <p className="text-gray-500">You haven't selected any players yet.</p>
      )}

      <div className="space-y-4">
        {selectedPlayers.map((player) => (
          <div
            key={player.playerId}
            className="flex items-center justify-between border border-gray-200 rounded-xl p-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={player.image}
                alt={player.name}
                className="w-16 h-16 rounded-xl object-cover bg-gray-200"
              />
              <div>
                <h3 className="font-bold text-lg">{player.name}</h3>
                <p className="text-gray-500 text-sm">{player.battingType}</p>
              </div>
            </div>

            <button
              onClick={() => onRemove(player)}
              className="text-red-500 hover:text-red-700 cursor-pointer"
              aria-label={`Remove ${player.name}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.35 9m-4.78 0L9.26 9m9.97-3.21c.34.05.68.11 1.02.17m-1.02-.17L18.16 19.67a2.25 2.25 0 01-2.24 2.08H8.08a2.25 2.25 0 01-2.24-2.08L4.77 5.79m14.46 0a48.1 48.1 0 00-3.48-.4m-12 .56c.34-.06.68-.12 1.02-.17m0 0a48.1 48.1 0 013.48-.4m7.5 0v-.92c0-1.18-.91-2.16-2.09-2.2a51.96 51.96 0 00-3.32 0c-1.18.04-2.09 1.02-2.09 2.2v.92m7.5 0a48.67 48.67 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={onAddMore}
        className="btn bg-[#E7FE29] border-none text-black mt-6"
      >
        Add More Player
      </button>
    </div>
  )
}

export default SelectedPlayers