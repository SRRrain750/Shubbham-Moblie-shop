import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header.jsx'  
import Footer from './components/Footer.jsx'
import React from 'react'
import { Toaster } from 'react-hot-toast' // ✅ import Toaster

function App() {
  return(
    <main className='text'>
      Mobile-Shop-App
    </main>
      <Footer/>
    </>
  )
}

export default App
