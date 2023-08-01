import { useState, Dispatch, SetStateAction, useRef, useEffect } from 'react'
import { ReactComponent as Processor } from '../assets/processor.svg'
import { ReactComponent as Motherboard } from '../assets/motherboard.svg'
import { ReactComponent as VideoCard } from '../assets/videocard.svg'
import { ReactComponent as Search } from '../assets/search.svg'
import { ReactComponent as PSU } from '../assets/psu.svg'
import { ReactComponent as Memory } from '../assets/memory.svg'
import { ReactComponent as Chassis } from '../assets/chassis.svg'
import { ReactComponent as Storage } from '../assets/storage.svg'
import { ReactComponent as Cooler } from '../assets/cooler.svg'

interface Props {
    setSearchedProducts: Dispatch<SetStateAction<{ full_name: string, uid: string }[] | null>>
    setIsLoading: Dispatch<SetStateAction<boolean | null>>
    category: string
    setCategory: Dispatch<SetStateAction<string>>
}

const SearchBar = ({ setIsLoading, setSearchedProducts, category, setCategory }: Props) => {
    const [term, setTerm] = useState<string>('')
    const [categoryIsOpen, setCategoryIsOpen] = useState<boolean>(false)
    const categoryRef = useRef<HTMLDivElement>(null);
    const fetchProducts = async (searchTerm: string, category: string) => {
        setIsLoading(true)
        const backendUrl = import.meta.env.BACKEND_URL || 'http://localhost:3000'
        const response = await fetch(`${backendUrl}/searches?term=${searchTerm}&category=${category}`);
        const data = await response.json();
        setSearchedProducts(data.result)
        setIsLoading(false)
    }
    const categories = [
        { value: 'processors', label: 'Processors', icon: <Processor /> },
        { value: 'motherboards', label: 'Motherboards', icon: <Motherboard /> },
        { value: 'video_cards', label: 'Video Cards', icon: <VideoCard /> },
        { value: 'power_supply', label: 'Power Supplies', icon: <PSU /> },
        { value: 'memory', label: 'Memories', icon: <Memory /> },
        { value: 'chassis', label: 'Chassis', icon: <Chassis /> },
        { value: 'storage', label: 'Storages', icon: <Storage /> },
        { value: 'cpu_cooler', label: 'Coolers', icon: <Cooler /> },
    ];

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (categoryRef.current && !categoryRef.current.contains(e.target as Node)) {
                setCategoryIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    const handleCategoryChange = (value: string) => {
        setCategory(value);
        setCategoryIsOpen(false);
    };

    return (
        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="flex">
                <div ref={categoryRef} className="relative">
                    <button
                        onClick={() => setCategoryIsOpen(!categoryIsOpen)}
                        className="min-h-[42px] z-10 whitespace-nowrap border-r-0 inline-flex items-center py-2 px-2 sm:py-2.5 sm:px-4 text-sm font-medium text-center border rounded-l-lg bg-gray-700 hover:bg-gray-600 focus:ring-gray-700 text-white border-gray-600"
                        type="button"
                    >
                        <div className="w-5">{categories.find((cat) => cat.value === category)?.icon}</div>
                        <div className="hidden sm:inline-flex">
                            {categories.find((cat) => cat.value === category)?.label}
                        </div>
                        <svg aria-hidden="true" className="w-4 h-4 m-0 sm:ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    {categoryIsOpen && (
                        <div className="absolute z-50 text-white flex flex-col w-44 border rounded-md top-14 bg-gray-700 border-gray-600">
                            {categories.map((cat) => (
                                <button
                                    key={cat.value}
                                    className="z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center bg-gray-700 hover:bg-gray-600 text-white"
                                    type="button"
                                    onClick={() => handleCategoryChange(cat.value)}
                                >
                                    <div className="w-5">{cat.icon}</div>
                                    <div className="inline-flex pl-2">{cat.label}</div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <div className="relative w-full">
                    <input
                        onChange={(e) => setTerm(e.target.value)}
                        autoFocus
                        type="search"
                        className="outline-0 block p-2.5 w-full z-20 text-sm rounded-r-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                        placeholder="Search for city or address"
                    />
                    <button
                        onClick={() => {
                            fetchProducts(term, category)
                            setCategoryIsOpen(false)
                            setSearchedProducts(null)
                        }}
                        type="submit"
                        className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white rounded-r-lg border border-blue-700 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                    >
                        <Search />
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SearchBar