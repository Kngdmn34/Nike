'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image'
import BillboardInfo from '../components/billboardInfo';
import { useState } from 'react';
import { useSpring, motion, AnimatePresence } from 'framer-motion';

interface Product {
    id: number,
    productsImage: string,
    productName: string
}

interface BillboardProps {
    productsBillboard: Product[]
}

export const productsBillboard: Product[] = [
    {
        id: 1,
        productsImage: `/images/offwhite.png`,
        productName: 'NIKE OFFWHITE'
    },
    {
        id: 2,
        productsImage: './images/airmax.png',
        productName: 'AIR MAX'
    },
    {
        id: 3,
        productsImage: './images/airforcee.png',
        productName: 'AIR FORCE'

    }



]

const imageCount: number = productsBillboard.length;
const autoSlideInterval: number = 5000

const Billboard: React.FC<BillboardProps> = () => {

    const ref = useRef(null)
    const [currentImage, setCurrentImage] = useState<number>(0)
    const [arrivalText, setArrivalText] = useState<Product>(productsBillboard[0])
    const imageSpring = useSpring(0)

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % imageCount);
    };

    useEffect(() => {
        imageSpring.set(currentImage);
    }, [imageSpring, currentImage])

    useEffect(() => {
        setArrivalText(productsBillboard[currentImage])
    }, [currentImage]);

    useEffect(() => {
        const intervalid = setInterval(() => {
            nextImage()
        }, autoSlideInterval)

        return () => { clearInterval(intervalid) }
    }, [currentImage])




    return (

        <div className='relative  bg-gray-200 w-full h-screen transform -skew-y-6 overflow-hidden border-b-4  border-t-4 border-white'>

            <div className=' grid grid-content-center items-center   mx-auto grid-cols-2 max-w-1/2 gap-x-4 h-screen'>
                <div className=' transform mb-72 ml-2 skew-y-6 items-center  '>
                    <h1 className='absolute text-6xl text-neutral-500 drop-shadow-2xl left-0 p-6' >New Arrival</h1>
                    <BillboardInfo productsBillboard={productsBillboard} currentIndex={currentImage} />


                </div>
                <div className='absolute bg-pink-900 animate-dance animation-delay-4000 mt-11 opacity-60  mr-28  right-0 mix-blend-multiply  w-5/12 h-72 rounded-full filter blur-2xl '></div>
                <div className='absolute bg-pink-300 animate-dance animation-delay-2000 mt-42 opacity-60 mr-28 right-0 mix-blend-multiply   w-96 h-72 rounded-full filter blur-2xl '></div>

                <motion.div className=' absolute  inset-0 z-0 rounded-xl transform skew-y-6 ml-auto'
                    style={{
                        backgroundImage: `url(${productsBillboard[currentImage].productsImage})`,
                        backgroundPosition: 'right',
                        backgroundSize: '50%',
                        backgroundRepeat: 'no-repeat'
                    }}
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}

                    transition={{ duration: 0.5 }}
                >

                </motion.div>


            </div>
        </div >
    )
}

export default Billboard