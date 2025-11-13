'use client'
//this is my-app/app/components/Page1.jsx
import React from 'react'
import Image from 'next/image'
import { assets } from '@/public/Assets/assets'

const Page1 = () => {
  const kotakKu = () => {
    window.open('https://wa.me/+6282236012023', '_blank');
  };
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white flex items-center justify-center">
      
      {/* 🧱 Background Text */}
      <h1
        className="
          absolute top-16 font-bold text-center leading-none w-full
          text-[min(18vw,300px)] whitespace-nowrap animasiTeks
        "
      >
        HI, I'M ADITYA
      </h1>

      {/* 🧍 Aditya Image (front layer, bottom) */}
      <div
        className="
          absolute  z-20 w-full flex justify-center top-30
          sm:translate-y-0 md:translate-y-5 lg:translate-y-10 xl:translate-y-20 2xl:translate-y-30
        "
      >
        <Image
          src={assets.ad1}
          alt="Aditya"
          className="
            w-[360px] sm:w-[350px] md:w-[450px] lg:w-[580px] xl:w-[600px] 2xl:w-[610px]
          "
        />
          {/* blur image boundary between page 1 and two */}
        <Image
            src={assets.blur}
            alt="blur"
            className="
              absolute bottom-0 left-1/2 -translate-x-1/2
              w-[400px] sm:w-[450px] md:w-[550px] lg:w-[650px] xl:w-[700px] 2xl:bottom-20
              z-10
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
        <p className="text-[10px] sm:text-sm md:text-base leading-relaxed text-gray-200 animasiTeks">
          I'm a Computer Science student from Udayana University with a deep understanding of
          various programming languages—especially Python, Java, and C. I focus on Big Data Analytics
          and ML engineering while also possessing web development skills (UI/UX & front-end). 
          
        </p>

        <p className='animasiTeks mt-10 text-[10px] sm:text-sm md:text-base'> below is the software i've used and my certificates</p>
      </div>

      {/* 📞 Contact Button */}
      <div
        className=" animasiTeks
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
