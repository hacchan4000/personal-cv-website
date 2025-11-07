'use client'
import React from 'react'
import Image from 'next/image'
import { assets } from '@/public/Assets/assets'

const Transition = () => {
  return (
    <div className="absolute w-full h-screen overflow-hidden">
      {/* Blurred background image */}
      <Image
        src={assets.blur}
        alt="blur transition"
        fill
        className="object-cover blur-2xl opacity-70"
        priority
      />

      {/* Optional overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>
    </div>
  )
}

export default Transition
