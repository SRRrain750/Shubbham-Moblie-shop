import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header.jsx'  
import Footer from './components/Footer.jsx'
import React from 'react'
import { Toaster } from 'react-hot-toast' // ✅ import Toaster

function App() {
  return (
    <>
      <Header />

      {/* ✅ Toaster for toast popups */}
      <Toaster position="top-center" reverseOrder={false} />

      <main className='min-h-[75vh]'>
        <Outlet />
      </main>

      <Footer/>
    </>
  )
}

export default App
