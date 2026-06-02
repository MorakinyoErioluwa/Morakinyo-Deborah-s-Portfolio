import { useState } from "react"

export default function Navbar() {

  const [darkMode, setDarkMode] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
    setDarkMode(!darkMode)
  }

  return (
    <>
      {/* navbar*/}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/30 border-b border-black/10 dark:border-white/10 transition duration-500">

        <nav className="flex justify-between items-center px-6 md:px-12 lg:px-20 py-5">

          {/* logo, identity */}
          <h1 className="font-['Space_Grotesk']  text-3xl font-bold text-black dark:text-white">
            D<span className="text-cyan-400">.</span>
          </h1>

          {/* desktop nav */}
          <div className="hidden md:flex items-center gap-10">

            <ul className="flex items-center gap-8 text-gray-700 dark:text-gray-300">

              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-cyan-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-cyan-400 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>

            </ul>

            {/* theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-11 h-11 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center hover:scale-105 transition"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>

            {/* resume-download button */}
            <a
             href="/Morakinyo_Deborah_FrontEnd_Resume.pdf" target="_blank" rel="noopener noreferrer"
             download
            className="bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
            >
             Resume
            </a>

          </div>

          {/* mobile */}
          <div className="flex md:hidden items-center gap-3">

            {/* Mobile theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>

            {/* hamburger icon */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex flex-col gap-1"
            >

              <span className="w-6 h-[2px] bg-black dark:bg-white"></span>

              <span className="w-6 h-[2px] bg-black dark:bg-white"></span>

              <span className="w-6 h-[2px] bg-black dark:bg-white"></span>

            </button>

          </div>

        </nav>

      </header>

      {/* overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        ></div>
      )}

      {/* mobile navbar */}
      <div className={`fixed top-0 ${menuOpen ? "right-0" : "-right-full"} w-[75%] sm:w-[60%] h-screen bg-white dark:bg-[#111111] z-50 border-l border-black/10 dark:border-white/10 transition-all duration-500`}>

        <div className="p-8">

          {/* TOP */}
          <div className="flex justify-between items-center">

            <h2 className="text-2xl font-bold text-black dark:text-white">
              Menu
            </h2>

            <button
              onClick={() => setMenuOpen(false)}
              className="text-4xl text-black dark:text-white"
            >
              ×
            </button>

          </div>

          {/* mobile-menu Links */}
          <ul className="flex flex-col gap-10 mt-20 text-xl text-black dark:text-white">

            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

          </ul>

        </div>

      </div>
    </>
  )
}