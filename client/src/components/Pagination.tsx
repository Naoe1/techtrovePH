import { Dispatch, SetStateAction } from 'react'
const Pagination = ({ page, setPage }: { page: number, setPage: Dispatch<SetStateAction<number>> }) => {
    const from =  page ? (page - 1) * 50 + 1 : 1;
    const to = page ? from + 50 - 1 : 50;
    return (
        <div className="flex flex-col items-center bg-slate-900 p-3 py-6">
            <span className="text-sm text-gray-700 dark:text-gray-400" onClick={() => console.log(page)}>
                Showing <span className="font-semibold text-gray-900 dark:text-white">{ from }</span> to <span className="font-semibold text-gray-900 dark:text-white">{to}</span> of <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
                <button disabled={page <= 1} onClick={() => setPage(prev => prev - 1)} className="disabled:bg-slate-950 disabled:pointer-events-none
 px-4 py-2 text-sm font-medium rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Prev
                </button>
                <button onClick={() => setPage(prev => prev + 1)} className="px-4 py-2 text-sm font-medium border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                </button>
            </div>
        </div>
    )
}

export default Pagination