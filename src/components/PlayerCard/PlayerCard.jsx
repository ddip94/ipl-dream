import CoinIcon from '../CoinIcon/CoinIcon'
const PlayerCard = ({ player, isSelected, onChoose }) => {
  const { name, image, country, role, battingType, biddingPrice } = player

  return (
    <div className="card bg-base-100 border border-gray-200 p-4">
      <figure>
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-xl bg-gray-200"
        />
      </figure>

      <div className="mt-4">
        <h2 className="text-lg font-bold flex items-center gap-2">
          👤 {name}
        </h2>

        <div className="flex justify-between items-center mt-3 text-gray-500">
          <span>🏳️ {country}</span>
          <span className="badge badge-ghost">{role}</span>
        </div>

        <div className="border-t border-gray-200 mt-3 pt-3">
          <p className="font-bold">Rating</p>
          <div className="flex justify-between mt-2">
            <span className="font-bold">Batting</span>
            <span className="text-gray-500">{battingType}</span>
          </div>

          <div className="flex justify-between items-center mt-3">
            <p className="font-bold flex items-center gap-1">
         Price: <CoinIcon className="w-5 h-5" /> {biddingPrice.toLocaleString()}
              </p>
            <button
              onClick={() => onChoose(player)}
              disabled={isSelected}
              className="btn btn-sm btn-outline"
            >
              {isSelected ? 'Selected' : 'Choose Player'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerCard