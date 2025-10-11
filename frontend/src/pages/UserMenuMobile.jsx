import React from 'react'
import UserMenu from '../components/UserMenu'
import useMobile from '../hooks/useMobile.jsx';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoClose } from "react-icons/io5";

const UserMenuMobile = () => {
    return (
        <section className='bg-white h-full w-full py-2'>

            <button onClick={()=>window.history.back()} className='text-neutral-800 block w-fit ml-auto'>
                <IoClose size={25} />
            </button>

            <div className=' container mx-auto px-3 pb-5'>
                <UserMenu />
            </div>
        </section>
    )
}

export default UserMenuMobile
