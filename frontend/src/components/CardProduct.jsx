// import React from 'react'
// import DisplayPriceInRupees from '../utils/DisplayPriceInRupees'

// const CartProduct = ({data}) => {
//   return (
//     <div className='border p-4 grid gap-3 max-w-64  lg:min-w-52 rounded'>
//       <div className='h-38 w-full rounded overflow-hidden flex items-center justify-center '>
//         <img
//           src={data.image[0]}
//           className='h-full w-full object-contain p-1'
//         />
//       </div>

//       <div className=' rounded text-sm w-fit p-[1px] px-2 text-green-600  bg-green-100'>
//          <button className='bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded'>
//             Rating
//           </button>
//         </div>
//       <div className='font-medium text-ellipsis line-clamp-2'>{data.name} </div>
//       <div className='w-fit'>{data.unit}</div>

//       <div className='flex items-center justify-between gap-3'>
//         <div className='font-semibold'>
//           {DisplayPriceInRupees(data.price)}
//         </div>
//         <div className=''>
//           <button className='bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded'>
//             Add
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CartProduct


import React, { useState } from "react";
import DisplayPriceInRupees from "../utils/DisplayPriceInRupees";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { validURLConvert } from "../utils/validURLConvert";
const CardProduct = ({ data }) => {
 // const [qty, setQty] = useState(0);

   const ratingStars = Array.from({ length: 5 }, (_, i) => (
    <FaStar
      key={i}
      className={`text-yellow-500 ${i < data.rating ? "opacity-100" : "opacity-30"}`}
    />
  ));
    
  const url = `/product/${validURLConvert(data.name)}-${data._id}`

  return (
    <Link to={url} className="border py-2 lg:p-4 grid  gap-2 lg:gap-3 man-w-36  lg:min-w-52 rounded  cursor-pointer bg-white">
      <div className="min-h-20 w-full max-h-24 lg:max-h-32 rounded overflow-hidden flex items-center justify-center">
         <img
          src={data.image[0]}
          className="h-full w-full object-contain p-1 "
          alt={data.name}
        />
      </div>

         {/* Star Rating */}
      <div className='flex items-center gap-1'>
        {ratingStars}
        <span className='text-sm text-gray-600 ml-1'>({data.rating})</span>
      </div>

       <div className=" px-2 lg:px-0 font-medium text-ellipsis text-sm lg:text-base line-clamp-2">
         {data.name}
       </div>
       <div className="w-fit px-2 lg:px-0 text-sm lg:text-base">{data.unit}</div>

       <div className=" px-2 lg:px-0 flex items-center justify-between gap-1 lg:gap-3  text-sm lg:text-base">
         <div className="font-semibold ">
          {DisplayPriceInRupees(data.price)}
         </div>

       <div className="">
          <button
           
            className="bg-green-600 hover:bg-green-700 text-white px-2 lg:px-4 py-1 rounded">
            Add
          </button>
          </div>
       
      </div>
    </Link>
  );
};

export default CardProduct;






