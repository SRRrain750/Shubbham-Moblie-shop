import React, { useState } from "react";
import DisplayPriceInRupees from "../utils/DisplayPriceInRupees";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { validURLConvert } from "../utils/validURLConvert";
import { priceWithDiscount } from "../utils/PriceWithDiscount";
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
        <div  className="flax items-center gap-2">
             {/* Star Rating */}
            <div className='flex items-center gap-1'>
                {ratingStars}
                <span className='text-sm text-gray-600 ml-1'>({data.rating})</span>
              </div>
         <div>
           {
              Boolean(data.discount) &&(
              <p className="text-green-700 bg-green-200 px-2 w-fit text-xs rounded">{data.discount}% Discount</p>
            )
          }
        </div>
           </div>

       <div className=" px-2 lg:px-0 font-medium text-ellipsis text-sm lg:text-base line-clamp-2">
         {data.name}
       </div>
       <div className="w-fit px-2 lg:px-0 text-sm lg:text-base">{data.unit}</div>

       <div className=" px-2 lg:px-0 flex items-center justify-between gap-1 lg:gap-3  text-sm lg:text-base">
        <div className="flex items-center gap-1">
          <div className="font-semibold ">
            {DisplayPriceInRupees(priceWithDiscount(data.price,data.discount))}
          </div>
         
        </div>
       

       <div className="">
        {
          data.stock == 0 ? (
            <p className="text-red-500 text-sm  text-center">Out of stock</p>
          ) :(
          <button className="bg-green-600 hover:bg-green-700 text-white px-2 lg:px-4 py-1 rounded">
               Add
          </button>
          )
        }
          
          </div>
       
      </div>
    </Link>
  );
};

export default CardProduct;






