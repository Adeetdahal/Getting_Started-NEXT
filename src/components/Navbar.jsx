import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex flex-col md:flex-row justify-between h-auto items-center md:p-3 bg-slate-800 text-white   ">
      <div className="text-lg items-start md:w-[25%] w-full flex justify-between p-3 md:p-0">
        <h3 className="tracking-wide font-semibold ">
          DANPHE <br /> INNOVATIONS
        </h3>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center  p-3 ml-3  text-white rounded-lg md:hidden hover:bg-gray-50 hover:text-black "
        >
          <GiHamburgerMenu size={25} className="md:hidden flex " />
        </button>
      </div>
      <div className="flex w-full ">
        <ul
          className={
            isOpen
              ? 'flex md:flex flex-col font-medium w-full mt-4 md:flex-row md:justify-evenly md:mt-0 '
              : 'hidden md:flex flex-col font-medium  w-full mt-4 md:flex-row md:justify-evenly md:mt-0'
          }
        >
          <li>
            <Link href="/">
              <a
                href="/home"
                className="block py-2 pr-4 pl-3 text-white hover:text-yellow-400 md:p-0 dark:text-white hover:translate-x-3 ] md:hover:translate-x-0 "
                aria-current="page"
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <a
                href="/about"
                className="block py-2 pr-4 pl-3  md:hover:bg-transparent md:border-0 hover:text-yellow-400 md:p-0 hover:translate-x-3 hover:delay-100 md:hover:translate-x-0 "
              >
                About Us
              </a>
            </Link>
          </li>
          <li>
            <Link href="#services">
              <a
                href="/services"
                className="block py-2 pr-4 pl-3 text-white  border-gray-100 hover:bg-transparent md:border-0 hover:text-yellow-400 md:p-0 hover:translate-x-3  hover:delay-100 md:hover:translate-x-0 "
              >
                Services
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
