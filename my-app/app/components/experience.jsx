
//my-app/app/components/Experience.jsx
import React from 'react'
import Link from 'next/link'

const Experience = ({ num, judul, deskripsi }) => {
  return (
    <Link href={`/experiences/${num}`} className='relative 2xl:left-20 sm:left-0 justify-center'>
      <div className="card group hover:scale-105 hover:bg-white/90 transition-all duration-300 cursor-pointer flex">
        <div className="shrink-0">
          <h1 className="text-[80px] sm:text-[110px] font-bold text-black/80 leading-none group-hover:text-black transition-colors duration-300">
            {num}
          </h1>
        </div>

        <div className="sm:ml-8 mt-4 sm:mt-0">
          <h1 className="text-[32px] sm:text-[55px] font-semibold text-black/80 group-hover:text-black">
            {judul}
          </h1>
          <p className="pl-1 sm:pl-3 text-sm sm:text-base text-black/80 leading-snug">
            {deskripsi}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Experience
