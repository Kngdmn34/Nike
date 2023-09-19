import React, { useEffect } from 'react'


export interface Product {
    id: number;
    productsImage: string;
    productName: string;
}
interface BillboardInfoProps {
    productsBillboard: Product[],
    currentIndex: number
}

const BillboardInfo: React.FC<BillboardInfoProps> = ({ productsBillboard, currentIndex }) => {

    const product = productsBillboard[currentIndex];

    return (
        <div className='relative ml-24 mt-24 items-center  p-6'>


            <span className='absolute font-extrabold text-7xl text-pink-500'>{product.productName}</span>

        </div>
    )
}

export default BillboardInfo