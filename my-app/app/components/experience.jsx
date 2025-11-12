import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



const experience = ({num, judul, deskripsi, link}) => {
  return (
    <div className='card'>
        <div>
            <h1 className='text-[110px]'>{num}</h1>
        </div>
        <div>
            <h1 className='text-[50px] mx-10'>{judul}</h1>
            <p className='pl-10'>{deskripsi}</p>
            <a href={link}></a>
        </div>
    </div>
  )
}

export default experience
