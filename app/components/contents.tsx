import React from 'react'
import Image from 'next/image'
import StyleOne from '@/public/images/niketrainer-unsplash.jpg'
import StyleTwo from '@/public/images/flexnike-unsplash.jpg';
import ProductCard from '@/app/UIcomponents/ProductCard';
import { SiNike } from 'react-icons/si'
import ScanCard from '@/public/images/scannerPiccard.png'



const Contents = () => {


    return (
        <div className='bg-white mt-6 '>
            <span className=' flex justify-center text-left font-extrabold tracking-wider md:text-center text-7xl mt-11   p-5  '>FIND YOUR PERFECT RUNNING SHOE</span>

            <div className='flex bg-white flex-col mt-11 md:grid md:grid-cols-2 md:grid-rows-2  md:gap-2 md:items-center'>
                <div data-aos="fade-right" className='drop-shadow-2xl text-2xl space-y-10 border-black border md:border-none  ml-11 md:text-7xl font-semibold p-3'>DESCOVER THE EVOLUTION OF SPORTS</div>
                <div className=' p-3'>
                    <Image alt='' loading='lazy' className='shadow-lg ml-24 rounded-xl' src={StyleOne} width={350} height={350} placeholder='blur' />
                </div>
                <div className='md:ml-6 p-3'>
                    <Image alt='' loading='lazy' className='shadow-lg ml-24 rounded-xl' src={StyleTwo} width={350} height={350} placeholder='blur' />
                </div>
                <div className='mb-11 md:mb-0 drop-shadow-2xl text-2xl p-6 border-black border md:border-none ml-11 md:text-7xl font-semibold md:p-3'>SHOW OFF WITH STYLE</div>

            </div>
            <ProductCard />
            <div data-aos="fade-down" className='hidden relative md:flex flex-col p-4 mr-28 ml-28 mb-48 md:mt-48 rounded-xl text-black bg-gray-50 drop-shadow-2xl   items-strech justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10 '>
                <div className='md:w-1/2 flex justify-center items-center '>
                    <div data-aos="fade-down" data-aos-delay='1000' >
                        <Image alt='cardsc' className=' left-0 drop-shadow-md ' src={ScanCard} width={200} height={200} quality={100} placeholder='blur' />
                    </div>
                </div>

                <div className=' md:w-1/2 md:px-11 md:items-center  md:border-l-4 md:border-black    '>

                    <h1 className='text-5xl drop-shadow-md  font-extrabold italic tracking-wider leading-relaxed mb-11  mt-11 '>DOWNLOAD OUR APP </h1>
                    <span ><SiNike size={100} className='absolute   bottom-0 right-0 pt-3 mr-3 drop-shadow-md' /></span>
                </div>

            </div>

        </div>
    )
}

export default Contents