'use client'
import React, { useState } from 'react'
import { SiNike } from 'react-icons/si'

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)

    return (
        <div className={`absolute bg-blend-color-dodge   sm:flex justify-center md:left-0 md:ml-11  `} >
            <SiNike size={70} className='fixed z-30 xl:sticky  text-black bg-white     md:text-white md:bg-inherit md:border-none border border-black   w-full  drop-shadow-2xl p-2 ' />
        </div>
    )
}

export default Navbar