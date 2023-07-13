import { ReactComponent as Trash } from '../assets/trash.svg'
import { Link } from 'react-router-dom'

interface Props {
    item: { full_name: string, price: number }
    onRemove: () => void
    linkTo: string
}
const Item = ({ item, onRemove, linkTo }: Props) => {
    return (
        <div className="min-w-sm p-6 shadow">
            <a href="#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-white">
                    {item?.full_name}
                </h5>
            </a>
            <p className="mb-3 font-normal text-gray-200 text-sm">
                {item && item.price !== null ? (
                    <span className="font-bold">Price: ₱{item.price.toFixed(2)}</span>
                ) : (
                    <span className="font-bold">Price: -</span>
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
                    onClick={() => onRemove()}
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