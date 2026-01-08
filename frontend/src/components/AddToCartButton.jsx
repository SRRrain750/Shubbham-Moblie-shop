import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SummaryApi from "../common/SummaryApi"
import AxiosToastError from '../utils/AxiosToastError'
import Axios from '../utils/Axios'
import toast from "react-hot-toast"
import { useGlobalContext } from '../provider/GlobalProvider'
import Loading from '../components/Loading'
import { useSelector } from 'react-redux'
import { FaMinus, FaPlus } from 'react-icons/fa6'

const AddToCartButton = ({ data }) => {
  const location = useLocation()
  const isCheckoutPage = location.pathname === "/checkout"

  const { fetchCartItem, updateCartItem, deleteCartItem } = useGlobalContext()

  const [loading, setLoading] = useState(false)
  const cartItem = useSelector(state => state.cartItem.cart)
  const [isAvailableCart, setIsAvailableCart] = useState(false)
  const [qty, setQty] = useState(0)
  const [cartItemDetails, setCartItemDetails] = useState(null)

  // ADD TO CART
  const handleAddToCart = async (e) => {
    e.preventDefault()
    e.stopPropagation()

    try {
      setLoading(true)
      const response = await Axios({
        ...SummaryApi.addToCart,
        data: { productId: data?._id }
      })

      if (response.data.success) {
        toast.success(response.data.message)
        fetchCartItem && fetchCartItem()
      }
    } catch (error) {
      AxiosToastError(error)
    } finally {
      setLoading(false)
    }
  }

  // CHECK ITEM IN CART
  useEffect(() => {
    const product = cartItem.find(item => item.productId._id === data._id)
    setIsAvailableCart(!!product)
    setQty(product?.quantity || 0)
    setCartItemDetails(product || null)
  }, [data, cartItem])

  // INCREASE QTY
  const increaseQty = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    const response = await updateCartItem(cartItemDetails._id, qty + 1)
    if (response?.success) toast.success("Item added")
  }

  // DECREASE QTY
  const decreaseQty = async (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (qty === 1) {
      deleteCartItem(cartItemDetails._id)
    } else {
      const response = await updateCartItem(cartItemDetails._id, qty - 1)
      if (response?.success) toast.success("Item removed")
    }
  }

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block w-full max-w-[150px]">
        {isAvailableCart ? (
          <div className="flex">
            <button onClick={decreaseQty} className="bg-green-600 text-white flex-1 p-1 rounded">
              <FaMinus />
            </button>

            <p className="flex-1 font-semibold flex items-center justify-center">{qty}</p>

            <button onClick={increaseQty} className="bg-green-600 text-white flex-1 p-1 rounded">
              <FaPlus />
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="bg-green-600 text-white px-4 py-1 rounded"
          >
            {loading ? <Loading /> : "Add"}
          </button>
        )}
      </div>

      {/* ================= MOBILE ================= */}
      
        
        <div className=" lg:hidden fixed bottom-0 left-0 w-full bg-white border-t p-3 z-50 ">
          {isAvailableCart ? (
            <div className="flex">
              <button
                onClick={decreaseQty}
                className=" bg-green-600 text-white  flex-1 px-1 py-1 rounded">
                <FaMinus />
              </button>

              <p className=" flex-1 text-sm font-medium flex items-center justify-center ">{qty}</p>

              <button
                onClick={increaseQty}
                className="bg-green-600 text-white flex-1 px-2 py-2 rounded">
                <FaPlus />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="  w-full bg-green-600 text-white flex-1 py-2 text-lg rounded "
            >
              {loading ? <Loading /> : "Add"}
            </button>
          )}
        </div>
      
    </>
  )
}

export default AddToCartButton





// // import React, { useEffect, useState } from 'react'
// import { useGlobalContext } from '../provider/GlobalProvider'
// import Axios from '../utils/Axios'
// import SummaryApi from '../common/SummaryApi'
// import toast from 'react-hot-toast'
// import AxiosToastError from '../utils/AxiosToastError'
// import Loading from './Loading'
// import { useSelector } from 'react-redux'
// import { FaMinus, FaPlus } from "react-icons/fa6";

// const AddToCartButton = ({ data }) => {
//     const { fetchCartItem, updateCartItem, deleteCartItem } = useGlobalContext()
//     const [loading, setLoading] = useState(false)
//     const cartItem = useSelector(state => state.cartItem.cart)
//     const [isAvailableCart, setIsAvailableCart] = useState(false)
//     const [qty, setQty] = useState(0)
//     const [cartItemDetails,setCartItemsDetails] = useState()

//     const handleADDTocart = async (e) => {
//         e.preventDefault()
//         e.stopPropagation()

//         try {
//             setLoading(true)

//             const response = await Axios({
//                 ...SummaryApi.addTocart,
//                 data: {
//                     productId: data?._id
//                 }
//             })

//             const { data: responseData } = response

//             if (responseData.success) {
//                 toast.success(responseData.message)
//                 if (fetchCartItem) {
//                     fetchCartItem()
//                 }
//             }
//         } catch (error) {
//             AxiosToastError(error)
//         } finally {
//             setLoading(false)
//         }

//     }

//     //checking this item in cart or not
//     useEffect(() => {
//         const checkingitem = cartItem.some(item => item.productId._id === data._id)
//         setIsAvailableCart(checkingitem)

//         const product = cartItem.find(item => item.productId._id === data._id)
//         setQty(product?.quantity)
//         setCartItemsDetails(product)
//     }, [data, cartItem])


//     const increaseQty = async(e) => {
//         e.preventDefault()
//         e.stopPropagation()
    
//        const response = await  updateCartItem(cartItemDetails?._id,qty+1)
        
//        if(response.success){
//         toast.success("Item added")
//        }
//     }

//     const decreaseQty = async(e) => {
//         e.preventDefault()
//         e.stopPropagation()
//         if(qty === 1){
//             deleteCartItem(cartItemDetails?._id)
//         }else{
//             const response = await updateCartItem(cartItemDetails?._id,qty-1)

//             if(response.success){
//                 toast.success("Item remove")
//             }
//         }
//     }
//     return (
//         <div className='w-full max-w-[150px]'>
//             {
//                 isAvailableCart ? (
//                     <div className='flex w-full h-full'>
//                         <button onClick={decreaseQty} className='bg-green-600 hover:bg-green-700 text-white flex-1 w-full p-1 rounded flex items-center justify-center'><FaMinus /></button>

//                         <p className='flex-1 w-full font-semibold px-1 flex items-center justify-center'>{qty}</p>

//                         <button onClick={increaseQty} className='bg-green-600 hover:bg-green-700 text-white flex-1 w-full p-1 rounded flex items-center justify-center'><FaPlus /></button>
//                     </div>
//                 ) : (
//                     <button onClick={handleADDTocart} className='bg-green-600 hover:bg-green-700 text-white px-2 lg:px-4 py-1 rounded'>
//                         {loading ? <Loading /> : "Add"}
//                     </button>
//                 )
//             }

//         </div>
//     )
// }

// export default AddToCartButton

