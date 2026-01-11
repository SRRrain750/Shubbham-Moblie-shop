// import React from 'react'
// import banner from '../assets/banner8.jpg'
// import bannerMobile from '../assets/banner-mobile.jpg'
// import { useSelector } from 'react-redux'
// import { valideURLConvert } from '../utils/valideURLConvert'
// import {Link, useNavigate} from 'react-router-dom'
// import CategoryWiseProductDisplay from '../components/CategoryWiseProductDisplay'

// const Home = () => {
//   const loadingCategory = useSelector(state => state.product.loadingCategory)
//   const categoryData = useSelector(state => state.product.allCategory)
//   const subCategoryData = useSelector(state => state.product.allSubCategory)
//   const navigate = useNavigate()

//   const handleRedirectProductListpage = (id,cat)=>{
//       console.log(id,cat)
//       const subcategory = subCategoryData.find(sub =>{
//         const filterData = sub.category.some(c => {
//           return c._id == id
//         })

//         return filterData ? true : null
//       })
//       const url = `/${valideURLConvert(cat)}-${id}/${valideURLConvert(subcategory.name)}-${subcategory._id}`

//       navigate(url)
//       console.log(url)
//   }


//   return (
//    <section className='bg-white'>
//       <div className='container mx-auto'>
//           <div className={`w-full h-full min-h-48 bg-blue-100 rounded ${!banner && "animate-pulse my-2" } `}>
//               <img
//                 src={banner}
//                 className='w-full h-full hidden lg:block'
//                 alt='banner' 
//               />
//               <img
//                 src={bannerMobile}
//                 className='w-full h-full lg:hidden'
//                 alt='banner' 
//               />
//           </div>
//       </div>
      
//       <div className='container mx-auto px-4 my-2 grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10  gap-2'>
//           {
//             loadingCategory ? (
//               new Array(12).fill(null).map((c,index)=>{
//                 return(
//                   <div key={index+"loadingcategory"} className='bg-white rounded p-4 min-h-36 grid gap-2 shadow animate-pulse'>
//                     <div className='bg-blue-100 min-h-24 rounded'></div>
//                     <div className='bg-blue-100 h-8 rounded'></div>
//                   </div>
//                 )
//               })
//             ) : (
//               categoryData.map((cat,index)=>{
//                 return(
//                   <div key={cat._id+"displayCategory"} className='w-full h-full' onClick={()=>handleRedirectProductListpage(cat._id,cat.name)}>
//                     <div>
//                         <img 
//                           src={cat.image}
//                           className='w-full h-full object-scale-down'
//                         />
//                     </div>
//                   </div>
//                 )
//               })
              
//             )
//           }
//       </div>

//       {/***display category product */}
//       {
//         categoryData?.map((c,index)=>{
//           return(
//             <CategoryWiseProductDisplay 
//               key={c?._id+"CategorywiseProduct"} 
//               id={c?._id} 
//               name={c?.name}
//             />
//           )
//         })
//       }
//    </section>
//   )
// }

// export default Home


import React, { useEffect, useState } from 'react'

import bannerStatic from '../assets/Shubh.png'
import banner1 from '../assets/Abanner1.jpeg'
import banner2 from '../assets/Abanner2.jpeg'
import banner3 from '../assets/Abanner3.jpeg'
import banner6 from '../assets/Abanner6.jpeg'
import banner7 from '../assets/Abanner7.jpeg'
import banner8 from '../assets/Abanner8.jpeg'
import banner9 from '../assets/Abanner9.jpeg'

import { useSelector } from 'react-redux'
import { validURLConvert } from '../utils/validURLConvert'
import { useNavigate } from 'react-router-dom'
import CategoryWiseProductDisplay from '../components/CategoryWiseProductDisplay'

const Home = () => {
  const loadingCategory = useSelector(state => state.product.loadingCategory)
  const categoryData = useSelector(state => state.product.allCategory)
  const subCategoryData = useSelector(state => state.product.allSubCategory)

  const navigate = useNavigate()

  /* ================= Dynamic Banner Slider ================= */
  const dynamicBanners = [
    banner1,
    banner2,
    banner3,
    banner6,
    banner7,
    banner8,
    banner9
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % dynamicBanners.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [dynamicBanners.length])

  /* ================= Category Redirect ================= */
  const handleRedirectProductListPage = (id, cat) => {
    const subcategory = subCategoryData.find(sub =>
      sub.category.some(c => c._id === id)
    )

    const url = `/${validURLConvert(cat)}-${id}/${validURLConvert(
      subcategory?.name
    )}-${subcategory?._id}`

    navigate(url)
  }

  return (
    <section className='bg-white'>

      {/* ================= Static Banner ================= */}
      <div className='container mx-auto mt-3'>
        <div className="w-full h-[100px] sm:h-[250px] md:h-[300px] lg:h-[300px] bg-blue-100 overflow-hidden ">
          <img
            src={bannerStatic}
            className='w-full h-full object-cover'
            alt='static-banner'
          />
        </div>
      </div>

      {/* ================= Dynamic Banner Slider ================= */}
      <div className='container mx-auto mt-4'>
        <div className={`w-full min-h relative ${!dynamicBanners && "animate-pulse my-2"}`}>

          {/* Slider Image (VISIBLE ON ALL SCREENS) */}
          <img
            src={dynamicBanners[currentIndex]}
            className='w-full h-full object-cover  transition-all duration-700'
            alt='dynamic-banner'
          />

          {/* Dots Indicator */}
          <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2'>
            {dynamicBanners.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                  currentIndex === index ? 'bg-white' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ================= Categories ================= */}
      <div className='container mx-auto px-4 py-2 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-2 mt-4'>
        {loadingCategory ? (
          new Array(12).fill(null).map((_, index) => (
            <div
              key={index}
              className='bg-white rounded p-4 min-h-36 grid gap-2 shadow animate-pulse'
            >
              <div className='bg-blue-400 min-h-24 rounded'></div>
              <div className='bg-blue-400 h-8 rounded'></div>
            </div>
          ))
        ) : (
          categoryData.map(cat => (
            <div
              key={cat._id}
              className='cursor-pointer'
              onClick={() => handleRedirectProductListPage(cat._id, cat.name)}
            >
              <div className='h-38 w-full  rounded overflow-hidden flex items-center justify-center'>
                <img
                  src={cat.image}
                  className='h-full w-full object-contain'
                  alt={cat.name}
                />
              </div>
              <p className='text-center text-sm font-medium mt-1'>
                {cat.name}
              </p>
            </div>
          ))
        )}
      </div>

      {/* ================= Category Wise Products ================= */}
      {categoryData?.map(c => (
        <CategoryWiseProductDisplay
          key={c._id}
          id={c._id}
          name={c.name}
        />
      ))}

    </section>
  )
}

export default Home
