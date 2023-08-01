import { getTableHeaders, isCategory } from "../utils/tableHeaders";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import Pagination from "./Pagination";
import DrawerComponent from "./Drawer";
import { useSearchParams } from 'react-router-dom';

interface Product {
    full_name: string,
    uid: string,
    min_price: number
}

const ProductTable = () => {
    const [data, setData] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const { category } = useParams();
    const [error, setError] = useState<{ status: number; error: string } | null>(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [tableHeaders, setTableHeaders] = useState<{ label: string; property: string; }[]>([])
    const [page, setPage] = useState<number>(Number(searchParams.get('page')) || 1)
    const [count, setCount] = useState<number>(0)
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [forceRefetch, setForceRefetch] = useState<boolean>(false);
    const fetchData = async () => {
        window.scrollTo(0, 0)
        try {
            setIsLoading(true);
            const backendUrl = import.meta.env.BACKEND_URL || 'http://localhost:3000'
            const response = await fetch(`${backendUrl}/products/${category}?page=${page}&filter=${searchTerm}`);
            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData)
                throw (errorData);
            }
            const responseData: { data: Product[], count: number } = await response.json();
            setIsLoading(false);
            setData(responseData.data);
            setCount(responseData.count)
        } catch (error) {
            setError(error as { status: number; error: string })
        }
    };
    
    useEffect(() => {
        setSearchParams({ page: searchParams.get('page') || '1' })
        setPage(Number(searchParams.get('page')) || 1)
    }, [searchParams, setSearchParams])

    useEffect(() => {
        if (category) {
            if (isCategory(category)) {
                const columns = getTableHeaders(category);
                setTableHeaders(columns)
            }
        }
        fetchData()
    }, [category, forceRefetch, searchParams])

    if (error && data.length === 0) {
        return (
            <div>
                <div className="flex p-3">
                <DrawerComponent />
                </div>
                <div className="h-screen flex flex-col items-center justify-center gap-3">
                    <div className="bold text-slate-100">{error.status} Error</div>
                    <div className="text-xs text-slate-400">{error.error || 'Something Went Wrong.'}</div>
                </div>
            </div>
            )
    }

    return (
        <>
            <div className="border-b border-slate-700 h-16 bg-slate-900 flex items-center justify-between sm:px-6" id="filters">
                <DrawerComponent setSearchTerm={setSearchTerm} setPage={setPage} />
                <form onSubmit={(e) => {
                    e.preventDefault()
                    setPage(1)
                    setForceRefetch(!forceRefetch)
                }}>
                    <div className="relative sm:w-96 w-full">
                        <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type="search" className="block p-2.5 w-full z-20 text-sm rounded-lg border bg-gray-700 outline-none border-gray-600 placeholder-gray-400 text-white" placeholder={`Search for a ${(category && category.endsWith('s') ? category.substring(0, category.length - 1) : category)?.replace('_', ' ')}`} />
                        <button type="submit" className="absolute top-0 right-0 h-full p-2.5 text-sm font-medium text-white rounded-r-lg border border-blue-700 bg-blue-600">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex flex-col min-h-[5469px] bg-slate-900">
                <table className="table-auto order border-separate rounded-t-xl m-0 bg-slate-800" cellSpacing={0}>
                    <TableHeader columns={tableHeaders} category={category ?? ''} />
                    <TableBody data={data} columns={tableHeaders} isLoading={isLoading} />
                </table>
                <Pagination count={count} page={page} setSearchParams={setSearchParams} />
            </div>
        </>
    );
};

export default ProductTable;