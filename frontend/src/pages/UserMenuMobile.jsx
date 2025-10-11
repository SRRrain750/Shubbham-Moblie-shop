import React from 'react'
import UserMenu from '../components/UserMenu'
import useMobile from '../hooks/useMobile.jsx';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserMenuMobile = () => {
    return (
        <section className='bg-white h-full w-full py-4'>
            <div className=' container mx-auto p-3'>
                <UserMenu />
            </div>
        </section>
    )
}

export default UserMenuMobile
