// import React, { useState } from 'react'
// import DisplayPriceInRupees from '../utils/DisplayPriceInRupees'
// import { useGlobalContext } from '../provider/GlobalProvider'
// import AddAddress from '../components/AddAddress'
// import { useSelector } from 'react-redux'
// import AxiosToastError from '../utils/AxiosToastError'
// import Axios from '../utils/Axios'
// import SummaryApi from '../common/SummaryApi'
// import toast from 'react-hot-toast'
// import { useNavigate } from 'react-router-dom'

// const CheckoutPage = () => {

//      const { notDiscountTotalPrice, totalPrice,totalQty,fetchCartItem,fetchOrder } = useGlobalContext()

//      const [ openAddress, setOpenAddress] = useState(false)
//      const [ selectAddress, setSelectAddress ] = useState(0)
//      const addressList = useSelector(state => state.addresses.addressList)
//      const cartItemsList = useSelector(state=>state.cartItem.cart)
//      const  navigate = useNavigate()
     

//      const  handleCashOnDelivery = async()=>{

//         if (!selectAddress && selectAddress !== 0) {
//             toast.error("Please select a delivery address")
//             return
//         }
//            try{
//                const response = await Axios({
//                 //...SummaryApi.cashOnDeliveryOrder,
//                   url: SummaryApi.cashOnDeliveryOrder.url,
//                   method: SummaryApi.cashOnDeliveryOrder.method,
//                 data : {
//                   list_items : cartItemsList,
//                   addressId : addressList[selectAddress]?._id,
//                   subTotalAmt : totalPrice ,
//                   totalAmt : totalPrice,
                 
//                 }
//                })

//                const  { data : responseData } = response

//                if(responseData.success){
//                    toast.success(responseData.message)
//                    if(fetchCartItem){
//                     fetchCartItem()

//                    }
//                    if(fetchOrder){
//                     fetchOrder()
//                    }
//                    navigate('/success',{
//                     state : {
//                       text : " Order "
//                     }
//                    })
//                }
//            }catch(error){
//             AxiosToastError(error)
             
//            }     
//      }
//   return (
//     <section className='bg-blue-50 '>
//         <div className='container mx-auto p-4 flex flex-col lg:flex-row w-full  gap-5 justify-between'>

//             <div className='w-full'>

//                 {/** address */}
//                <h3 className=' text-lg font-semibold'> Choose your address </h3>
//                <div className='bg-white p-2 grid gap-4'>
//                 {
//                   addressList .map((address,index)=>{
//                     return(
//                       <label htmlFor= {"address" + index} className={ `${!address.status && " hidden"}`}>
//                       <div className='border rounded p-3 flex gap-3 hover:bg-blue-50'>
//                         <div>
//                            <input id={"address" + index}
//                             type='radio'
//                             value={index} 
//                             onChange={(e)=> setSelectAddress(Number(e.target.value))} 
//                             name='address'
//                            />
//                         </div>

//                     <div>
//                         <p>{address.address_line}</p>
//                         <p>{address.city}</p>
//                         <p>{address.state}</p>
//                         <p>{address.country} - {address.pincode}</p>
//                         <p>{address.mobile}</p>
//                     </div>
//                       </div>
//                       </label>
//                     )
//                   })
//                 }
                    
//                <div onClick={()=>setOpenAddress(true)}
//                 className='h-16 bg-blue-50 border-2  border-dashed flex justify-center items-center  cursor-pointer'>
//                      Add address
//                </div>
//               </div>
             
//             </div>

//             <div className='w-full mx-w-md bg-white py-4 px-2'>


//                 {/** Summary */}
//                 <h3 className='text-lg font-semibold'> Summary </h3>

//                     <div className='bg-white p-4'>
//                            <h3 className='font-semibold'>Bill Details</h3>
//                            <div className='flex gap-5 justify-between ml-1'><p>Items total</p>
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

                       

//                       <div className='w-full flex flex-col gap-4'>
//                          <button 
//                          className='py-2 px-4 border-2 border-green-600 font-semibold  text-green-600  hover:bg-green-600 hover:text-white rounded'
//                          onClick={handleCashOnDelivery}>
//                           Submit your order
//                         </button>
//                       </div>
//                  </div>

//                  {

//                     openAddress && (
//                         <AddAddress close={()=>setOpenAddress(false)}/>
//                     )
//                  }

//         </div>

//     </section>
//   )
// }

// export default CheckoutPage



