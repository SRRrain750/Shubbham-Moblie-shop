import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header.jsx'  
import Footer from './components/Footer.jsx'


function App() {
<<<<<<< HEAD
  return(
    <main className='text'>
      Mobile-Shop-App
    </main>
=======
  return (
    <>
      <Header />
      <main className='min-h-[75vh]'>
        <Outlet />
      </main>
     <Footer/>
    </>

>>>>>>> 55c85ecc102d97735a522f38fc1ce04188ad2b51
  )
}
export default App