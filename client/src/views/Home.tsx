import Search from "../components/Search"
import { useState } from "react"
import {ReactComponent as SearchLogo} from "../assets/search.svg"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div id="home-container">
            <div className="mt-16">
                <h1 id="headline" className="text-white font-[800] text-center sm:text-6xl text-4xl">Unlock Unbeatable Prices on Tech Components</h1>
                <p className="text-center text-[#b4bcd0] text-base sm:text-lg mt-6 max-w-4xl mx-auto">The ultimate online destination for tech enthusiasts, providing a comprehensive platform to compare PC component prices and gain access to helpful guides, empowering you to create your dream PC with confidence.</p>
                <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
                    <button type="button" className="w-full rounded-3xl text-base text-white bg-gradient-to-br from-purple-600 h-16 sm:w-36 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium px-5 py-2.5 text-center mr-2 mb-2">Build a PC</button>
                    <button onClick={() => setIsOpen(!isOpen)} type="button" className="self-center hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
                        <SearchLogo/>
                        <span className="flex-auto">Quick search...</span>
                    </button>
                    <Search isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
            </div>
        </div>
    )
}

export default Home