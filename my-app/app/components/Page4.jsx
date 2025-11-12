//page untuk experienceku
import React from 'react'
import Image from 'next/image'
import { assets, exp } from '@/public/Assets/assets'


const Page4 = () => {
  return (
    <div id='experience' className='relative w-full h-450 bg-white text-black flex flex-col items-center justify-start overflow-hidden rounded-4xl'>
      

      <h1
        className="
          mt-10 mb-0 
          text-center font-extrabold 
          text-[clamp(3rem,10vw,10rem)] 
          tracking-tight
        "
      >
        EXPERIENCE
      </h1>
      <div>

        <div className='card'>
          <div>
            <h1 className='text-[110px]'>01</h1>
          </div>
          <div>
            <h1 className='text-[50px] mx-10'>GAME DEVELOPMENT</h1>
            <p className='pl-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Fugiat alias ad rerum adipisci, iusto hic ipsa excepturi, 
              repudiandae earum dolore ipsam. Quia sapiente deserunt 
              reiciendis, aperiam earum nulla nobis rem perferendis 
              esse beatae quo dolore, pariatur enim? Expedita, 
              nulla distinctio?
            </p>
          </div>
        </div>

        <div className='card'>
          <div>
            <h1 className='text-[110px]'>02</h1>
          </div>
          <div>
            <h1 className='text-[50px] mx-10'>WEB DEVELOPMENT</h1>
            <p className='pl-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Fugiat alias ad rerum adipisci, iusto hic ipsa excepturi, 
              repudiandae earum dolore ipsam. Quia sapiente deserunt 
              reiciendis, aperiam earum nulla nobis rem perferendis 
              esse beatae quo dolore, pariatur enim? Expedita, 
              nulla distinctio?
            </p>
          </div>
        </div>
        <div className='card'>
          <div>
            <h1 className='text-[110px]'>03</h1>
          </div>
          <div>
            <h1 className='text-[50px] mx-10'>DATA SCIENCE</h1>
            <p className='pl-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Fugiat alias ad rerum adipisci, iusto hic ipsa excepturi, 
              repudiandae earum dolore ipsam. Quia sapiente deserunt 
              reiciendis, aperiam earum nulla nobis rem perferendis 
              esse beatae quo dolore, pariatur enim? Expedita, 
              nulla distinctio?
            </p>
          </div>
        </div>

        <Image src={assets.design} alt='design' className='absolute w-100 right-0 bottom-110 z-0'/>
        <div className='card'>
          
          
          <div>
            <h1 className='text-[110px]'>04</h1>
          </div>
          <div>
            <h1 className='text-[50px] mx-10'>GRAPHIC DESIGN</h1>
            <p className='pl-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Fugiat alias ad rerum adipisci, iusto hic ipsa excepturi, 
              repudiandae earum dolore ipsam. Quia sapiente deserunt 
              reiciendis, aperiam earum nulla nobis rem perferendis 
              esse beatae quo dolore, pariatur enim? Expedita, 
              nulla distinctio?
            </p>
          </div>
          
        </div>
        <Image src={assets.ad2} alt='design' className='absolute w-90 '/>
        <div className='card'>
          <div>
            <h1 className='text-[110px]'>05</h1>
          </div>
          <div>
            <h1 className='text-[50px] mx-10'>3D ANIMATION</h1>
            <p className='pl-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Fugiat alias ad rerum adipisci, iusto hic ipsa excepturi, 
              repudiandae earum dolore ipsam. Quia sapiente deserunt 
              reiciendis, aperiam earum nulla nobis rem perferendis 
              esse beatae quo dolore, pariatur enim? Expedita, 
              nulla distinctio?
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Page4
