import React from 'react';
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className='w-full min-w-[320px] lg:min-w-[420px] h-12 rounded-lg border border-neutral-300 overflow-hidden flex items-center px-3'>
      <button className='cursor-pointer outline-none focus:outline-none p-3 justify-center items-center flex'>
        <IoSearch size={22} className='text-neutral-600' />
      </button>
      <div className='text-neutral-400'>
         Search "Products, categories, brands"
      </div>
    </div>
  )
}

export default Search;
