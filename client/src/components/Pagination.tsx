import { Dispatch, SetStateAction } from 'react'

const Pagination = ({ page, setPage, count }: { page: number, setPage: Dispatch<SetStateAction<number>>, count: number }) => {
    const from = page ? (page - 1) * 50 + 1 : 1;
    const to = Math.min(page ? from + 50 - 1 : 50, count as number);
    return (
        count && <div className="flex flex-col items-center bg-slate-900 p-3 py-6">
            <span className="text-sm text-gray-700 dark:text-gray-400">
                Showing <span className="font-semibold text-gray-900 dark:text-white">{from}</span> to <span className="font-semibold text-gray-900 dark:text-white">{to}</span> of <span className="font-semibold text-gray-900 dark:text-white">{count}</span> Entries
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
                <button disabled={page <= 1} onClick={() => setPage(prev => prev - 1)} className="disabled:bg-slate-950 disabled:pointer-events-none
 px-4 py-2 text-sm font-medium rounded-l  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
                    Prev
                </button>
                <button disabled={(from + 50) > count} onClick={() => setPage(prev => prev + 1)} className="disabled:bg-slate-950 disabled:pointer-events-none px-4 py-2 text-sm font-medium border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                </button>
            </div>
        </div>
    )
}

export default Pagination