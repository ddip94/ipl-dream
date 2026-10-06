const Banner = ({ onClaim, hasClaimed }) => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="relative overflow-hidden rounded-3xl bg-[#131313] text-white py-16 md:py-20 px-6 text-center shadow-2xl">
        {/* Glow effects */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-indigo-500/60 blur-3xl"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-rose-300/50 blur-3xl"></div>

        {/* Dotted pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Logo */}
          <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-5xl shadow-lg">
            🏏
          </div>

          {/* Badge */}
          <span className="mt-6 px-4 py-1 rounded-full text-sm border border-[#E7FE29]/50 text-[#E7FE29] bg-[#E7FE29]/10">
            Fantasy Cricket League
          </span>

          {/* Heading */}
          <h1 className="mt-5 text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl">
            Assemble Your Ultimate{' '}
            <span className="bg-gradient-to-r from-[#E7FE29] to-orange-400 bg-clip-text text-transparent">
              Dream 11
            </span>{' '}
            Cricket Team
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Beyond Boundaries Beyond Limits
          </p>

          {/* Button */}
          <div
        className={`mt-8 p-1.5 rounded-2xl border transition-all duration-300 ${
        hasClaimed
          ? 'border-gray-600'
         : 'border-[#E7FE29]/60 hover:shadow-[0_0_30px_rgba(231,254,41,0.5)]'
          }`}
        >
  <button
    onClick={onClaim}
    disabled={hasClaimed}
    className={`px-7 py-3 rounded-xl font-bold transition-transform duration-300 ${
      hasClaimed
        ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
        : 'bg-[#E7FE29] text-black hover:scale-105 active:scale-95 cursor-pointer'
      }`}
  >
    {hasClaimed ? 'Credit Claimed ✓' : 'Claim Free Credit'}
  </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Banner