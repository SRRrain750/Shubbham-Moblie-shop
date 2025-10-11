import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Divider from './Divider'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import { logout } from '../store/userSlice'
import toast from 'react-hot-toast'
import AxiosToastError from '../utils/AxiosToastError'

const UserMenu = () => {
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
        // ❌ REMOVE these lines (they cause the red error toast)
        // if (close) {
        //   close()
        // }

        dispatch(logout())
        localStorage.clear()
        toast.success(response.data.message)
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
      <div className='text-sm'>{user.name || user.mobile}</div>
      <Divider />
      <div className='text-sm grid gap-2'>
        <Link to={''} className='px-2'>My Order</Link>
        <Link to={''} className='px-2'>My Address</Link>
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
