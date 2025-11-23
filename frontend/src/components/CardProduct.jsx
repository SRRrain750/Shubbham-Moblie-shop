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
    <Link to={url} className="border p-4 grid gap-3 max-w-64 lg:min-w-52 rounded  ">
      <div className="h-42 w-full rounded overflow-hidden flex items-center justify-center bg-gray-50">
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

       <div className="font-medium text-ellipsis line-clamp-2">
         {data.name}
       </div>
       <div className="w-fit">{data.unit}</div>

       <div className="flex items-center justify-between gap-3">
         <div className="font-semibold">
          {DisplayPriceInRupees(data.price)}
         </div>

       {/* {qty === 0 ? (
          <button
            onClick={() => setQty(1)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded"
          >
            Add
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQty(qty - 1)}
              className="px-3 py-1 bg-red-500 text-white rounded"
            >
              -
            </button>
            <span className="font-medium">{qty}</span>
            <button
              onClick={() => setQty(qty + 1)}
              className="px-3 py-1 bg-green-600 text-white rounded"
            >
              +
            </button>
          </div>
        )} */}
      </div>
    </Link>
  );
};

export default CardProduct;






