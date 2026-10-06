import { useEffect, useRef, useState } from 'react'
import CoinIcon from '../CoinIcon/CoinIcon'

const links = ['Home', 'Fixture', 'Teams', 'Schedules']

const Navbar = ({ coin }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)
  const isFirstRender = useRef(true)

  // Scroll করলে shadow দেখানো
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Coin বদলালে icon ঘোরানো (প্রথমবার load-এ নয়)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    setIsSpinning(true)
    const timer = setTimeout(() => setIsSpinning(false), 600)

    return () => clearTimeout(timer)
  }, [coin])

  return (
    <div
      className={`sticky top-0 z-50 bg-gradient-to-r from-[#E7FE29] to-orange-300 backdrop-blur-md border-b border-gray-100 transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="navbar max-w-6xl mx-auto px-4 py-3">
        {/* Left: hamburger (mobile) + logo */}
        <div className="flex-1 flex items-center gap-2">
          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <a className="text-2xl text-orange-400 font-extrabold cursor-pointer">🏏 IPL Dream</a>
        </div>

        {/* Right: desktop menu + coin */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-gray-500">
            {links.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-black transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <button className="btn btn-outline gap-2">
            <span className="font-bold">{coin.toLocaleString()} Coin</span>
            <CoinIcon
              className={`w-6 h-6 transition-transform duration-300 hover:rotate-12 ${
                isSpinning ? 'animate-spin' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar