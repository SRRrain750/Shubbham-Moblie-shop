// App.jsx
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import fetchUserDetails from './utils/fetchUserDetails.js'
import { setUserDetails } from './store/userSlice.js' // ✅ correct import
import { setAllCategory , setAllSubCategory,setLoadingCategory} from './store/productSlice.js'
import { useDispatch } from 'react-redux'
import Axios from './utils/Axios.js'
import SummaryApi from './common/SummaryApi.js'


function App() {
  const dispatch = useDispatch();

  const fetchUser = async () => {
    const userData = await fetchUserDetails();
    dispatch(setUserDetails(userData.data)); // ✅ use the correct action
  };
   const fetchCategory =async()=>{
              try{
                    dispatch(setLoadingCategory(true))
                    const response =await Axios({
                      ...SummaryApi.getCategory
                    })
                    const { data : responseData } =response

                    if(responseData.success){
                      
                      dispatch(setAllCategory(responseData.data))
                      //setCategoryData(responseData.data) 
                    }
              }catch(error){
  
              }finally{
                dispatch(setLoadingCategory(false))
              }
            }
         

  const fetchSubCategory =async()=>{
               try{
                    //setLoading(true)
                    const response =await Axios({
                      ...SummaryApi.getSubCategory
                    })
                    const { data : responseData } =response

                    if(responseData.success){
                      
                      dispatch(setAllSubCategory(responseData.data))
                      //setCategoryData(responseData.data) 
                    }
              }catch(error){
  
              }finally{
                //setLoading(false)
              }
  }

  
  useEffect(() => {
    fetchUser();
    fetchCategory();
    fetchSubCategory();

  }, []);

  return (
    <>
      <Header />
      <Toaster position="top-center" reverseOrder={false} />
      <main className='min-h-[75vh]'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;










// import { Outlet, useLocation } from 'react-router-dom'
// import './App.css'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import toast, { Toaster } from 'react-hot-toast';
// import { useEffect } from 'react';
// import fetchUserDetails from './utils/fetchUserDetails';
// import { setUserDetails } from './store/userSlice';
// import { setAllCategory,setAllSubCategory,setLoadingCategory } from './store/productSlice';
// import { useDispatch } from 'react-redux';
// import Axios from './utils/Axios';
// import SummaryApi from './common/SummaryApi';
// import { handleAddItemCart } from './store/cartProduct'
// import GlobalProvider from './provider/GlobalProvider';
// import { FaCartShopping } from "react-icons/fa6";
// import CartMobileLink from './components/CartMobile';

// function App() {
//   const dispatch = useDispatch()
//   const location = useLocation()
  

//   const fetchUser = async()=>{
//       const userData = await fetchUserDetails()
//       dispatch(setUserDetails(userData.data))
//   }

//   const fetchCategory = async()=>{
//     try {
//         dispatch(setLoadingCategory(true))
//         const response = await Axios({
//             ...SummaryApi.getCategory
//         })
//         const { data : responseData } = response

//         if(responseData.success){
//            dispatch(setAllCategory(responseData.data.sort((a, b) => a.name.localeCompare(b.name)))) 
//         }
//     } catch (error) {
        
//     }finally{
//       dispatch(setLoadingCategory(false))
//     }
//   }

//   const fetchSubCategory = async()=>{
//     try {
//         const response = await Axios({
//             ...SummaryApi.getSubCategory
//         })
//         const { data : responseData } = response

//         if(responseData.success){
//            dispatch(setAllSubCategory(responseData.data.sort((a, b) => a.name.localeCompare(b.name)))) 
//         }
//     } catch (error) {
        
//     }finally{
//     }
//   }

  

//   useEffect(()=>{
//     fetchUser()
//     fetchCategory()
//     fetchSubCategory()
//     // fetchCartItem()
//   },[])

//   return (
//     <GlobalProvider> 
//       <Header/>
//       <main className='min-h-[78vh]'>
//           <Outlet/>
//       </main>
//       <Footer/>
//       <Toaster/>
//       {
//         location.pathname !== '/checkout' && (
//           <CartMobileLink/>
//         )
//       }
//     </GlobalProvider>
//   )
// }

// export default App