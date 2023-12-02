import Image from 'next/image';
import Billboard from './UIcomponents/Billboard';
import Navbar from './UIcomponents/Navbar';

import Contents from './components/contents';






export default function Home() {


  return (
    <main className="">

      <div className=''>
        <Navbar />
        <Billboard />
        <Contents />

      </div>
    </main>
  )
}
