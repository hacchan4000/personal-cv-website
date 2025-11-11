'use client'
//this is my-app/app/components/Page1.jsx
import React from 'react'
import Image from 'next/image'
import { assets } from '@/public/Assets/assets'
import { skills } from '@/public/Assets/assets'

const Page1 = () => {
  const kotakKu = () => {
    window.open('https://wa.me/+6282236012023', '_blank');
  };
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white flex items-center justify-center">
      
      {/* 🧱 Background Text */}
      <h1
        className="
          absolute top-16 font-bold text-center leading-none w-full
          text-[min(18vw,300px)] whitespace-nowrap
        "
      >
        HI, I'M ADITYA
      </h1>

      {/* 🧍 Aditya Image (front layer, bottom) */}
      <div
        className="
          absolute bottom-0 z-20 w-full flex justify-center
          sm:translate-y-0 md:translate-y-40 lg:translate-y-110 xl:translate-y-120 2xl:translate-y-109
        "
      >
        <Image
          src={assets.ad1}
          alt="Aditya"
          className="
            w-[360px] sm:w-[350px] md:w-[450px] lg:w-[580px] xl:w-[600px] 2xl:w-[610px]
          "
        />
      </div>

      {/* 📝 Description Text */}
      <div
        className="
          absolute leading-none  left-15 sm:left-10 md:left-10 lg:left-20 bottom-[250px] sm:bottom-70 md:bottom-60 lg:bottom-40 xl:bottom-30 2xl:bottom-25
          max-w-[100px] sm:max-w-[200px] md:max-w-[230px] z-10
        "
      >
        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-200">
          I'm a Computer Science student from Udayana University with a deep understanding of
          various programming languages—especially Python, Java, and C. I focus on Big Data Analytics
          and ML engineering while also possessing web development skills (UI/UX & front-end). 
          
        </p>

        <p> below is the software i used and my certificates</p>
      </div>

      {/* 📞 Contact Button */}
      <div
        className="
          absolute right-8 sm:right-12 md:right-20 lg:right-32 xl:right-40 2xl:right-52
          bottom-[390px] sm:bottom-100 md:bottom-90 lg:bottom-80 xl:bottom-70 2xl:bottom-60
          z-30
        "
      >
        <button onClick={kotakKu}
          className="tombol"
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
