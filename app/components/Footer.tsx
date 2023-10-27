import React from 'react';
import { SiNike } from 'react-icons/si'

const Footer = () => {
    return (

        <footer className="bg-gray-200   rounded-lg shadow-md m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://nike.com/" className="hover:underline">Nike™</a>. All Rights Reserved.
                </span>
                <ul className="flex  flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li className='hidden lg:flex'>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li className='hidden lg:flex'>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li className='hidden lg:flex'>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li className='hidden lg:flex'>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
                    </li>
                    <li className='flex '>
                        <SiNike className='drop-shadow-sm' size={20} />
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer