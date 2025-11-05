'use client'

import React from 'react'
import Image from 'next/image'
import { assets } from '@/public/Assets/assets'

const Page1 = () => {
  return (
    <div className="relative w-full h-screen flex justify-center  overflow-hidden">
      {/* Big text */}
      <h1 className="text-white text-[300px] font-bold ">
        HI, I'M ADITYA
      </h1>

      {/* Image below but visible in front */}
      <div className="absolute bottom-0 z-20 translate-y-175">
        <Image
          src={assets.ad1}
          alt="Aditya"
          className="w-[400px] md:w-[650px] mx-auto"
        />
      </div>
      

    </div>
  )
}

export default Page1
