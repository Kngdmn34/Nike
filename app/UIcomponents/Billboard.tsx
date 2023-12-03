'use client'

import React from 'react';
import Image from 'next/image';
import { SiNike } from 'react-icons/si';
import ProductHeader from '@/public/images/product2.png';
import NikeBill from '@/public/images/BillboardNike.png'

const Billboard = () => {





    return (

        <div className='relative bg-neutral-100 flex justify-center items-center  h-80    w-full lg:min-h-screen   '>

            <h1 className='absolute top-9 text-4xl lg:text-8xl mt-6 text-neutral-600 font-bold tracking-wider text-center'>NIKE TRAINER</h1>
            <h2 className='absolute w-full text-neutral-500 font-semibold text-xl lg:mb-36 lg:text-3xl justify-center flex'>In Sale Now</h2>
            <span className='flex w-full overflow-hidden justify-center min-h-screen items-center relative '>

                <div className='absolute  top-10 mt-20 mx-auto z-10 bg-neutral-800/40 animate-dance animation-delay-4000   mix-blend-multiply w-[40%] h-[40%]  lg:w-[30%] lg:h-[30%] rounded-full filter blur-2xl '></div>
                <div className='absolute top-10 mt-20  mx-auto z-10 bg-green-950/50 animate-dance animation-delay-2000   mix-blend-multiply w-[45%] h-[45%] lg:w-[80%] lg:h-[80%] rounded-full filter blur-2xl '></div>

            </span>

            <img className='absolute flex  top-20  lg:-top-52 w-full   z-10' src={'/images/BillboardNike.png'} height={200} width={200} alt='' />



        </div >
    )
}

export default Billboard