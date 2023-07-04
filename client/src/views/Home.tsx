const Home = () => {
    return (
        <div id="home-container">
            <div className="mt-16">
                <h1 id="headline" className="text-white font-[800] text-center sm:text-6xl text-4xl">Unlock Unbeatable Prices on Tech Components</h1>
                <p className="text-center text-[#b4bcd0] text-base sm:text-lg mt-6 max-w-4xl mx-auto">The ultimate online destination for tech enthusiasts, providing a comprehensive platform to compare PC component prices and gain access to helpful guides, empowering you to create your dream PC with confidence.</p>
                <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
                    <button type="button" className="w-full rounded-3xl text-base text-white bg-gradient-to-br from-purple-600 h-16 sm:w-36 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium px-5 py-2.5 text-center mr-2 mb-2">Build a PC</button>
                </div>

            </div>
        </div>
    )
}

export default Home