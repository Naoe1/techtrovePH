import Search from "../components/Search"
import { useState } from "react"
import { ReactComponent as SearchLogo } from "../assets/search.svg"
import { Link } from "react-router-dom"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div id="home-container">
            <div className="mt-16">
                <h1 id="headline" className="text-white font-[800] text-center sm:text-6xl text-4xl">Unlock Unbeatable Prices on Tech Components</h1>
                <p className="text-center text-[#b4bcd0] text-base sm:text-lg mt-6 max-w-4xl mx-auto">Find the best deals on PC components with our price matching website, connecting you to top online stores:</p>
                <div className="grid text-xs grid-cols-2 md:grid-cols-3 gap-4 text-white sm:text-base mt-6 max-w-4xl mx-auto">
                    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center flex justify-center items-center">
                        <p>Bermorzone</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center flex justify-center items-center">
                        <p>DynaQuest PC</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center flex justify-center items-center">
                        <p>EasyPC</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center flex justify-center items-center">
                        <p>IT World</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center flex justify-center items-center">
                        <p>PC Express</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center flex justify-center items-center">
                        <p>Techmovers</p>
                    </div>
                </div>
                <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
                    <Link to={'/list'}>
                        <button type="button" className="w-full rounded-3xl text-base text-white bg-gradient-to-br from-purple-600 h-16 sm:w-36 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium px-5 py-2.5 text-center mr-2 mb-2">Build a PC</button>
                    </Link>
                    <button onClick={() => setIsOpen(!isOpen)} type="button" className="self-center hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
                        <SearchLogo />
                        <span className="flex-auto">Quick search...</span>
                    </button>
                    <Search isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
            </div>
        </div>
    )
}

export default Home