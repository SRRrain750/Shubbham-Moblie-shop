import React from 'react'
import UserMenu from './UserMenu'

const Dashboard = () => {
    return (
        <section className='bg-white'>
            <div className='container mx-auto p-3 grid grid-cols-[250px_1fr]'  >


                {/* Left for menu  */}
                <div className='py-4 sticky top-24 overflow-auto-y'>
                    <UserMenu/>
                </div>

                {/* Right for Content */}
                <div className='bg-red-400'>
                     Content display here
                </div>

            </div>
        </section>

    )
}

export default Dashboard
