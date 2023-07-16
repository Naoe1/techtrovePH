import { ReactComponent as Trash } from '../assets/trash.svg'
import { Link } from 'react-router-dom'

interface Props {
    item: { full_name: string, price: number } | { full_name: string, price: number }[]
    onRemove: (() => void) | ((index: number) => void)
    linkTo: string
    itemName: string
}

const Item = ({ item, onRemove, linkTo, itemName }: Props) => {
    if (Array.isArray(item)) {
        return (
            <div className="min-w-sm p-6 shadow">
                {item.map((desc, index) => (
                    <div key={index} className="mb-3 font-normal text-gray-200 text-sm">
                        <p className="font-bold">{itemName} {index + 1}:</p>
                        <p className='py-3'>{desc.full_name}</p>
                        <p>Price: ₱{desc.price.toFixed(2)}</p>
                        <div onClick={() => onRemove(index)} className='mt-3'>
                            <button type="button" className="flex items-center text-white bg-red-500 h-9 px-6 font-medium rounded text-sm focus:outline-none hover:bg-red-700">Remove</button>
                        </div>
                    </div>
                ))}
                <Link to={linkTo}>
                    <button
                        type="button"
                        className="flex items-center text-white bg-sky-500 h-9 px-6 font-medium rounded text-sm focus:outline-none hover:bg-sky-700"
                    >
                        Add additional {itemName}
                    </button>
                </Link>
            </div>
        );
    }
    return (
        <div className="min-w-sm p-6 shadow">
            <a href="#">
                <h5 className="mb-2 text-lg tracking-tight text-white">
                    {item?.full_name}
                </h5>
            </a>
            <p className="mb-3 font-normal text-gray-200 text-sm">
                {item && item.price !== null ? (
                    <span>Price: ₱{item.price.toFixed(2)}</span>
                ) : (
                    <span>Price: -</span>
                )}
            </p>
            <div className="flex items-center">
                <Link to={linkTo}><button
                    type="button"
                    className="flex items-center text-white bg-sky-500 h-9 px-6 font-medium rounded text-sm focus:outline-none hover:bg-sky-700"
                >
                    Change
                </button>
                </Link>
                <div
                    className="w-11 mx-3 rounded-3xl p-1 hover:bg-slate-700 flex justify-center"
                    onClick={onRemove as () => void}
                >
                    <div className="w-9">
                        <Trash />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;