import React from 'react'
import Image from 'next/image'
import StyleOne from '@/public/images/niketrainer-unsplash.jpg'
import StyleTwo from '@/public/images/flexnike-unsplash.jpg';
import ProductCard from '@/app/UIcomponents/ProductCard';
import { SiNike } from 'react-icons/si'
import ScanCard from '@/public/images/scannerPiccard.png'

const Contents = () => {


    return (
        <div className='bg-white mt-6  '>
            <span className=' flex justify-center text-left font-extrabold tracking-wider md:text-center text-7xl mt-11   p-5  '>FIND YOUR PERFECT RUNNING SHOE</span>

            <div className='flex bg-white flex-col mt-11 md:grid md:grid-cols-2 md:grid-rows-2  md:gap-2 md:items-center'>
                <div data-aos="fade-right" className='drop-shadow-2xl text-2xl space-y-10 border-black border md:border-none  ml-11 md:text-7xl font-semibold p-3'>DESCOVER THE EVOLUTION OF SPORTS</div>
                <div className=' p-3'>
                    <Image alt='' loading='lazy' className='shadow-lg rounded-xl' src={StyleOne} width={650} height={500} placeholder='blur' />
                </div>
                <div className='md:ml-6 p-3'>
                    <Image alt='' loading='lazy' className='shadow-lg rounded-xl' src={StyleTwo} width={650} height={500} placeholder='blur' />
                </div>
                <div className='mb-11 md:mb-0 drop-shadow-2xl text-2xl p-6 border-black border md:border-none ml-11 md:text-7xl font-semibold md:p-3'>SHOW OFF WITH STYLE</div>

            </div>
            <div data-aos="fade-down" className='flex flex-col md:mt-44 mr-2 ml-2 rounded-xl text-white bg-black  items-strech justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10 '>
                <div>
                    <div className='md:w-1/2 '>
                        <h1 data-aos="fade-right" data-aos-delay='1000' className='cursor-default mt-24 text-left ml-11  leading-normal text-2xl md:text-7xl font-semibold'>
                            Match  Your Style
                        </h1>
                    </div>
                </div>

                <div className='md:w-1/2 md:px-11   '>
                    <h1 className='text-center   text-2xl w-full pt-6 font-bold mb-6 md:text-left md:pt-3 md:space-x-20 border-pink-300 border-b md:w-1/2'>TRENDING</h1>
                    <div>
                        <ProductCard />
                    </div>
                </div>

            </div>
            <div data-aos="fade-down" className='hidden relative md:flex flex-col p-4 mr-28 ml-28 mb-48 md:mt-48 rounded-xl text-black bg-gray-50 drop-shadow-2xl   items-strech justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10 '>
                <div className='md:w-1/2 flex justify-center items-center '>
                    <div data-aos="fade-down" data-aos-delay='1000' >
                        <Image alt='cardsc' className=' left-0 drop-shadow-md ' src={ScanCard} width={200} height={200} quality={100} placeholder='blur' />
                    </div>
                </div>

                <div className=' md:w-1/2 md:px-11 md:items-center  md:border-l-4 md:border-black    '>

                    <h1 className='text-7xl drop-shadow-md  font-extrabold italic tracking-wider leading-relaxed mb-11  mt-11 '>DOWNLOAD OUR APP </h1>
                    <span ><SiNike size={100} className='absolute   bottom-0 right-0 pt-3 mr-3 drop-shadow-md' /></span>
                </div>

            </div>

        </div>
    )
}

export default Contents