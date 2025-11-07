'use client'
//this is my-app/app/components/Page2.jsx
import React from 'react'
import Image from 'next/image'
import { skills } from '@/public/Assets/assets'
import { assets } from '@/public/Assets/assets'
import { div } from 'three/src/nodes/TSL.js'

const Page2 = () => {
  return (
    <div className='bg-black'>
      <div className='absolute top-195 z-40'>
        <Image src={assets.blur} alt=''/>
      </div>
      <div className="relative top-3 left-0 w-full overflow-hidden py-6 z-20 bg-black -rotate-3 ">
              {/* My Skills */}
              <div className="flex space-x-16 animate-loop-scroll bg-black">
                {Object.entries(skills).map(([key, src]) => (
                  <Image
                    key={key}
                    src={src}
                    alt={key}
                    className="max-w-none h-16 w-auto object-contain"
                    loading="lazy"
                  />
                ))}
              </div>
              {/* Bento box */}
              <div>
                  <div className=' flex space-x-16 overflow-hidden '>
                      <div className='rounded-2xl w-100 h-50 bg-white mx-2 my-2'></div>
                      <div className='rounded-2xl w-100 h-50 bg-white mx-2 my-2'></div>
                      <div className='rounded-2xl w-100 h-50 bg-white mx-2 my-2'></div>
                      <div className='rounded-2xl w-100 h-50 bg-white mx-2 my-2'></div>
                      <div className='rounded-2xl w-100 h-50 bg-white mx-2 my-2'></div>
                      
                  </div>
                  <div className=' flex space-x-16 overflow-hidden '>
                      <div className='rounded-2xl w-100 h-50 bg-white mx-2 my-2'></div>
                      <div className='rounded-2xl w-100 h-50 bg-white mx-2 my-2'></div>
                      <div className='rounded-2xl w-100 h-50 bg-white mx-2 my-2'></div>
                      <div className='rounded-2xl w-100 h-50 bg-white mx-2 my-2'></div>
                      
                  </div>
              </div>
      
      </div>
    </div>
  )
}

export default Page2
