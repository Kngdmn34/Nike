import Image from 'next/image';
import Billboard from './UIcomponents/Billboard';
import Navbar from './UIcomponents/Navbar';
import BillboardInfo from '@/app/components/billboardInfo'
import Contents from './components/contents';
import { Product } from '@/app/components/billboardInfo';
import { productsBillboard } from '@/app/UIcomponents/Billboard'




export default function Home() {


  return (
    <main className="bg-black">

      <div className=''>
        <Navbar />
        <Billboard productsBillboard={productsBillboard} />
        <Contents />

      </div>
    </main>
  )
}
