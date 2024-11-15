import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SidebarLink from './SidebarLink';
import { links } from '@/utils/app.sidebar-data';
import { GrClose } from 'react-icons/gr';
import DarkModeSwitcher from '../Header/DarkModeSwitcher';
import { CiLogout } from "react-icons/ci";
import { useCurrentUser } from '@/context/userContext';
import useColorMode from '@/hooks/useColorMode';
import PhoneMockUp from '@/static/images/logo/logo.png';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const { logOutUser } = useCurrentUser();
  const [colorMode, setColorMode] = useColorMode();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute rounded shadow-6 left-0 top-0 z-9999 flex max-h-screen w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5 ">
        <NavLink to="/">
          <h1 className='text-4xl uppercase italic'>Shoorah</h1>
          {/* <span className="inline-block h-10 w-14">
                <img src={PhoneMockUp} alt="phone-mockup" />
              </span> */}
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <GrClose className='text-gray' />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar max-h-screen flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-1 py-4 px-4 lg:px-6">
          <div>
            <ul className="mb-6 flex flex-col gap-2">
              {links.map((link, index) => (
                <SidebarLink key={index} link={link} />
              ))}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
      <div className="absolute bottom-0 left-0 w-full border-t bg-white">
        <div className="pt-2">
          <div className="py-2 flex w-full pl-6">
            <DarkModeSwitcher />
          </div>
          <div className="">
            <button
              className="flex gap-9 py-2 font-medium duration-300 ease-in-out hover:text-blue-200 pl-6 "
              onClick={() => logOutUser()}>
              <CiLogout className='text-2xl' />
              Log Out
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
