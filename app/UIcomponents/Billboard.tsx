'use client'

import React from 'react';
import Image from 'next/image';
import { SiNike } from 'react-icons/si';
import ProductHeader from '@/public/images/product2.png'

const Billboard = () => {





    return (

        <div className='relative  w-full h-screen transform md:-skew-y-6 overflow-hidden border-b-4  border-t-4 border-white'>

            <div className='grid grid-content-center items-center   md:mx-auto md:grid-cols-2 max-w-1/2 gap-x-4 h-screen'>
                <div className='transform  mb-72 ml-2 md:skew-y-6 md:items-center'>
                    <h1 className='absolute text-3xl md:text-5xl   font-semibold tracking-widest text-neutral-200 drop-shadow-2xl md:left-0 ' >New Arrival</h1>
                    <h2 className='absolute  right-0 anima  text-5xl md:text-9xl md:mt-6 font-extrabold tracking-widest text-pink-200 drop-shadow-2xl md:left-0 md:p-6' >AIR MAX </h2>



                </div>
                <div className='absolute bg-gray-200 animate-dance animation-delay-4000 mt-11 opacity-60  md:mr-28  right-0 mix-blend-multiply  w-5/12 h-72 rounded-full filter blur-2xl '></div>
                <div className='absolute bg-pink-300 animate-dance animation-delay-2000 mt-42 opacity-60 md:mr-28 right-0 mix-blend-multiply   w-96 h-72 rounded-full filter blur-2xl '></div>
                <div className='absolute mx-auto   opacity-70 md:mr-36 md:right-0 mix-blend-multiply '><SiNike className='text-white' size={700} /></div>

                <div className=' absolute  right-0 mr-28 z-0 rounded-xl transform md:skew-y-6 ml-auto'

                >
                    <Image alt='' className='drop-shadow-2xl' src={ProductHeader} width={800} height={800} placeholder='blur' />
                </div>


            </div>
        </div >
    )
}

export default Billboard