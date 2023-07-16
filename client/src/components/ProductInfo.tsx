import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import React from 'react';
import type { Motherboard, Processor, VideoCard } from '../utils/interfaces';
const Product = () => {
    const { category, productId } = useParams();
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<{ statusCode: number; error: string } | null>(null);
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
                    throw new Error("Something went wrong!: " + response.status);
                }
                const responseData = await response.json();
                setIsLoading(false);
                setData(responseData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData()
    }, [category, productId])
    if (error) return <div>Something went wrong ... {error.error}</div>;
    if (isLoading || !data) return <div className="min-h-[1220px]">Loading...</div>;

    return (
        <>
            <div className="flex flex-col bg-slate-900 text-slate-50 min-h-[820px] w-full">
                <div className="flex h-14 border-b border-slate-700"></div>
                <div className='flex flex-col sm:mx-16 my-8 mx-4'>
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
                                            <div className="py-4 px-2 border-b border-slate-700">₱{vendor.price.toFixed(2)}</div>
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