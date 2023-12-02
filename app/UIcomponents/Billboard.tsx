'use client'

import React from 'react';
import Image from 'next/image';
import { SiNike } from 'react-icons/si';
import ProductHeader from '@/public/images/product2.png';
import NikeBill from '@/public/images/BillboardNike.png'

const Billboard = () => {





    return (

        <div className='relative bg-neutral-100 flex justify-center items-center  w-full min-h-screen   '>

            <h1 className='absolute top-9 text-8xl mt-6 text-neutral-800 font-bold tracking-wider text-center'>NIKE TRAINER</h1>
            <span className='flex w-full overflow-hidden justify-center min-h-screen items-center relative '>

                <div className='absolute  top-10 mt-20 mx-auto z-10 bg-neutral-800/40 animate-dance animation-delay-4000   mix-blend-multiply  w-[30%] h-[30%] rounded-full filter blur-2xl '></div>
                <div className='absolute top-10 mt-20  mx-auto z-10 bg-green-950/50 animate-dance animation-delay-2000   mix-blend-multiply w-[80%] h-[80%] rounded-full filter blur-2xl '></div>

            </span>

            <Image data-aos="fade-down" className='absolute drop-shadow-2xl  -top-52  w-full z-20' src={NikeBill} height={150} width={150} placeholder='blur' alt='' />



        </div >
    )
}

export default Billboard