import React, { useState } from 'react'
import DisplayPriceInRupees from '../utils/DisplayPriceInRupees'
import { useGlobalContext } from '../provider/GlobalProvider'
import AddAddress from '../components/AddAddress'
import { useSelector } from 'react-redux'
import AxiosToastError from '../utils/AxiosToastError'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const CheckoutPage = () => {

  const {
    notDiscountTotalPrice,
    totalPrice,
    totalQty,
    fetchCartItem,
    fetchOrder
  } = useGlobalContext()

  const [openAddress, setOpenAddress] = useState(false)
  const [selectAddress, setSelectAddress] = useState(0)
  const [showConfirm, setShowConfirm] = useState(false)

  const addressList = useSelector(state => state.addresses.addressList)
  const cartItemsList = useSelector(state => state.cartItem.cart)

  const navigate = useNavigate()

  /* ================== PLACE ORDER ================== */
  const handleCashOnDelivery = async () => {

    if (!addressList?.length) {
      toast.error("Please add a delivery address")
      return
    }

    try {
      const response = await Axios({
        url: SummaryApi.cashOnDeliveryOrder.url,
        method: SummaryApi.cashOnDeliveryOrder.method,
        data: {
          list_items: cartItemsList,
          addressId: addressList[selectAddress]?._id,
          subTotalAmt: totalPrice,
          totalAmt: totalPrice
        }
      })

      const { data: responseData } = response

      if (responseData.success) {
        toast.success(responseData.message)

        fetchCartItem && fetchCartItem()
        fetchOrder && fetchOrder()

        navigate('/success', {
          state: { text: "Order Placed Successfully" }
        })
      }
    } catch (error) {
      AxiosToastError(error)
    }
  }

  return (
    <section className='bg-blue-50 min-h-screen'>
      <div className='container mx-auto p-4 flex flex-col lg:flex-row gap-5'>

        {/* ================= ADDRESS SECTION ================= */}
        <div className='w-full'>
          <h3 className='text-lg font-semibold mb-2'>Choose your address</h3>

          <div className='bg-white p-3 grid gap-4'>
            {
              addressList.map((address, index) => (
                <label
                  key={address._id}
                  htmlFor={`address${index}`}
                  className={`${!address.status && "hidden"}`}
                >
                  <div className='border rounded p-3 flex gap-3 cursor-pointer hover:bg-blue-50'>
                    <input
                      id={`address${index}`}
                      type='radio'
                      name='address'
                      value={index}
                      checked={selectAddress === index}
                      onChange={() => setSelectAddress(index)}
                    />
                    <div>
                      <p>{address.address_line}</p>
                      <p>{address.city}</p>
                      <p>{address.state}</p>
                      <p>{address.country} - {address.pincode}</p>
                      <p>{address.mobile}</p>
                    </div>
                  </div>
                </label>
              ))
            }

            <div
              onClick={() => setOpenAddress(true)}
              className='h-16 bg-blue-50 border-2 border-dashed flex justify-center items-center cursor-pointer'
            >
              Add address
            </div>
          </div>
        </div>

        {/* ================= SUMMARY ================= */}
        <div className='w-full max-w-md bg-white p-4 rounded'>
          <h3 className='text-lg font-semibold mb-3'>Summary</h3>

          <div className='grid gap-2'>
             <h3 className='font-semibold'>Bill Details</h3>
            <div className='flex justify-between'>
               <p>Items total</p>
              <p>
                <span className='line-through text-gray-400 mr-2'>
                  {DisplayPriceInRupees(notDiscountTotalPrice)}
                </span>
                {DisplayPriceInRupees(totalPrice)}
              </p>
            </div>

            <div className='flex justify-between'>
              <p>Quantity</p>
              <p>{totalQty} item</p>
            </div>

            <div className='flex justify-between font-semibold text-lg'>
              <p>Grand total</p>
              <p>{DisplayPriceInRupees(totalPrice)}</p>
            </div>
          </div>

          <button
            className='w-full mt-5 py-2 border-2 border-green-600 text-green-600 font-semibold rounded hover:bg-green-600 hover:text-white'
            onClick={() => setShowConfirm(true)}
          >
            Submit your order
          </button>
        </div>

        {/* ================= ADD ADDRESS MODAL ================= */}
        {openAddress && (
          <AddAddress close={() => setOpenAddress(false)} />
        )}

        {/* ================= CONFIRM ORDER POPUP ================= */}
        {showConfirm && (
          <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
            <div className='bg-white p-6 rounded w-[90%] max-w-sm'>
              <h3 className='text-lg font-semibold mb-3'>Confirm Order</h3>
              <p className='text-gray-600 mb-5'>
                Are you sure you want to place this order?
              </p>

              <div className='flex justify-end gap-4'>
                <button
                  className='px-4 py-2 border rounded hover:bg-gray-100'
                  onClick={() => {
                    setShowConfirm(false)
                    navigate('/cancel')
                  }}
                >
                  Cancel
                </button>

                <button
                  className='px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700'
                  onClick={() => {
                    setShowConfirm(false)
                    handleCashOnDelivery()
                  }}
                >
                  Yes, Place Order
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default CheckoutPage







// // import React, { useState } from 'react'
// // import { useGlobalContext } from '../provider/GlobalProvider'
// // import { DisplayPriceInRupees } from '../utils/DisplayPriceInRupees'
// // import AddAddress from '../components/AddAddress'
// // import { useSelector } from 'react-redux'
// // import AxiosToastError from '../utils/AxiosToastError'
// // import Axios from '../utils/Axios'
// // import SummaryApi from '../common/SummaryApi'
// // import toast from 'react-hot-toast'
// // import { useNavigate } from 'react-router-dom'
// // import { loadStripe } from '@stripe/stripe-js'

// // const CheckoutPage = () => {
// //   const { notDiscountTotalPrice, totalPrice, totalQty, fetchCartItem,fetchOrder } = useGlobalContext()
// //   const [openAddress, setOpenAddress] = useState(false)
// //   const addressList = useSelector(state => state.addresses.addressList)
// //   const [selectAddress, setSelectAddress] = useState(0)
// //   const cartItemsList = useSelector(state => state.cartItem.cart)
// //   const navigate = useNavigate()

// //   const handleCashOnDelivery = async() => {
// //       try {
// //           const response = await Axios({
// //             ...SummaryApi.CashOnDeliveryOrder,
// //             data : {
// //               list_items : cartItemsList,
// //               addressId : addressList[selectAddress]?._id,
// //               subTotalAmt : totalPrice,
// //               totalAmt :  totalPrice,
// //             }
// //           })

// //           const { data : responseData } = response

// //           if(responseData.success){
// //               toast.success(responseData.message)
// //               if(fetchCartItem){
//                 fetchCartItem()
//               }
//               if(fetchOrder){
//                 fetchOrder()
//               }
//               navigate('/success',{
//                 state : {
//                   text : "Order"
//                 }
//               })
//           }

//       } catch (error) {
//         AxiosToastError(error)
//       }
//   }

//   const handleOnlinePayment = async()=>{
//     try {
//         toast.loading("Loading...")
//         const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY
//         const stripePromise = await loadStripe(stripePublicKey)
       
//         const response = await Axios({
//             ...SummaryApi.payment_url,
//             data : {
//               list_items : cartItemsList,
//               addressId : addressList[selectAddress]?._id,
//               subTotalAmt : totalPrice,
//               totalAmt :  totalPrice,
//             }
//         })

//         const { data : responseData } = response

//         stripePromise.redirectToCheckout({ sessionId : responseData.id })
        
//         if(fetchCartItem){
//           fetchCartItem()
//         }
//         if(fetchOrder){
//           fetchOrder()
//         }
//     } catch (error) {
//         AxiosToastError(error)
//     }
//   }
//   return (
//     <section className='bg-blue-50'>
//       <div className='container mx-auto p-4 flex flex-col lg:flex-row w-full gap-5 justify-between'>
//         <div className='w-full'>
//           {/***address***/}
//           <h3 className='text-lg font-semibold'>Choose your address</h3>
//           <div className='bg-white p-2 grid gap-4'>
//             {
//               addressList.map((address, index) => {
//                 return (
//                   <label htmlFor={"address" + index} className={!address.status && "hidden"}>
//                     <div className='border rounded p-3 flex gap-3 hover:bg-blue-50'>
//                       <div>
//                         <input id={"address" + index} type='radio' value={index} onChange={(e) => setSelectAddress(e.target.value)} name='address' />
//                       </div>
//                       <div>
//                         <p>{address.address_line}</p>
//                         <p>{address.city}</p>
//                         <p>{address.state}</p>
//                         <p>{address.country} - {address.pincode}</p>
//                         <p>{address.mobile}</p>
//                       </div>
//                     </div>
//                   </label>
//                 )
//               })
//             }
//             <div onClick={() => setOpenAddress(true)} className='h-16 bg-blue-50 border-2 border-dashed flex justify-center items-center cursor-pointer'>
//               Add address
//             </div>
//           </div>



//         </div>

//         <div className='w-full max-w-md bg-white py-4 px-2'>
//           {/**summary**/}
//           <h3 className='text-lg font-semibold'>Summary</h3>
//           <div className='bg-white p-4'>
//             <h3 className='font-semibold'>Bill details</h3>
//             <div className='flex gap-4 justify-between ml-1'>
//               <p>Items total</p>
//               <p className='flex items-center gap-2'><span className='line-through text-neutral-400'>{DisplayPriceInRupees(notDiscountTotalPrice)}</span><span>{DisplayPriceInRupees(totalPrice)}</span></p>
//             </div>
//             <div className='flex gap-4 justify-between ml-1'>
//               <p>Quntity total</p>
//               <p className='flex items-center gap-2'>{totalQty} item</p>
//             </div>
//             <div className='flex gap-4 justify-between ml-1'>
//               <p>Delivery Charge</p>
//               <p className='flex items-center gap-2'>Free</p>
//             </div>
//             <div className='font-semibold flex items-center justify-between gap-4'>
//               <p >Grand total</p>
//               <p>{DisplayPriceInRupees(totalPrice)}</p>
//             </div>
//           </div>
//           <div className='w-full flex flex-col gap-4'>
//             <button className='py-2 px-4 bg-green-600 hover:bg-green-700 rounded text-white font-semibold' onClick={handleOnlinePayment}>Online Payment</button>

//             <button className='py-2 px-4 border-2 border-green-600 font-semibold text-green-600 hover:bg-green-600 hover:text-white' onClick={handleCashOnDelivery}>Cash on Delivery</button>
//           </div>
//         </div>
//       </div>


//       {
//         openAddress && (
//           <AddAddress close={() => setOpenAddress(false)} />
//         )
//       }
//     </section>
//   )
// }

// export default CheckoutPage