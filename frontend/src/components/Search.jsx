import React from 'react';
import { IoSearch } from "react-icons/io5";
import { TypeAnimation } from 'react-type-animation';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import useMobile from '../hooks/useMobile';


const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchPage, setIsSearchPage] = useState(false)
  const isMobile = useMobile();

  useEffect(() => {
    const isSearch = location.pathname === "/search"
    setIsSearchPage(isSearch)
  }, [location])

  const redirectToSearchPage = () => {
    navigate('/search');
  }

  console.log("search", isSearchPage);

  return (
    <div className='w-full min-w-[320px] lg:min-w-[420px] h-11 lg:h-12 rounded-lg border border-neutral-300 overflow-hidden flex items-center px-1 bg-slate-50 group focus-within:border-primary-200'>

      <div>
        {
          (isMobile && isSearchPage) ? (
            <Link to= "/" className='cursor-pointer outline-none focus:outline-none p-1.5 flex justify-center items-center text-neutral-600 group-focus-within:text-primary-200 bg-white rounded-full shadow-md'>
              <FaArrowLeft size={20} />
            </Link>
          ) : (
            <button className='cursor-pointer outline-none focus:outline-none p-3 justify-center items-center text-neutral-600 group-focus-within:text-primary-200 '>
              <IoSearch size={22} />
            </button>
          )
        }

      </div>

      <div className='w-full h-full flex items-center px-2'>
        {
          !isSearchPage ? (
            <div onClick={redirectToSearchPage} className='text-neutral-400 w-full h-full flex justify items-center '>
              <TypeAnimation
                sequence={[
                  'Search for iPhone models', 1000,
                  'Search for Samsung phones', 1000,
                  'Search for Mobile Accessories', 1000,
                  'Search for Latest Deals', 1000,
                  'Search for Best Sellers', 1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>
          ) : (
            <div>
              <input
                type="text"
                placeholder='Search...'
                autoFocus
                className='w-full bg-transparent outline-none focus:outline-none text-sm text-neutral-600 placeholder:text-neutral-400'
              />
            </div>
          )
        }
      </div>
    </div>

  )
}

export default Search;
