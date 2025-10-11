import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import Search from './Search.jsx'
import { Link } from 'react-router-dom'
import { FaRegCircleUser } from "react-icons/fa6";
import useMobile from '../hooks/useMobile.jsx';
import { useLocation } from 'react-router-dom';
import { MdShoppingCartCheckout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import UserMenu from './UserMenu.jsx';

const Header = () => {
  const { isMobile } = useMobile();  // ✅ sahi tarika
  const location = useLocation();
  const isSearchPage = location.pathname === "/search"
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  console.log("user from  store", user);
  // console.log("location", location);
  // console.log("ismobile", isMobile);
  // console.log("isSearchPage", isSearchPage);

  const redirectToLoginPage = () => {
    navigate('/Login');
  }

  const handleCloseUserMenu = () => {
    setOpenUserMenu(false);
  }

  const handleMobileUser = () => {
    if (!user?._id) {
      navigate("/login");
      return;
    }
  }

  return (
    <header className=' h-28 lg:h-20 lg:shadow-md sticky top-0   flex flex-col justify-center gap-1 bg-white'>
      {
        !(isSearchPage && isMobile) && (
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

              {/* User icone only display on mobile version  */}
              < button className='text-neutral-600 lg:hidden' onClick={handleMobileUser}>
                <FaRegCircleUser size={28} />
              </button>
              {/* Desktop */}
              <div className='hidden lg:flex items-center gap-10'>
                {
                  user?._id ? (
                    <div className='relative'>
                      <div onClick={() => setOpenUserMenu(preve => !preve)} className='flex select-none   items-center gap-1 cursor-pointer'>
                        <p>Account</p>
                        {
                          openUserMenu ? (
                            <GoTriangleUp size={25} />

                          ) : (
                            <GoTriangleDown size={25} />
                          )

                        }
                      </div>

                      {openUserMenu && (

                        <div className={'absolute top-12 right-0'}>
                          <div className='bg-white rounded p-4 min-w-52 lg:shadow-lg'>
                            <UserMenu close={handleCloseUserMenu}/>
                          </div>
                        </div>
                      )
                      }


                    </div>
                  ) : (

                    <button onClick={redirectToLoginPage} className=' text-lg px-2 text-neutral-600 hover:text-yellow-600'>
                      Login
                    </button>
                  )
                }


                <button className='flex items-center gap-2 bg-green-700 hover:bg-green-800 px-3 py-3 rounded text-white'>
                  <div className='animate-bounce'>
                    {/* add to cart icone */}
                    <MdShoppingCartCheckout size={25} />

                  </div>

                  <div>
                    My Cart
                  </div>

                </button>
              </div>

            </div>

          </div>
        )
      }


      <div className='container mx-auto px-2 lg:hidden'>
        <Search />
      </div>
    </header>
  )
}

export default Header
Header