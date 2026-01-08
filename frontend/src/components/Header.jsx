// import React, { useState } from 'react'
// import logo from '../assets/logo.svg'
// import Search from './Search.jsx'
// import { Link,useNavigate,useLocation } from 'react-router-dom'
// import { FaRegCircleUser } from "react-icons/fa6";
// import useMobile from '../hooks/useMobile.jsx';
// import { MdShoppingCartCheckout } from "react-icons/md";
// import { useSelector } from 'react-redux';
// import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
// import UserMenu from './UserMenu.jsx';
// import { useEffect } from 'react';
// import DisplayPriceInRupees from '../utils/DisplayPriceInRupees.js';
// import { current } from '@reduxjs/toolkit';
// import { useGlobalContext } from '../provider/GlobalProvider.jsx';
// import DisplayCartItem from './DisplayCartItem.jsx';

// const Header = () => {
//   const { isMobile } = useMobile();  // ✅ sahi tarika
//   const location = useLocation();
//   const isSearchPage = location.pathname === "/search"
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.user);
//   const [openUserMenu, setOpenUserMenu] = useState(false);
//   const cartItem = useSelector(state => state.cartItem.cart)
//   // const [totalPrice,setTotalPrice] =useState(0)
//   // const[totalQty,setTotalQty] = useState(0)
//   const {  totalPrice, totalQty } = useGlobalContext()
//   const [ openCartSection, setOpenCartSection] = useState(false)
//   const redirectToLoginPage = () => {
//     navigate('/Login');
//   }

//   const handleCloseUserMenu = () => {
//     setOpenUserMenu(false);
//   }

//   const handleMobileUser = () => {
//     if (!user?._id) {
//       navigate("/login");
//       return;
//     }

//     navigate("/user");
//   }

//   //total Items &  total Price
//   // useEffect(()=>{
//   //      const qty = cartItem.reduce((preve,curr)=>{
//   //       return preve + curr.quantity
//   //      },0)
//   //      setTotalQty(qty)
       
//   //      const  tPrice = cartItem.reduce((preve,curr)=>{
//   //       return preve + (curr.productId.price * curr.quantity)
//   //      },0)
//   //      setTotalPrice(tPrice)
       
//   // },[cartItem])

//   return (
//     <header className=' h-28 lg:h-20 lg:shadow-md sticky top-0 z-40  flex flex-col justify-center gap-1 bg-white'>
//       {
//         !(isSearchPage && isMobile) && (
//           <div className='container px-4 lg:px-8 flex items-center justify-between'>
//             {/* logo */}
//             <div className='h-full'>
//               <Link to={"/"} className='h-full flex justify-center items-center'>
//                 <img
//                   src={logo}
//                   width={180}
//                   height={60}
//                   alt="logo"
//                   className='hidden lg:block'
//                 />

//                 <img
//                   src={logo}
//                   width={120}
//                   height={60}
//                   alt="logo"
//                   className='lg:hidden'
//                 />

//               </Link>
//             </div>

//             {/* Search */}
//             <div className='hidden lg:block'>
//               <Search />
//             </div>

//             {/* login and my cart */}
//             <div className=''>

//               {/* User icone only display on mobile version  */}
//               < button className='text-neutral-600 lg:hidden' onClick={handleMobileUser}>
//                 <FaRegCircleUser size={28} />
//               </button>
//               {/* Desktop */}
//               <div className='hidden lg:flex items-center gap-10'>
//                 {
//                   user?._id ? (
//                     <div className='relative'>
//                       <div onClick={() => setOpenUserMenu(preve => !preve)} className='flex select-none   items-center gap-1 cursor-pointer'>
//                         <p>Account</p>
//                         {
//                           openUserMenu ? (
//                             <GoTriangleUp size={25} />

//                           ) : (
//                             <GoTriangleDown size={25} />
//                           )

//                         }
//                       </div>

//                       {openUserMenu && (

//                         <div className={'absolute top-12 right-0'}>
//                           <div className='bg-white rounded p-4 min-w-52 lg:shadow-lg'>
//                             <UserMenu close={handleCloseUserMenu}/>
//                           </div>
//                         </div>
//                       )
//                       }


//                     </div>
//                   ) : (

//                     <button onClick={redirectToLoginPage} className=' text-lg px-2 text-neutral-600 hover:text-yellow-600'>
//                       Login
//                     </button>
//                   )
//                 }


//                 <button onClick={()=>setOpenCartSection(true)} className='flex items-center gap-2 bg-green-800 hover:bg-green-700 px-3 py-2 rounded text-white'>
//                   <div className='animate-bounce'>
//                     {/* add to cart icon */}
//                     <MdShoppingCartCheckout size={25} />

