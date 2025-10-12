import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Divider from './Divider'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import { logout } from '../store/userSlice'
import toast from 'react-hot-toast'
import AxiosToastError from '../utils/AxiosToastError'
import { TbExternalLink } from "react-icons/tb";


const UserMenu = ({ close }) => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()   // ✅ Add this line

  const handleLogout = async () => {
    try {
      const response = await Axios({
        ...SummaryApi.logout,
        withCredentials: true, // optional if using cookies/sessions
      })
      console.log("logout", response)

      if (response.data.success) {

        if (close) {
          close(); // Close the menu
        }
        dispatch(logout())
        localStorage.clear()
        toast.success(response.data.message)
        // window.history.back();
        navigate("/")   // ✅ Redirect to home or login page
      }
    } catch (error) {
      console.log(error)
      AxiosToastError(error)
    }
  }

  return (
    <div>
      <div className='font-semibold'>My Account</div>
      <div className='text-sm flex items-center gap-2' >
        <span className='max-w-52 text-ellipsis line-clamp-1'>{user.name || user.mobile}</span>
        <Link to={"/dashboard/profile"} className='hover:text-yellow-600'><TbExternalLink size={15} /></Link> 
      </div>

      <Divider />
      <div className='text-sm grid gap-2'>
        <Link to={'/dashboard/myorders'} className='px-2 hover:bg-orange-200'>My Order</Link>
        <Link to={'/dashboard/address'} className='px-2 hover:bg-orange-200'>My Address</Link>
        <button
          onClick={handleLogout}
          className='text-left px-2 hover:bg-orange-200 py-1'
        >
          Log Out
        </button>
      </div>
    </div>
  )
}

export default UserMenu
