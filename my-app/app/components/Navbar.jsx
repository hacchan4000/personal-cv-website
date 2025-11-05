import React from 'react'
import Image from 'next/image'
import { assets } from '../../public/Assets/assets'

const navbar = () => {
  return (
    <>
      <nav className='w-full fixed px-6 lg:px-8 xl:px-[8%] py-2 flex items-center justify-between z-50'>
        <a href="#top">
           <Image src={assets.logo} alt='' className='w-23 cursor-pointer mr-14' />
        </a>
        <ul className='hidden md:flex items-center gap-10 lg:gap-15 rounded-full px-12 py-3 mr-15 text-[25px]'>
            <li><a href="#top">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#experience">EXPERIENCE</a></li>
            <li><a href="#project">PROJECTS</a></li>
        </ul>
        <div>
            <a href="#hire" className='hidden lg:flex items-center gap-3 px-8 py-2.5 text-[25px]'>
                💰💸
            </a>
        </div>
      </nav>
    </>
  )
}

export default navbar
