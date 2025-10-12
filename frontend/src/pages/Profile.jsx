import React from 'react'
import { useSelector } from 'react-redux';
import { FaRegUserCircle } from "react-icons/fa";

const Profile = () => {
  const user = useSelector(state => state.user)
  console.log(user);
  return (
    <div>
      <div className='w-16 h-16  bg-red-500 flex items-center justify-center'>
        {
          user.avatar ? (
            <img src={user.avatar}
              alt={user.avatar}
              className='w-full h-full'
            />
          ) : (

            <FaRegUserCircle size={60} />
          )
        }
      </div>
    </div>
  )
}

export default Profile
