// App.jsx
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import fetchUserDetails from './utils/fetchUserDetails.js'
import { setUserDetails } from './store/userSlice.js' // ✅ correct import
import { useDispatch } from 'react-redux'



function App() {
  const dispatch = useDispatch();

  const fetchUser = async () => {
    const userData = await fetchUserDetails();
    dispatch(setUserDetails(userData.data)); // ✅ use the correct action
  };

  useEffect(() => {
    fetchUser();
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
