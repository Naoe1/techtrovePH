import { useState } from 'react';
import { ReactComponent as Processor } from '../assets/processor.svg'
import { ReactComponent as Motherboard } from '../assets/motherboard.svg'
import { ReactComponent as VideoCard } from '../assets/videocard.svg'
import { ReactComponent as PSU } from '../assets/psu.svg'
import { ReactComponent as Memory } from '../assets/memory.svg'
import { ReactComponent as Chassis } from '../assets/chassis.svg'
import { ReactComponent as Storage } from '../assets/storage.svg'
import { ReactComponent as Cooler } from '../assets/cooler.svg'
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';


const DrawerComponent = ({setSearchTerm, setPage}: {setSearchTerm?:  React.Dispatch<React.SetStateAction<string>>, setPage?: React.Dispatch<React.SetStateAction<number>>}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target as Node) &&
      buttonRef.current !== event.target
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const items = [
    {
      itemName: "Processor",
      icon: <Processor />,
      linkTo: "/products/processors",
    },
    {
      itemName: "Motherboard",
      icon: <Motherboard />,
      linkTo: "/products/motherboards",
    },
    {

      itemName: "Video Card",
      icon: <VideoCard />,
      linkTo: "/products/video_cards",
    },
    {

      itemName: "Power Supply",
      icon: <PSU />,
      linkTo: "/products/power_supply",
    },
    {

      itemName: "Memory",
      icon: <Memory />,
      linkTo: "/products/memory",
    },
    {

      itemName: "Chassis",
      icon: <Chassis />,
      linkTo: "/products/chassis",
    },
    {

      itemName: "Storage",
      icon: <Storage />,
      linkTo: "/products/storage",
    },
    {
      itemName: "Cooler",
      icon: <Cooler />,
      linkTo: "/products/cpu_cooler",
    },

  ];
  const handleToggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="text-center">
        <button
          ref={buttonRef}
          className="text-white lg:hidden border text-xs sm:text-sm border-slate-700 hover:bg-slate-700/20 font-medium rounded-lg px-2 py-1 sm:px-5 sm:py-2.5 mr-2"
          type="button"
          onClick={handleToggleDrawer}
          aria-controls="drawer-navigation"
        >
          Open navigation
        </button>
      </div>
      <div
        ref={drawerRef}
        id="drawer-navigation"
        className={`${isOpen ? 'visible !block opacity-100' : 'invisible opacity-0'} lg:visible lg:opacity-100 border-r border-slate-700 hidden lg:block min-w-[14rem] transition-all fixed top-16 left-0 z-40 h-screen p-4 bg-slate-900`}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-sm font-semibold uppercase text-gray-400"
        >
          Components
        </h5>
        <button
          type="button"
          onClick={handleToggleDrawer}
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent lg:hidden rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center hover:bg-gray-600 hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {items.map(({linkTo, icon, itemName}, index) => (
              <li key={index}>
                <Link
                  onClick={() =>{
                    setSearchTerm && setSearchTerm('')
                    setPage && setPage(1)
                    setIsOpen(false)}
                  }
                  to={linkTo}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <div className='w-5'>{icon}</div>
                  <span className='ml-3'>{itemName}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </>
  );
};

export default DrawerComponent;
