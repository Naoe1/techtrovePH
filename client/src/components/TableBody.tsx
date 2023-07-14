import { Link, useParams, useNavigate } from "react-router-dom"
import usePCBuilderStore from "../buildStore"

interface Product {
    full_name: string,
    uid: string,
    min_price: number,
    link?: string,
}
interface TableColumn {
    label: string;
    property: string;
}

interface TableBodyProps<T> {
    data: T[];
    columns: TableColumn[];
    isLoading?: boolean;
}
type Description = {
    uid: string;
    full_name: string;
    price: number;
}

const TableBody = <T extends Product>({ data, columns, isLoading }: TableBodyProps<T>) => {
    const navigate = useNavigate();
    const { setProcessor, setMotherboard, setVideoCard, setPowerSupply } = usePCBuilderStore();
    const { category } = useParams();
    const handleSelect = (category: string, product: Description) => {
        if (category === 'processors') setProcessor(product)
        if (category === 'motherboards') setMotherboard(product)
        if (category === 'video_cards') setVideoCard(product)
        if (category === 'power_supply') setPowerSupply(product)
        navigate('/list')

    }

    if (isLoading) {
        return <tbody className="bg-slate-900">
            <tr className="sm:px-2 h-40"><td colSpan={6}><div className="text-center">
                <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
            </div></td></tr>
        </tbody>
    }

    if (data.length === 0) {
        return <tbody className="bg-slate-900">
            <tr className="sm:px-2 h-40"><td colSpan={6}><div className="flex justify-center !text-xl">No products found!</div></td></tr>
        </tbody>
    }
    return (
        <>
            <tbody className="bg-slate-900">
                {
                    data.map((product, index) => (
                        <tr className="sm:px-2" key={index}>
                            {columns.map((header, index) => {
                                if (header.property === 'full_name') {
                                    return (
                                        <td key={index}><Link to={product.link ?? product.uid}><div className="flex justify-center">
                                            <div className="text-slate-200 font-medium flex flex-col ps-4 text-sm xl:text-base justify-center sm:justify-center hover:text-sky-400">
                                                <div>
                                                    {product.full_name}
                                                </div>
                                            </div>
                                        </div></Link></td>
                                    )
                                }
                                if (header.property === 'min_price') {
                                    return (
                                        <td key={index}>
                                            <div className='text-xs text-center flex flex-col text-slate-200 justify-center items-center'>
                                                <div className={`${product['min_price'] ? 'before:content-["₱"]' : null}`}>{product['min_price'] ? product['min_price'].toFixed(2) : '-'}</div>
                                                <button onClick={() => handleSelect(category as string, { full_name: product.full_name, uid: product.uid, price: product.min_price })} type="button" className="mt-4 w-20 flex items-center justify-center text-white bg-sky-500 h-6 px-3 py-4 font-medium rounded-md text-xs focus:outline-none hover:bg-sky-700">Select</button>
                                            </div>
                                        </td>
                                    )
                                }
                                return (
                                    <td key={index}>
                                        <div className="text-xs text-center text-slate-200">
                                            {product[header.property as keyof typeof product]}
                                        </div>
                                    </td>
                                )
                            }, [])}
                        </tr>))
                }
            </tbody>
        </>
    )
}
export default TableBody