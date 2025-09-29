import React from 'react'
import logo from '../assets/logo.svg'
import Search from './Search.jsx'

const Header = () => {
  return (

    <header className='h-20 shadow-md sticky top-0 '>
      <div className='container px-4 lg:px-8 flex items-center h-full  justify-between'>
        {/* logo */}
        <div className='h-full'>
          <div className='h-full flex justify-center items-center'>
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

          </div>
        </div>

        {/* Search */}
        <div>
          <Search />
        </div>
        {/* login and my cart */}
        <div>
          Login and My Cart
        </div>

      </div>
    </header>
  )
}

export default Header
Header