import { useState, useEffect } from 'react'
import { ReactComponent as Processor } from '../assets/processor.svg'
import { ReactComponent as Motherboard } from '../assets/motherboard.svg'
import { ReactComponent as VideoCard } from '../assets/videocard.svg'
import { ReactComponent as PSU } from '../assets/psu.svg'
import { ReactComponent as Memory } from '../assets/memory.svg'
import { ReactComponent as Chassis } from '../assets/chassis.svg'
import { ReactComponent as Storage } from '../assets/storage.svg'
import { ReactComponent as Cooler } from '../assets/cooler.svg'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

interface FetchedData {
    result: {
        created_at: string;
        processor: Component | null;
        motherboard: Component | null;
        videoCard: Component | null;
        powerSupply: Component | null;
        memory: Component[] | null;
        chassis: Component | null;
        storage: Component[] | null;
        cooler: Component | null;
    };
}

interface Component {
    price: number;
    full_name: string;
    product_link: string;
}

const RenderComponent = ({ name, Icon, data }: { name: string; Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>; data: Component | Component[] | null }) => {
    return (
        <>
            <div className="flex items-center">
                <div className="w-8 mr-2 sm:mr-4"><Icon /></div>
                <div className="text-slate-200 font-bold flex items-center">
                    {name}
                </div>
                <div className="border-t-2 grow w-1 ml-3 border-gray-600"></div>
            </div>
            <div className="min-h-[60px] flex items-center my-4">
                <div className="min-w-sm p-6 text-gray-200">
                    {Array.isArray(data) ? (data.length > 0 ? data.map((item, index) => (
                        <div className="min-w-sm" key={index}>
                            <div key={index} className="mb-3 font-normal text-gray-200 text-sm">
                                <Link to={item.product_link} className='py-3'>{item.full_name}</Link>
                                <p>Price: ₱{item.price?.toFixed(2)}</p>
                            </div>
                        </div>
                    )) : 'None') : (data ? (
                        <>
                            <Link to={data?.product_link}>
                                <h5 className="mb-2 text-lg tracking-tight text-white">
                                    {data?.full_name}
                                </h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-200 text-sm">
                                {data && data.price !== null ? (
                                    <span>Price: ₱{data.price.toFixed(2)}</span>
                                ) : (
                                    <span>Price: -</span>
                                )}
                            </p>
                        </>
                    ) : 'None')}
                </div>
            </div>
        </>
    );
};

const Build = () => {
    const { listId } = useParams();
    const [fetchedData, setFetchedData] = useState<FetchedData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<{ status: number; error: string } | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const backendUrl = import.meta.env.BACKEND_URL || 'http://localhost:3000'
                const response = await fetch(`${backendUrl}/list/${listId}`);
                if (!response.ok) {
                    const errorData = await response.json();
                    setError(errorData)
                    throw (errorData);
                }
                const responseData = await response.json();
                setFetchedData(responseData);
                setIsLoading(false);
            } catch (error) {
                setError(error as { status: number; error: string })
            }
        };
        fetchData();
    }, [listId]);

    if (error) {
        return (
            <div className="flex flex-col bg-slate-900 text-slate-50 min-h-[820px] w-full">
                <div className="h-screen flex flex-col items-center justify-center gap-3">
                    <div className="bold text-slate-100">{error.status} Error</div>
                    <div className="text-xs text-slate-400">{error.error || 'Something Went Wrong.'}</div>
                </div>
            </div>
        )
    }
    if (isLoading || !fetchedData) {
        return (<div className="flex flex-col bg-slate-900 text-slate-50 min-h-[820px] w-full">
            <div className="h-screen flex flex-col items-center justify-center gap-3">
                <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
            </div>
        </div>)
    }
    const componentData = [
        { name: 'Processor', icon: Processor, data: fetchedData.result?.processor },
        { name: 'Motherboard', icon: Motherboard, data: fetchedData.result?.motherboard },
        { name: 'Video Card', icon: VideoCard, data: fetchedData.result?.videoCard },
        { name: 'Power Supply', icon: PSU, data: fetchedData.result?.powerSupply },
        { name: 'Memory', icon: Memory, data: fetchedData.result?.memory },
        { name: 'Chassis', icon: Chassis, data: fetchedData.result?.chassis },
        { name: 'Storage', icon: Storage, data: fetchedData.result?.storage },
        { name: 'Cooler', icon: Cooler, data: fetchedData.result?.cooler },
    ];
    return (
        fetchedData && <div className='pb-24'>
            <div className='h-16'></div>
            <div className="text-gray-300 text-sm font-bold flex items-center mt-6 justify-center italic">
                Created at: {fetchedData.result.created_at}
            </div>
            <div className="flex flex-col min-h-[500px] p-6 rounded-md border border-[#1f2571eb] max-w-2xl mx-auto list-bg mt-8">
                {componentData.map(({ name, icon, data }, index) => (
                    <RenderComponent key={index} name={name} Icon={icon} data={data} />
                ))}
            </div>
        </div>
    )
}

export default Build