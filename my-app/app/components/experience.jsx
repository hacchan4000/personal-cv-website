
//my-app/app/components/Experience.jsx
import React from 'react'
import Link from 'next/link'

const Experience = ({ id, num, judul, deskripsi }) => {
  return (
    <Link href={`/experiences/${id}`} className='relative 2xl:left-20 left-5 justify-center'>
      <div className="card group hover:scale-105 hover:bg-white/90 transition-all duration-300 cursor-pointer flex">
        <div className="shrink-0">
          <h1 className="text-[40px] sm:text-[110px] font-bold text-black/80 leading-none group-hover:text-black transition-colors duration-300 m-3">
            {num}
          </h1>
        </div>

        <div className="sm:ml-8 top-0 sm:mt-0">
          <h1 className="text-[40px] sm:text-[55px] font-semibold text-black/80 group-hover:text-black">
            {judul}
          </h1>
          <p className="sm:pl-0 text-sm sm:text-base text-black/80 leading-snug">
            {deskripsi}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Experience
