import usePCBuilderStore from "../buildStore"
import { useEffect, Fragment } from 'react'
import { ReactComponent as Processor } from '../assets/processor.svg'
import { ReactComponent as Add } from '../assets/add.svg'
import { ReactComponent as Motherboard } from '../assets/motherboard.svg'
import { ReactComponent as VideoCard } from '../assets/videocard.svg'
import { ReactComponent as PSU } from '../assets/psu.svg'
import { ReactComponent as Memory } from '../assets/memory.svg'
import { ReactComponent as Chassis } from '../assets/chassis.svg'
import { ReactComponent as Storage } from '../assets/storage.svg'
import { ReactComponent as Cooler } from '../assets/cooler.svg'
import Item from "../components/BuildItem"
import { Link } from "react-router-dom"
import ListLink from "../components/ListLink"

const List = () => {
    const { processor, motherboard, powerSupply, storage, videoCard, chassis, memory, cooler,
        removeVideoCard, removeProcessor, removeMotherboard, removePowerSupply,
        removeChassis, removeCooler, removeStorage, removeMemory
    } = usePCBuilderStore();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const items = [
        {
            item: processor,
            onRemove: removeProcessor,
            itemName: "Processor",
            icon: <Processor />,
            linkTo: "/products/processors",
        },
        {
            item: motherboard,
            onRemove: removeMotherboard,
            itemName: "Motherboard",
            icon: <Motherboard />,
            linkTo: "/products/motherboards",
        },
        {
            item: videoCard,
            onRemove: removeVideoCard,
            itemName: "Video Card",
            icon: <VideoCard />,
            linkTo: "/products/video_cards",
        },
        {
            item: powerSupply,
            onRemove: removePowerSupply,
            itemName: "Power Supply",
            icon: <PSU />,
            linkTo: "/products/power_supply",
        },
        {
            item: memory,
            onRemove: removeMemory,
            itemName: "Memory",
            icon: <Memory />,
            linkTo: "/products/memory",
        },
        {
            item: chassis,
            onRemove: removeChassis,
            itemName: "Chassis",
            icon: <Chassis />,
            linkTo: "/products/chassis",
        },
        {
            item: storage,
            onRemove: removeStorage,
            itemName: "Storage",
            icon: <Storage />,
            linkTo: "/products/storage",
        },
        {
            item: cooler,
            onRemove: removeCooler,
            itemName: "Cooler",
            icon: <Cooler />,
            linkTo: "/products/cpu_cooler",
        },

    ];
    return (
        <div className="text-[#b4bcd0] py-28">
            <ListLink/>
            <div className="flex flex-col min-h-[500px] p-6 rounded-md border border-[#1f2571eb] max-w-2xl mx-auto list-bg">
                {items.map(({ item, onRemove, itemName, icon, linkTo }) => (
                    <Fragment key={itemName}>
                        <div className="flex items-center">
                            <div className="w-8 mr-2 sm:mr-4">{icon}</div>
                            <div className="text-slate-200 font-bold flex items-center">
                                {itemName}
                            </div>
                            <div className="border-t-2 grow w-1 ml-3 border-gray-600"></div>
                        </div>
                        <div className="min-h-[60px] flex items-center my-4">
                            {item ? (
                                <Item
                                    item={item}
                                    onRemove={onRemove}
                                    linkTo={linkTo}
                                    itemName={itemName}
                                />
                            ) : (
                                <Link to={linkTo}><button
                                    type="button"
                                    className="flex items-center text-white bg-sky-500 h-9 px-6 font-medium rounded text-sm focus:outline-none hover:bg-sky-700"
                                >
                                    <Add />
                                    <span className="ml-2">Choose a {itemName}</span>
                                </button>
                                </Link>
                            )}
                        </div>
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default List