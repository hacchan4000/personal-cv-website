//page untuk navigasi
import React, { useRef } from 'react'
import Image from 'next/image'
import { assets } from '../../public/Assets/assets'

const navbar = () => {
    const sideMenu = useRef();
    const openMobileMenu = ()=>{
        sideMenu.current.style.transform = 'translateX(-16rem)';
    }
    const closeMobileMenu = ()=>{
        sideMenu.current.style.transform = 'translateX(16rem)';
    }
  return (
    <>
    <div>

    </div>
      <nav className='w-full fixed px-6 lg:px-8 xl:px-[2%] py-2 flex items-center justify-between z-50 drop-shadow-xl/90 bg-black'>
        <a href="#top">
           <Image src={assets.logo} alt='' className='w-20 cursor-pointer mr-17' />
        </a>
        <ul className='hidden md:flex items-center gap-10 lg:gap-25 rounded-full px-12 py-3 mr-15 text-[25px]'>
            <li><a href="#top">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#experience">EXPERIENCE</a></li>
            <li><a href="#project">PROJECTS</a></li>
        </ul>
        <div className='flex items-center gap-2
        '>
            <a href="#connect" className='hidden lg:flex items-center gap-3 px-8 py-2 ml-4 text-[25px]'>
                📨
            </a>
            <button className='block md:hidden ml-3 cursor-pointer' onClick={openMobileMenu}>
                <Image src={assets.menu} alt='' className='w-13' />
            </button>
        </div>

        {/*--- mobile menu ---*/}
        <ul ref={sideMenu} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-black transition duration-500'>
            <div className='absolute right-7 top-6' onClick={closeMobileMenu}>
                <h1 className='text-[30px] cursor-pointer'>X</h1>
            </div>
            <li><a href="#top" onClick={closeMobileMenu}>HOME</a></li>
            <li><a href="#about" onClick={closeMobileMenu}>ABOUT</a></li>
            <li><a href="#experience" onClick={closeMobileMenu}>EXPERIENCE</a></li>
            <li><a href="#project" onClick={closeMobileMenu}>PROJECTS</a></li>
        </ul>
      </nav>
    </>
  )
}

export default navbar
