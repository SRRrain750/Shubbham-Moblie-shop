// import React from 'react'
// import { IoClose } from 'react-icons/io5'
// import { Link, useNavigate } from 'react-router-dom'
// import { useGlobalContext } from '../provider/GlobalProvider'
// import DisplayPriceInRupees from '../utils/DisplayPriceInRupees'
// import { FaCaretRight } from 'react-icons/fa'
// import { useSelector } from 'react-redux'
// import AddToCartButton from './AddToCartButton'
// import { priceWithDiscount } from '../utils/PriceWithDiscount'
// import imageEmpty from '../assets/empty_cart.webp'
// import toast from 'react-hot-toast'
// const DisplayCartItem = ({close}) => {

//    const { notDiscountTotalPrice, totalPrice,totalQty } = useGlobalContext() 
//    const cartItem = useSelector(state => state.cartItem.cart)
//    const user = useSelector(state => state.user)
//    const navigate = useNavigate()

//    const redirectToCheckoutPage = () =>{
//         if(user?._id){
//            navigate("/checkout")
//            if(close){
//              close()
//            }
//            return
//         }
//         toast("Please Login")
//    }

//   return (// opacity used t/w v3
//      <section className='fixed top-0 bottom-0 right-0 left-0 bg-black/70 z-50'>
//           <div className='bg-white w-full lg:max-w-sm min-h-screen max-h-screen ml-auto'>
//                  <div className='flex items-center p-4 shadow-md gap-3 justify-between'>
//                   <h2 className='font-semibold '>Cart</h2>
//                   <button to={"/"}
//                     className='lg:hidden'>
//                     <IoClose size={25}/>
//                   </button>

//                   <button onClick={close} className='hidden lg:block'>
//                     <IoClose size={25}/>
//                   </button>
//                  </div>
          
//                   <div className=' min-h-[75vh] lg:min-h-[80vh] h-full max-h-[calc(100vh-150px)] bg-blue-50 p-2 flex flex-col gap-4'>
//                     {/**display items */}

//                     {
//                       cartItem[0] ? (
//                        <>
//                            <div className='flex items-center justify-between px-4 py-2 bg-blue-100 text-blue-500 rounded-full'>
//                             <p>Your total savings</p>
//                             <p>{DisplayPriceInRupees(notDiscountTotalPrice - totalPrice)}</p>
//                           </div>
//                           <div className='bg-white rounded-lg p-4 grid gap-6 overflow-auto'>
//                           {
//                               cartItem[0] &&  (
//                                cartItem.map((item,index)=>{
//                              return(
//                               <div key={item?._id+"cartItemDisplay"} className='flex w-full gap-4'>
//                                 <div className='w-18 h-20 min-w-18 min-h-20  border rounded overflow-hidden bg-white '>
//                                   <img
//                                     src={item?.productId?.image[0]}
//                                     className='w-full h-full object-contain'
//                                   />
//                                 </div>
//                                 <div className='w-full max-w-sm text-xs'>
//                                   <p className='text-xs text-ellipsis line-clamp-2'>{item?.productId?.name}</p>
//                                   <p className='text-neutral-400'>{item?.productId?.unit}</p>
//                                   <p className='font-semibold'>{DisplayPriceInRupees(priceWithDiscount(item?.productId?.price,item?.productId?.discount))}</p>
//                                 </div>
//                                 <div>
//                                   <AddToCartButton data={item?.productId}/>
//                                   </div>
//                               </div>
//                             )
//                           })
//                         )
//                        }
//                        </div>
//                        <div className='bg-white p-4'>
//                            <h3 className='font-semibold'>Bill Details</h3>
//                            <div className='flex gap-5 justify-between ml-1'>
//                             <p>Items total</p>
//                             <p className='flex items-center gap-2'><span className='line-through text-neutral-400'>{DisplayPriceInRupees(notDiscountTotalPrice)}</span><span> {DisplayPriceInRupees(totalPrice)} </span></p>
//                            </div>
//                             <div className='flex gap-5 justify-between ml-1'>
//                             <p> Quantity total</p>
//                             <p className='flex items-center gap-2'>{totalQty} item</p>
//                             </div>
//                             <div className='font-semibold flex items-center justify-between gap-4'>
//                               <p>Grand total</p>
//                               <p>{DisplayPriceInRupees(totalPrice)}</p>
//                             </div>
//                        </div>
//                        </>
//                       ) : (
//                           <div className='bg-white flex flex-col justify-center items-center'>
//                             <img
//                              src={imageEmpty}
//                              className='w-full h-full object-contain'
//                             />
               
//                           <Link onClick={close} to={'/'} className='block bg-green-600 px-4 py-2 text-white rounded'> Shop Now</Link>

//                           </div>
//                       )
//                     }
           
//                   </div>
                  
//                   {
//                     cartItem[0] && (

//                     <div className='p-2'>
//                       <div className='bg-green-700 text-neutral-100 px-4 font-bold text-base py-4 static bottom-3 rounded flex items-center gap-4 justify-between'>
//                         <div>
//                           {DisplayPriceInRupees(totalPrice)}
//                         </div>
                     
