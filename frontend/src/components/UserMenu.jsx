import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'




const UserMenu = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>

      <div className='font-semibold'>My Account</div>
      <div>{user.name}</div>
    </div>
  )
}

export default UserMenu
