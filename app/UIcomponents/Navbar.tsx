'use client'
import React, { useState } from 'react'
import { SiNike } from 'react-icons/si'

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)

    return (
        <nav className=' z-30 top-0 font-thin text-sm overflow-hidden  bg-neutral-100 w-full  py-1'>
            <div className='flex lg:mx-6  w-full  justify-center lg:justify-between  items-center'>
                <SiNike size={40} />

                <ul className='hidden lg:flex w-full ml-11  text-tiny text-neutral-800 flex-row items-center space-x-2'>
                    <li>Home</li>
                    <li>Browse</li>
                    <li>Contact</li>
                </ul>



            </div>




        </nav>
    )
}

export default Navbar