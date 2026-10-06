import PlayerCard from '../PlayerCard/PlayerCard'

const AvailablePlayers = ({ players, selectedPlayers, onChoose }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player) => (
          <PlayerCard
            key={player.playerId}
            player={player}
            isSelected={selectedPlayers.some(
              (p) => p.playerId === player.playerId
            )}
            onChoose={onChoose}
          />
        ))}
      </div>
    </div>
  )
}

export default AvailablePlayers