//                         <button onClick={redirectToCheckoutPage} className='flex items-center gap-1 '>
//                            Proceed
//                           <span><FaCaretRight/></span>
//                         </button>
//                      </div>
//                 </div>

//                     )
//                   }
             
//           </div>

//     </section>
//   )
// }

// export default DisplayCartItem


import React from 'react'
import { IoClose } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../provider/GlobalProvider'
import DisplayPriceInRupees from '../utils/DisplayPriceInRupees'
import { FaCaretRight } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import AddToCartButton from './AddToCartButton'
import { priceWithDiscount } from '../utils/PriceWithDiscount'
import imageEmpty from '../assets/empty_cart.webp'
import toast from 'react-hot-toast'

const DisplayCartItem = ({ close }) => {

  const { notDiscountTotalPrice, totalPrice, totalQty } = useGlobalContext()
  const cartItem = useSelector(state => state.cartItem.cart)
  const user = useSelector(state => state.user)
  const navigate = useNavigate()

  const redirectToCheckoutPage = () => {
    if (user?._id) {
      navigate('/checkout')
      close && close()
      return
    }
    toast('Please Login')
  }

  return (
    <section className="fixed inset-0 bg-black/70 z-50">
      {/* Drawer */}
      <div className="bg-white w-full lg:max-w-sm h-screen ml-auto flex flex-col">

        {/* Header */}
        <div className="flex items-center p-4 shadow-md justify-between">
          <h2 className="font-semibold">Cart</h2>

          {/* Mobile Close */}
          <button onClick={close} className="lg:hidden">
            <IoClose size={25} />
          </button>

          {/* Desktop Close */}
          <button onClick={close} className="hidden lg:block">
            <IoClose size={25} />
          </button>
        </div>

        {/* Cart Body */}
        <div className="flex-1 overflow-y-auto bg-blue-50 p-3 flex flex-col gap-4">

          {cartItem?.length ? (
            <>
              {/* Savings */}
              <div className="flex justify-between px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">
                <p>Your total savings</p>
                <p>{DisplayPriceInRupees(notDiscountTotalPrice - totalPrice)}</p>
              </div>

              {/* Items */}
              <div className="bg-white rounded-lg p-4 grid gap-6">
                {cartItem.map(item => (
                  <div
                    key={item._id}
                    className="flex gap-4 items-center"
                  >
                    <div className="w-20 h-20 min-w-20 border rounded overflow-hidden bg-white">
                      <img
                        src={item?.productId?.image[0]}
                        className="w-full h-full object-contain"
                        alt=""
                      />
                    </div>

                    <div className="flex-1 text-xs">
                      <p className="line-clamp-2">{item?.productId?.name}</p>
                      <p className="text-neutral-400">{item?.productId?.unit}</p>
                      <p className="font-semibold">
                        {DisplayPriceInRupees(
                          priceWithDiscount(
                            item?.productId?.price,
                            item?.productId?.discount
                          )
                        )}
                      </p>
                    </div>

                    <AddToCartButton data={item?.productId} />
                  </div>
                ))}
              </div>

              {/* Bill */}
              <div className="bg-white p-4 rounded">
                <h3 className="font-semibold mb-2">Bill Details</h3>

                <div className="flex justify-between text-sm">
                  <p>Items total</p>
                  <p>
                    <span className="line-through text-gray-400 mr-2">
                      {DisplayPriceInRupees(notDiscountTotalPrice)}
                    </span>
                    {DisplayPriceInRupees(totalPrice)}
                  </p>
                </div>

                <div className=" flex  justify-between text-sm">
                  <p>Quantity</p>
                  <p className=''>{totalQty} item</p>
                </div>

                <div className="flex justify-between font-semibold">
                  <p>Grand total</p>
                  <p>{DisplayPriceInRupees(totalPrice)}</p>
                </div>
              </div>
            </>
          ) : (
            /* Empty Cart */
            <div className="bg-white h-full flex flex-col justify-center items-center p-6">
              <img
                src={imageEmpty}
                className="w-60 h-60 object-contain"
                alt="Empty cart"
              />

              <Link
                to="/"
                onClick={close}
                className="mt-4 bg-green-600 px-4 py-2 text-white rounded"
              >
                Shop Now
              </Link>
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItem?.length > 0 && (
          <div className="p-3">
            <div className="bg-green-700 text-white px-4 py-4 rounded flex items-center justify-between">
              <span className="font-bold">
                {DisplayPriceInRupees(totalPrice)}
              </span>

              <button
                onClick={redirectToCheckoutPage}
                className="flex items-center gap-1 font-semibold"
              >
                Proceed <FaCaretRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default DisplayCartItem




// import React from 'react'
// import { IoClose } from 'react-icons/io5'
// import { Link, useNavigate } from 'react-router-dom'
// import { useGlobalContext } from '../provider/GlobalProvider'
// import { DisplayPriceInRupees } from '../utils/DisplayPriceInRupees'
// import { FaCaretRight } from "react-icons/fa";
// import { useSelector } from 'react-redux'
// import AddToCartButton from './AddToCartButton'
// import { pricewithDiscount } from '../utils/PriceWithDiscount'
// import imageEmpty from '../assets/empty_cart.webp'
// import toast from 'react-hot-toast'

// const DisplayCartItem = ({close}) => {
//     const { notDiscountTotalPrice, totalPrice ,totalQty} = useGlobalContext()
//     const cartItem  = useSelector(state => state.cartItem.cart)
//     const user = useSelector(state => state.user)
//     const navigate = useNavigate()

//     const redirectToCheckoutPage = ()=>{
//         if(user?._id){
//             navigate("/checkout")
//             if(close){
//                 close()
//             }
//             return
//         }
//         toast("Please Login")
//     }
//   return (
//     <section className='bg-neutral-900 fixed top-0 bottom-0 right-0 left-0 bg-opacity-70 z-50'>
//         <div className='bg-white w-full max-w-sm min-h-screen max-h-screen ml-auto'>
//             <div className='flex items-center p-4 shadow-md gap-3 justify-between'>
//                 <h2 className='font-semibold'>Cart</h2>
//                 <Link to={"/"} className='lg:hidden'>
//                     <IoClose size={25}/>
//                 </Link>
//                 <button onClick={close} className='hidden lg:block'>
//                     <IoClose size={25}/>
//                 </button>
//             </div>

//             <div className='min-h-[75vh] lg:min-h-[80vh] h-full max-h-[calc(100vh-150px)] bg-blue-50 p-2 flex flex-col gap-4'>
//                 {/***display items */}
//                 {
//                     cartItem[0] ? (
//                         <>
//                             <div className='flex items-center justify-between px-4 py-2 bg-blue-100 text-blue-500 rounded-full'>
//                                     <p>Your total savings</p>
//                                     <p>{DisplayPriceInRupees(notDiscountTotalPrice - totalPrice )}</p>
//                             </div>
//                             <div className='bg-white rounded-lg p-4 grid gap-5 overflow-auto'>
//                                     {
//                                         cartItem[0] && (
//                                             cartItem.map((item,index)=>{
//                                                 return(
//                                                     <div key={item?._id+"cartItemDisplay"} className='flex  w-full gap-4'>
//                                                         <div className='w-16 h-16 min-h-16 min-w-16 bg-red-500 border rounded'>
//                                                             <img
//                                                                 src={item?.productId?.image[0]}
//                                                                 className='object-scale-down'
//                                                             />
//                                                         </div>
//                                                         <div className='w-full max-w-sm text-xs'>
//                                                             <p className='text-xs text-ellipsis line-clamp-2'>{item?.productId?.name}</p>
//                                                             <p className='text-neutral-400'>{item?.productId?.unit}</p>
//                                                             <p className='font-semibold'>{DisplayPriceInRupees(pricewithDiscount(item?.productId?.price,item?.productId?.discount))}</p>
//                                                         </div>
//                                                         <div>
//                                                             <AddToCartButton data={item?.productId}/>
//                                                         </div>
//                                                     </div>
//                                                 )
//                                             })
//                                         )
//                                     }
//                             </div>
//                             <div className='bg-white p-4'>
//                                 <h3 className='font-semibold'>Bill details</h3>
//                                 <div className='flex gap-4 justify-between ml-1'>
//                                     <p>Items total</p>
//                                     <p className='flex items-center gap-2'><span className='line-through text-neutral-400'>{DisplayPriceInRupees(notDiscountTotalPrice)}</span><span>{DisplayPriceInRupees(totalPrice)}</span></p>
//                                 </div>
//                                 <div className='flex gap-4 justify-between ml-1'>
//                                     <p>Quntity total</p>
//                                     <p className='flex items-center gap-2'>{totalQty} item</p>
//                                 </div>
//                                 <div className='flex gap-4 justify-between ml-1'>
//                                     <p>Delivery Charge</p>
//                                     <p className='flex items-center gap-2'>Free</p>
//                                 </div>
//                                 <div className='font-semibold flex items-center justify-between gap-4'>
//                                     <p >Grand total</p>
//                                     <p>{DisplayPriceInRupees(totalPrice)}</p>
//                                 </div>
//                             </div>
//                         </>
//                     ) : (
//                         <div className='bg-white flex flex-col justify-center items-center'>
//                             <img
//                                 src={imageEmpty}
//                                 className='w-full h-full object-scale-down' 
//                             />
//                             <Link onClick={close} to={"/"} className='block bg-green-600 px-4 py-2 text-white rounded'>Shop Now</Link>
//                         </div>
//                     )
//                 }
                
//             </div>

//             {
//                 cartItem[0] && (
//                     <div className='p-2'>
//                         <div className='bg-green-700 text-neutral-100 px-4 font-bold text-base py-4 static bottom-3 rounded flex items-center gap-4 justify-between'>
//                             <div>
//                                 {DisplayPriceInRupees(totalPrice)}
//                             </div>
//                             <button onClick={redirectToCheckoutPage} className='flex items-center gap-1'>
//                                 Proceed
//                                 <span><FaCaretRight/></span>
//                             </button>
//                         </div>
//                     </div>
//                 )
//             }
            
//         </div>
//     </section>
//   )
// }

// export default DisplayCartItem
