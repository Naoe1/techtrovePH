import { useEffect, useState } from "react"
import usePCBuilderStore from "../buildStore"
import Toast from "./Toast"
const ListLink = () => {
    const [error, setError] = useState<{ status: number; error: string } | null>(null)
    const [copyIsHovered, setCopyIsHovered] = useState(false)
    const { processor, motherboard, powerSupply, storage, videoCard, chassis, memory, cooler, getTotalPrice, linkID, setLinkID } = usePCBuilderStore();
    const [submitting, setSubmitting] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/list`);
                if (!response.ok) {
                    const errorData = await response.json();
                    setError(errorData)
                    throw (errorData);
                }
                const responseData = await response.json();
                setLinkID(responseData.result);
            } catch (error) {
                setError(error as { status: number; error: string })
            }
        };
        if (!linkID) fetchData()
    }, [])
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('' as string)
    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 3000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [showToast]);
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const listData = { processor, motherboard, powerSupply, storage, videoCard, chassis, memory, cooler, _id: linkID }
        try {
            setSubmitting(true)
            const response = await fetch('http://localhost:3000/list', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(listData),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setToastMessage('Saved Successfully!')
            setShowToast(true);
            setSubmitting(false)
        } catch (error) {
            setSubmitting(false)
        }
    };
    const copyToClipboard = () => {
        navigator.clipboard.writeText(`${window.location.href}/${linkID}`)
        setToastMessage('Link Copied!')
        setShowToast(true)
    }
    if (error) {
        setToastMessage('Something Went Wrong!')
        setShowToast(true)
    }
    return (
        <div className="flex min-h-[50px] p-2 sm:p-3 rounded shadow-inner max-w-2xl mx-auto list-bg mb-5 gap-2">
            <div className="flex w-full">
                <button onClick={copyToClipboard} onMouseEnter={() => setCopyIsHovered(true)} onMouseLeave={() => setCopyIsHovered(false)} className="max-h-9 flex items-center px-2 rounded-l-md border border-[#1f2571eb] border-r-0"><svg width="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill={copyIsHovered ? "#e1e3e9" : "#B4BCD0"} stroke="#ffffff" strokeWidth="0.0002"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v9a2 2 0 002 2h2v2a2 2 0 002 2h9a2 2 0 002-2V8a2 2 0 00-2-2h-2V4a2 2 0 00-2-2H4zm9 4V4H4v9h2V8a2 2 0 012-2h5zM8 8h9v9H8V8z"></path> </g></svg></button>
                <input value={linkID ? `${window.location.href}/${linkID}` : ''} type="search" readOnly className="h-9 outline-0 block p-2.5 w-full text-sm rounded-r-md border bg-[#101932] border-[#1f2571eb] placeholder-gray-400 text-white" />
            </div>
            <button onClick={handleSubmit} disabled={submitting} className="w-20 sm:w-48 flex justify-center items-center border border-[#1f2571eb] max-h-9 rounded-md"><svg fill="#ffffff" width="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M790.706 338.824v112.94H395.412c-31.06 0-56.47 25.3-56.47 56.471v744.509c17.73-6.325 36.592-10.391 56.47-10.391h1129.412c19.877 0 38.738 4.066 56.47 10.39V508.236c0-31.171-25.412-56.47-56.47-56.47h-395.295V338.824h395.295c93.402 0 169.411 76.009 169.411 169.411v1242.353c0 93.403-76.01 169.412-169.411 169.412H395.412C302.009 1920 226 1843.99 226 1750.588V508.235c0-93.402 76.01-169.411 169.412-169.411h395.294Zm734.118 1016.47H395.412c-31.06 0-56.47 25.299-56.47 56.47v338.824c0 31.172 25.41 56.47 56.47 56.47h1129.412c31.058 0 56.47-25.298 56.47-56.47v-338.823c0-31.172-25.412-56.47-56.47-56.47ZM1016.622-.023v880.151l246.212-246.325 79.85 79.85-382.532 382.644-382.645-382.644 79.85-79.85L903.68 880.128V-.022h112.941ZM564.824 1468.235c-62.344 0-112.942 50.71-112.942 112.941s50.598 112.942 112.942 112.942c62.343 0 112.94-50.71 112.94-112.942 0-62.23-50.597-112.94-112.94-112.94Z" fillRule="evenodd"></path> </g></svg><span className="text-sm text-white bold hidden sm:block">Save List</span></button>
            <div className="bold text-white sm:w-72 w-32 flex justify-center items-center text-xs sm:text-sm">Total: ₱{getTotalPrice().toFixed(2)}</div>
            {showToast && <Toast message={toastMessage}/>}
        </div>
    )
}
export default ListLink