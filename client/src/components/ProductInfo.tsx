import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import React from 'react';
import type { Motherboard, Processor, VideoCard } from '../utils/interfaces';
import DrawerComponent from './Drawer';
const Product = () => {
    const { category, productId } = useParams();
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<{ status: number; error: string } | null>(null);
    const [data, setData] = useState<Motherboard | Processor | VideoCard | null>(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                window.scrollTo(0, 0);
                setIsLoading(true);
                const response = await fetch(`http://localhost:3000/products/${category}/${productId}`);
                if (!response.ok) {
                    const errorData = await response.json();
                    setError(errorData)
                    throw (errorData);
                }
                const responseData = await response.json();
                setIsLoading(false);
                setData(responseData);
            } catch (error) {
                setError(error as { status: number; error: string })
            }
        };
        fetchData()
    }, [category, productId])
    if (error) {
        return (
            <div className="flex flex-col bg-slate-900 text-slate-50 min-h-[820px] w-full">
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
    if (isLoading || !data) {
        return (<div className="flex flex-col bg-slate-900 text-slate-50 min-h-[820px] w-full">
            <div className="flex p-3">
                <DrawerComponent />
            </div>
            <div className="h-screen flex flex-col items-center justify-center gap-3">
                <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
            </div>
        </div>)
    }

    return (
        <>
            <div className="flex flex-col bg-slate-900 text-slate-50 min-h-[820px] w-full">
                <div className="flex h-14 border-b border-slate-700"></div>
                <div className='flex flex-col sm:mx-16 my-8 mx-4'>
                    <div className="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800" role="alert">
                        <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                        <div>
                            <span className="font-medium">Warning alert!</span> The product information provided may not be categorized correctly and could have inaccurate specs; please cross-check the details on the official page for accuracy and legitimacy.
                        </div>
                    </div>
                    <h1 className='text-xl'>{data.full_name}</h1>
                    <div className="mt-3 mb-6 border-t border-slate-700"></div>
                    <div className="flex flex-col">
                        <div className="text-base mb-4">Pricing</div>
                        <div className="grid sm:grid-cols-4 grid-cols-3">
                            <div className="sm:col-span-2 text-sm text-slate-400 border-b border-slate-700 py-2  px-2">Product</div>
                            <div className="sm:text-sm text-slate-400 border-b border-slate-700 py-2 px-2">Merchant</div>
                            <div className="text-sm text-slate-400 border-b border-slate-700 py-2  px-2">Price</div>
                            {data.vendors.length === 0 ? (
                                <div className="py-4">No Vendors!</div>
                            ) : (
                                data.vendors.map((vendor) => (
                                    <React.Fragment key={vendor.id}>
                                        <a href={vendor.link} target='_blank' className="grid sm:grid-cols-4 grid-cols-3 col-span-3 sm:col-span-4 hover:bg-slate-800 transition-colors">
                                            <div className="sm:col-span-2 py-4 px-2 border-b border-slate-700">{vendor.title}</div>
                                            <div className="py-4 text-xs sm:text-base px-2 border-b border-slate-700">{vendor.vendor_id}</div>
                                            <div className="py-4 px-2 border-b border-slate-700">₱{vendor.price && vendor.price.toFixed(2)}</div>
                                        </a>
                                    </React.Fragment>
                                ))
                            )}
                        </div>
                    </div>
                    <div className="mt-3 border border-slate-700 bg-slate-800 flex flex-col items-center justify-center rounded">
                        <div className="text-sm mt-4 text-slate-400">Specifications</div>
                        <div className="mt-3 mb-6 border-t border-slate-700 w-[90%]"></div>
                        <div className="flex w-full">
                            <div className="text-sm flex w-full px flex-wrap ps-8 pb-10 justify-evenly">
                                {data && Object.entries(data).map(([key, value]) => {
                                    if (value === null || key === 'min_price' || key === 'uid' || key === 'msrp_usd' || key === 'full_name' || key === 'vendors' || key === 'id' || key === 'Pcie x16 slot' || key === 'gpu_spec_ref') {
                                        return null;
                                    }

                                    if (typeof value === 'object') {
                                        value = JSON.stringify(value);
                                    }


                                    return (
                                        <div className="flex w-64 py-1" key={key}>
                                            <div className="text-slate-400 min-w-[165px]">{(key.charAt(0).toUpperCase() + key.slice(1)).split('_').join(' ')}</div>
                                            <div className="">{value}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Product