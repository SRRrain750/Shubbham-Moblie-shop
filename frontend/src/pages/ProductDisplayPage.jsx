import React from 'react'
import { useParams } from 'react-router-dom'
import SummaryApi from '../common/SummaryApi'
import Axios from '../utils/Axios'
import { useState, useEffect ,useRef} from 'react'
import AxiosToastError from '../utils/AxiosToastError'
import { FaAngleLeft,FaAngleRight} from 'react-icons/fa6'
import DisplayPriceInRupees from '../utils/DisplayPriceInRupees'
import Divider from '../components/Divider'
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
    imageContainer.current.scrollLeft += 100
  }
  return (
         <section className='container mx-auto p-4 grid lg:grid-cols-2'>
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
           </div>




           <div className='p-4 lg:pl-7 text-base lg:text-lg'>
            <p className='bg-amber-200 w-fit px-2 rounded-full'>rating</p>
            <h2 className='text-lg font-semibold lg:text-3xl'>{data.name}</h2>
            <p className=''>{data.unit}</p>
            <Divider/>
            <div>
              <p className=''>Price</p>
                      <div className='border border-green-600 px-4 py-2 rounded bg-green-50 w-fit'>
                        <p className='font-semibold text-lg lg:text-xl'>{DisplayPriceInRupees(data.price)}</p>
                      </div>
               </div>

               <button className='my-4 px-4 py-1 bg-green-600 hover:bg-green-700 text-white rounded'> Add </button>

               <Divider/>
            </div>
            </section>

  )
}

export default ProductDisplayPage



