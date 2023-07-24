import { useState } from "react"
import SearchBar from "./SearchBar"
import { Link } from "react-router-dom"

interface Props {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Search = ({ isOpen, setIsOpen }: Props) => {
    const [searchedProducts, setSearchedProducts] = useState<{ full_name: string,  uid: string, link?: string}[] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean | null>(null)
    const [category, setCategory] = useState<string>('processors')
    return (
        <>
            {isOpen && <div id="modal" className="fixed top-0 left-0 right-0 z-50 w-full p-4 h-full max-h-full" onClick={() => setIsOpen(!isOpen)}>
                <div className="mx-auto mt-20 relative w-full max-w-2xl max-h-full" onClick={e => e.stopPropagation()}>
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-800 min-h-[164px]">
                        <div className="flex items-start justify-between p-2 sm:p-4 border-b rounded-t dark:border-gray-600">
                            <SearchBar category={category} setCategory={setCategory} setSearchedProducts={setSearchedProducts} setIsLoading={setIsLoading} />
                            <button onClick={() => setIsOpen(false)} type="button" className="self-center ml-1 sm:ml-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className="p-6 overflow-y-auto">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            </p>
                            <div className="flex flex-col">
                                {searchedProducts?.length === 0 && <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">No products! </p>}
                                {!isLoading && searchedProducts?.map((product, index) => (
                                    <Link key={index} to={product.uid ? `/products/${category}/${product.uid}` : product.link as string} className="text-white bg-[#243143] flex items-center h-11 pl-6 my-1 rounded-lg">{product.full_name}</Link>
                                ))}
                                {isLoading &&
                                    [...Array(5)].map((_, i) => {
                                        const width = Math.floor(Math.random() * (366 - 196 + 1)) + 196;
                                        return (
                                            <div key={i} className="bg-[#243143] rounded-md p-4 h-11 w-full my-1">
                                                <div className="animate-pulse flex space-x-4">
                                                    <div className="h-2 bg-slate-700 rounded col-span-2" style={{ width: width }}></div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div className="flex items-center mt-2 p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"></div>
                    </div>
                </div>
            </div>}
        </>
    )

}

export default Search