import React from 'react';
import { IoSearch } from "react-icons/io5";
import { TypeAnimation } from 'react-type-animation';



const Search = () => {
  return (
    <div className='w-full min-w-[320px] lg:min-w-[420px] h-12 rounded-lg border border-neutral-300 overflow-hidden flex items-center px-3'>
      <button className='cursor-pointer outline-none focus:outline-none p-3 justify-center items-center flex'>
        <IoSearch size={22} className='text-neutral-600' />
      </button>
      <div className='text-neutral-400'>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            // Example for a phone shop
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
    </div>
  )
}

export default Search;
