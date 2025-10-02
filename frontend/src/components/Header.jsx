import React from 'react'
import logo from '../assets/logo.svg'
import Search from './Search.jsx'
import { Link } from 'react-router-dom'
import { FaRegCircleUser } from "react-icons/fa6";
import useMobile from '../hooks/useMobile.jsx';
import { useLocation } from 'react-router-dom';


const Header = () => {
   const { isMobile } = useMobile();  // ✅ sahi tarika
    const location = useLocation();

    const isSearchPage = location.pathname === "/search"

    console.log("location", location);
    console.log("ismobile", isMobile);
    console.log("isSearchPage", isSearchPage);

  return (
    <header className=' h-28 lg:h-20 lg:shadow-md sticky top-0   flex flex-col justify-center gap-1'>
    {
      !(isSearchPage && isMobile)&& (
      <div className='container px-4 lg:px-8 flex items-center justify-between'>
        {/* logo */}
        <div className='h-full'>
          <Link to={"/"} className='h-full flex justify-center items-center'>
            <img
              src={logo}
              width={180}
              height={60}
              alt="logo"
              className='hidden lg:block'
            />

            <img
              src={logo}
              width={120}
              height={60}
              alt="logo"
              className='lg:hidden'
            />

          </Link>
        </div>

        {/* Search */}
        <div className='hidden lg:block'>
          <Search />
        </div>

        {/* login and my cart */}
        <div className=''>
          < button className='text-neutral-600 lg:hidden'>
            <FaRegCircleUser size={28} />
          </button>

          <div className='hidden lg:block'>
            Login and My Cart
          </div>

        </div>

      </div>
      )
    }      
      

      <div className='container mx-auto px-2 lg:hidden'>
        <Search/>
      </div>
    </header>
  )
}

export default Header
Header