//                   </div>
//                    <div className='font-semibold text-sm'>
//                     {
//                       cartItem[0]?(
//                         <div>
//                              <p>{totalQty} Items</p>
//                              <p>{DisplayPriceInRupees(totalPrice)}</p>
//                         </div>
//                       ):(
//                       <p> My Cart</p>
//                       )
//                     }
//                    </div>
                  

//                 </button>
//               </div>

//             </div>

//           </div>
//         )
//       }


//       <div className='container mx-auto px-2 lg:hidden'>
//         <Search />
//       </div>
//       {
//         openCartSection && (
//           <DisplayCartItem close={()=>setOpenCartSection(false)}/>
//         )
//       }
//     </header>
//   )
// }

// export default Header




import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import Search from './Search.jsx'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FaRegCircleUser } from "react-icons/fa6"
import useMobile from '../hooks/useMobile.jsx'
import { MdShoppingCartCheckout } from "react-icons/md"
import { useSelector } from 'react-redux'
import { GoTriangleUp, GoTriangleDown } from "react-icons/go"
import UserMenu from './UserMenu.jsx'
import DisplayPriceInRupees from '../utils/DisplayPriceInRupees.js'
import { useGlobalContext } from '../provider/GlobalProvider.jsx'
import DisplayCartItem from './DisplayCartItem.jsx'

const Header = () => {
  const { isMobile } = useMobile()
  const location = useLocation()
  const isSearchPage = location.pathname === "/search"
  const navigate = useNavigate()

  const user = useSelector(state => state.user)
  const cartItem = useSelector(state => state.cartItem.cart)

  const { totalPrice, totalQty } = useGlobalContext()

  const [openUserMenu, setOpenUserMenu] = useState(false)
  const [openCartSection, setOpenCartSection] = useState(false)

  const redirectToLoginPage = () => {
    navigate('/login')
  }

  const handleMobileUser = () => {
    if (!user?._id) {
      navigate("/login")
      return
    }
    navigate("/user")
  }

  return (
    <>
      <header className="h-28 lg:h-20 lg:shadow-md sticky top-0 z-40 bg-white flex flex-col justify-center gap-1">
        {!(isSearchPage && isMobile) && (
          <div className="container px-4 lg:px-8 flex items-center justify-between">
            
            {/* LOGO */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="logo" className="hidden lg:block w-[180px]" />
              <img src={logo} alt="logo" className="lg:hidden w-[120px]" />
            </Link>

            {/* SEARCH (DESKTOP) */}
            <div className="hidden lg:block">
              <Search />
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-4">

              {/* MOBILE USER ICON */}
              <button className="lg:hidden text-neutral-600" onClick={handleMobileUser}>
                <FaRegCircleUser size={28} />
              </button>

              {/* DESKTOP USER + CART */}
              <div className="hidden lg:flex items-center gap-10">
                {user?._id ? (
                  <div className="relative">
                    <div
                      onClick={() => setOpenUserMenu(prev => !prev)}
                      className="flex items-center gap-1 cursor-pointer select-none"
                    >
                      <p>Account</p>
                      {openUserMenu ? <GoTriangleUp size={22} /> : <GoTriangleDown size={22} />}
                    </div>

                    {openUserMenu && (
                      <div className="absolute top-12 right-0 bg-white shadow-lg rounded p-4 min-w-52">
                        <UserMenu close={() => setOpenUserMenu(false)} />
                      </div>
                    )}
                  </div>
                ) : (
                  <button onClick={redirectToLoginPage} className="text-lg text-neutral-600 hover:text-yellow-600">
                    Login
                  </button>
                )}

                {/* DESKTOP CART */}
                <button
                  onClick={() => setOpenCartSection(true)}
                  className="flex items-center gap-3 bg-green-800 hover:bg-green-700 px-4 py-2 rounded text-white"
                >
                  <MdShoppingCartCheckout size={24} />
                  {totalQty > 0 ? (
                    <div className="text-sm font-semibold">
                      <p>{totalQty} Items</p>
                      <p>{DisplayPriceInRupees(totalPrice)}</p>
                    </div>
                  ) : (
                    <p>My Cart</p>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SEARCH (MOBILE) */}
        <div className="container mx-auto px-2 lg:hidden">
          <Search />
        </div>
      </header>

      {/* ================= MOBILE CART FLOATING BUTTON ================= */}
      {totalQty > 0 && (
        <div
          onClick={() => setOpenCartSection(true)}
          className="lg:hidden fixed bottom-16 right-4 bg-green-700 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-3 z-50"
        >
          <div className="animate-bounce">
            <MdShoppingCartCheckout size={22} />
          </div>

          <div className="text-sm font-semibold leading-tight">
            <p>{totalQty} Items</p>
            <p>{DisplayPriceInRupees(totalPrice)}</p>
          </div>
        </div>
      )}

      {/* CART DRAWER */}
      {openCartSection && (
        <DisplayCartItem close={() => setOpenCartSection(false)} />
      )}
    </>
  )
}

export default Header
