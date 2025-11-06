'use client'

import React from 'react'
import Image from 'next/image'
import { assets } from '@/public/Assets/assets'

const Page1 = () => {
  return (
    <div className="relative w-full h-screen overflow-scroll bg-black text-white flex items-center justify-center">
      
      {/* 🧱 Background Text */}
      <h1
        className="
          absolute top-20 font-bold text-center leading-none w-full
          text-[100px] sm:text-[120px] md:text-[145px] lg:text-[185px] xl:text-[240px] 2xl:text-[290px]
        "
      >
        HI, I'M ADITYA
      </h1>

      {/* 🧍 Aditya Image (front layer, bottom) */}
      <div
        className="
          absolute bottom-0 z-20 w-full flex justify-center
          sm:translate-y-0 md:translate-y-40 lg:translate-y-110 xl:translate-y-124 2xl:translate-y-148
        "
      >
        <Image
          src={assets.ad1}
          alt="Aditya"
          className="
            w-[360px] sm:w-[350px] md:w-[450px] lg:w-[580px] xl:w-[600px] 2xl:w-[670px]
          "
        />
      </div>

      {/* 📝 Description Text */}
      <div
        className="
          absolute left-6 sm:left-10 bottom-[100px] sm:bottom-[140px] md:bottom-[170px]
          max-w-[250px] sm:max-w-[320px] md:max-w-[400px] z-30
        "
      >
        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-200">
          I'm a Computer Science student from Udayana University with a deep understanding of
          various programming languages—especially Python, Java, and C. I focus on Big Data Analytics
          and ML engineering while also possessing web development skills (UI/UX & front-end). 
          Additionally, I'm passionate about graphic design and have experience as a freelance 3D artist.
        </p>
      </div>

      {/* 📞 Contact Button */}
      <div
        className="
          absolute right-8 sm:right-12 md:right-20 lg:right-32 xl:right-40 2xl:right-52
          bottom-24 sm:bottom-32 md:bottom-36 lg:bottom-40 xl:bottom-44 2xl:bottom-48
          z-30
        "
      >
        <button
          className="
            flex items-center justify-center border-2 border-white rounded-full
            px-5 py-2 sm:px-6 sm:py-3
            hover:bg-white hover:text-black transition-all duration-300
          "
        >
          <span className="
            text-[15px] sm:text-[18px] md:text-[20px] lg:text-[25px] xl:text-[28px] 2xl:text-[32px]
            font-semibold
          ">
            Contact Me
          </span>
        </button>
      </div>
    </div>
  )
}

export default Page1
