import React from 'react'
import { useParams } from 'react-router-dom'
import SummaryApi from '../common/SummaryApi'
import Axios from '../utils/Axios'
import { useState, useEffect ,useRef} from 'react'
import AxiosToastError from '../utils/AxiosToastError'
import { FaAngleLeft,FaAngleRight} from 'react-icons/fa6'
import DisplayPriceInRupees from '../utils/DisplayPriceInRupees'
import Divider from '../components/Divider'
import image1 from '../assets/sfo.png'
import image2 from '../assets/bpo.png'
import image3 from '../assets/wao.png'
import { priceWithDiscount } from '../utils/PriceWithDiscount'
import StarRating from '../components/StarRating'
import AddToCartButton from '../components/AddToCartButton'

const ProductDisplayPage = () => {
  const params = useParams()
  let productId = params?.product?.split("-")?.slice(-1)[0]
  const [data, setData] =useState({
    name : "",
    image : []
  })

  const [image,setImage] =useState(0)
  const [loading ,setLoading] = useState(false)
  const imageContainer =useRef()

  const fetchProductDetails =async()=>{
    try{
      setLoading(true)
      const response = await Axios({
        ...SummaryApi.getProductDetails,
        data : {
          productId : productId
        }
      })
       const { data : responseData } = response
      if(responseData.success){
        setData(responseData.data)
        
      }
    }catch(error){
      AxiosToastError(error)
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    fetchProductDetails()
  },[params])
  console.log(data)
  
  const handleScrollRight =()=>{
    imageContainer.current.scrollLeft += 100
  }

    const handleScrollLeft =()=>{
    imageContainer.current.scrollRight -= 100
  }
  console.log("product data ",data)
  return (
         <section className='container mx-auto p-4 pb-24 lg:pb-4 grid lg:grid-cols-2'>
           <div className=''>
               <div className='bg-white lg:min-h-[65vh] lg:max-h-[65vh] rounded min-h-56 max-h-56 h-full w-full'>
                    <img
                       src={data.image[image]}
                       className='w-full h-full object-contain'
                    />
               </div>
               <div className='flex items-center justify-center gap-3 my-2'>
                {
                  data.image.map((img,index)=>{
                       return(
                        <div key={img+index+"point"} className={`bg-slate-200 w-3 h-3 lg:w-5 lg:h-5 rounded-full ${index === image && "bg-slate-400"}`}></div>
                       )
                  })
                }
               </div>
               <div className='grid relative'>
                  <div ref={imageContainer} className='flex gap-6 z-10 relative w-full overflow-x-auto scrollbar-none '>
                      {
                          data.image.map((img,index)=>{
                            return(
                              <div  className='h-20 w-20 min-h-20 min-w-20 shadow cursor-pointer' key={img+index}> 
                                <img
                                  src={img}
                                  alt='min-product'
                                  onClick={()=>setImage(index)}
                                  className='w-full h-full object-contain'
                                />
                              </div>
                              )
                          })
                      }
                  </div>
                  <div className='w-full -ml-3 h-full hidden lg:flex justify-between absolute'>
                    <button onClick={handleScrollLeft} className='z-10 bg-white relative p-1 rounded-full shadow'>
                      <FaAngleLeft/>
                    </button>
                     <button onClick={handleScrollRight} className='z-10 bg-white relative p-1 rounded-full shadow'>
                      <FaAngleRight/>
                    </button>
                  </div>
               </div>
               <div>
               </div>
               <div className='my-4 hidden lg:grid gap-3 '>
               <div>
                 <p className='font-semibold'>Description</p>
                <p className='text-base'>{data.description}</p>
               </div>
                 <div>
                 <p className='font-semibold'>Unit</p>
                <p className='text-base'>{data.unit}</p>
               </div>
               {
                data?.more_details && Object.keys(data?.more_details).map((element,index)=>{
                  return(
                     <div>
                            <p className='font-semibold'>{element}</p>
                            <p className='text-base'>{data?.more_details[element]}</p>
                     </div>
                  )
                })
               }
               </div>
           </div>
           <div className='p-4 lg:pl-7 text-base lg:text-lg'>
               <div className="bg-amber-200 w-fit px-2 rounded-full inline-block">
                       <StarRating initialRating={data.rating} />
                </div>

            <h2 className='text-lg font-semibold lg:text-3xl'>{data.name}</h2>
            <p className=''>{data.unit}</p>
            <Divider/>
            <div>
              <p className=''>Price</p>
                     <div className='flex  items-center gap-2 lg:gap-4'>
                       <div className='border border-green-600 px-4 py-2 rounded bg-green-50 w-fit'>
                        <p className='font-semibold text-lg lg:text-xl'>{DisplayPriceInRupees(priceWithDiscount(data.price,data.discount))}</p>
                      </div>
                      {
                        data.discount && (
                          <p className='line-through'>{DisplayPriceInRupees(data.price)}</p>
                        )
                      }
                      {
                        data.discount && (
                          <p className='font-bold text-green-600 lg:text-2xl'>{data.discount}%<span className='text-base text-neutral-500'>Discount</span></p>
                        )
                      }
                     </div>
               </div>
               {
                data.stock === 0 ? (
                  <p className='text-lg text-red-500 my-2'>Out Of Stock</p>
                )
                :(
                  
              //  <button className='my-4 px-4 py-1 bg-green-600 hover:bg-green-700 text-white rounded'> Add </button>
                 <div className='my-4'>
                  <AddToCartButton data={data}/>
                 </div>
                )
               }

               <h2 className='font-semibold'>Why Shop From Shubham-Mobile-Shop?</h2>
               <div>
                        <div className='flex items-center gap-4 my-4'>
                          <img
                          src={image1}
                          alt='superfast Order'
                          className='w-20 h-20'
                          />
                        <div className='text-sm'>
                          <div className='font-semibold'>SuperFast Order</div>
                          <p>Place your order online and pick it up directly from our shop.</p>
                        </div>
                        </div>
                        <div className='flex items-center gap-4 my-4'>
                          <img
                          src={image2}
                          alt='Best prices offers'
                          className='w-20 h-20'
                          />
                        <div className='text-sm'>
                          <div className='font-semibold'>Best Prices & Offers</div>
                          <p>Enjoy the best prices with offers directly from manufacturers.</p>
                        </div>
                        </div>
                         <div className='flex items-center gap-4 my-4'>
                          <img
                          src={image3}
                          alt='Wide Assortment'
                          className='w-20 h-20'
                          />
                        <div className='text-sm'>
                          <div className='font-semibold'>Wide Assortment</div>
                          <p>Explore a wide assortment of mobile accessories, chargers, earphones, cases, and more.</p>
                        </div>
                        </div>
               </div>

               {/** only mobile for Display */}

                 <div className='my-4 grid gap-3 '>
               <div>
                 <p className='font-semibold'>Description</p>
                <p className='text-base'>{data.description}</p>
               </div>
                 <div>
                 <p className='font-semibold'>Unit</p>
                <p className='text-base'>{data.unit}</p>
               </div>
               {
                data?.more_details && Object.keys(data?.more_details).map((element,index)=>{
                  return(
                     <div>
                            <p className='font-semibold'>{element}</p>
                            <p className='text-base'>{data?.more_details[element]}</p>
                     </div>
                  )
                })
               }
               </div>
            </div>
            </section>

  )
}

export default ProductDisplayPage



