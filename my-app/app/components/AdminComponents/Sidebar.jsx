
import { assets } from '@/public/Assets/assets'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { IoAddCircle,IoDocument ,IoMail } from "react-icons/io5";


const Sidebar = () => {
  return (
    <div className='flex flex-col bg-black border-4 border-black'>
        <div className='px-2 sm:pl-14 py-3'>
            <Image src={assets.logo} width={120} alt='logo'/>
        </div>
        <div className='w-28 sm:w-80 h-screen relative py-12 '>
            <div className='w-[50%] sm:w-[80%] absolute right-0'>

                <Link href='/admin/addBlog' className='flex items-center border border-white gap-3 font-medium px-3 py-2 shadow-[-5px_5px_0px_#222831]'>
                    <IoAddCircle/>
                    <p>ADD BLOGS</p>
                </Link>
                <Link href='/admin/blogList' className='flex mt-5 items-center border border-white gap-3 font-medium px-3 py-2 shadow-[-5px_5px_0px_#222831]'>
                    <IoDocument/>
                    <p>BLOG LIST</p>
                </Link>
                <Link href='/admin/subscribtion' className='flex mt-5 items-center border border-white gap-3 font-medium px-3 py-2 shadow-[-5px_5px_0px_#222831]'>
                    <IoMail/>
                    <p>SUBSCRIPTION</p>
                </Link>


            </div>
            

        </div>
    </div>
  )
}

export default Sidebar
