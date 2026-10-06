const CoinIcon = ({ className = 'w-6 h-6' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="coinGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>

      {/* বাইরের গোল */}
      <circle cx="16" cy="16" r="15" fill="url(#coinGradient)" />
      <circle cx="16" cy="16" r="15" fill="none" stroke="#D97706" strokeWidth="1.5" />

      {/* ভিতরের রিং */}
      <circle cx="16" cy="16" r="11" fill="none" stroke="#B45309" strokeWidth="1" opacity="0.5" />

      {/* মাঝের চিহ্ন */}
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fill="#92400E"
        fontFamily="Arial, sans-serif"
      >
        $
      </text>
    </svg>
  )
}

export default CoinIcon