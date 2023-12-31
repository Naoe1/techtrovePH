import { useState } from "react"
import { Link } from "react-router-dom"
import Search from "./Search"
import { ReactComponent as SearchLogo } from "../assets/search.svg"
import { createPortal } from "react-dom"
import { ReactComponent as Logo } from "../assets/logo.svg"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <nav id="top-nav" className="z-50 bg-slate-900/40 fixed top-0 left-0 right-0 border-b border-slate-700 b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8">
                            <Link to={'/'}> <Logo /></Link>
                        </div>
                        <div className="hidden sm:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link to="/" className="text-gray-300 hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                                <Link to="/products/processors" className="text-gray-300 hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium">Products</Link>
                                <Link to="/list" className="text-gray-300 hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium">Build</Link>
                            </div>
                        </div>
                    </div>
                    {createPortal(<Search isOpen={isOpen} setIsOpen={setIsOpen} />, document.body)}
                    <div className="sm:hidden flex justify-center items-center">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <SearchLogo className="w-5 h-5 text-slate-400" />
                        </button>
                        <button onClick={() => setIsExpanded(!isExpanded)} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    {isExpanded && <div className="w-full sm:hidden" id="navbar-hamburger">
                        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
                            </li>
                        </ul>
                    </div>}
                </div>
            </div>

        </nav >
    )
}

export default Navbar