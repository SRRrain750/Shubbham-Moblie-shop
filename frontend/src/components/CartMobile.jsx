// import React from 'react'
// import { MdOutlineShoppingCartCheckout } from "react-icons/md";
// import { useGlobalContext } from '../provider/GlobalProvider';
// import DisplayPriceInRupees from '../utils/DisplayPriceInRupees';
// import { Link } from 'react-router';
// import  { FaCaretRight } from "react-icons/fa"
// import { useSelector } from 'react-redux';
// const CartMobileLink = () => {
//    const { totalPrice, totalQty } = useGlobalContext()
//    const cartItem = useSelector(state=>state.cartItem.cart)

//   return (
//    <>
//          {
//             cartItem[0] && (
//                   <div className=' sticky bottom-4 p-2'>
//        <div className='bg-green-700 px-2 py-1 rounded text-neutral-100 text-sm flex items-center justify-between gap-3 lg:hidden'>
//            <div className='flex items-center gap-2'>
//                <div className='p-2 bg-green-500 rounded fit'>
//                     <MdOutlineShoppingCartCheckout/>  
//                </div>
          
//             <div className='text-xs'>
//                   <p> {totalQty} items</p>
//                   <p> {DisplayPriceInRupees(totalPrice)}</p>
//             </div>
//            </div>

//            <Link to={'/cart'} className='flex items-center gap-1'>
//            <span className='sm'> View Cart </span>
//            <FaCaretRight/>
//            </Link>
//         </div>
//                   </div>
//             )
//          }
//    </>
   
//  )
// }

// export default CartMobileLink





import { Link, useLocation } from 'react-router-dom'
import { FaCaretRight } from "react-icons/fa"
import { MdOutlineShoppingCartCheckout } from "react-icons/md"
import { useSelector } from 'react-redux'
import { useGlobalContext } from '../provider/GlobalProvider'
import DisplayPriceInRupees from '../utils/DisplayPriceInRupees'

const CartMobileLink = () => {
  const { totalPrice, totalQty } = useGlobalContext()
  const cartItem = useSelector(state => state.cartItem.cart)
  const location = useLocation()

  // Pages where the mobile cart link should be hidden
  const hidePages = ['/checkout', '/success', '/cancel']
  const hideCartLink = hidePages.includes(location.pathname)

  // If no items or we are on a page where cart is hidden, return null
  if (!cartItem[0] || hideCartLink) return null

  return (
    <div className='sticky bottom-4 p-2'>
      <div className='bg-green-700 px-2 py-1 rounded text-neutral-100 text-sm flex items-center justify-between gap-3 lg:hidden'>
        <div className='flex items-center gap-2'>
          <div className='p-2 bg-green-500 rounded fit'>
            <MdOutlineShoppingCartCheckout size={20} />
          </div>

          <div className='text-xs'>
            <p>{totalQty} items</p>
            <p>{DisplayPriceInRupees(totalPrice)}</p>
          </div>
        </div>

        <Link to={'/cart'} className='flex items-center gap-1'>
          <span className='sm'>View Cart</span>
          <FaCaretRight />
        </Link>
      </div>
    </div>
  )
}

export default CartMobileLink
