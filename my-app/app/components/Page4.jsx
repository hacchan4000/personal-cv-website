// my-app/app/components/Page4.jsx
import React from 'react'
import { exp } from '@/public/Assets/assets'
import Experience from './Experience.jsx'

const Page4 = () => {
  return (
    <div
      id="experience"
      className="relative w-full h-500 bg-white text-black flex flex-col items-center justify-center overflow-hidden rounded-4xl"
    >
      <h1
        className="
          mt-5 mb-10 
          text-center font-extrabold 
          text-[clamp(5rem,10vw,10rem)] 
          tracking-tight
        "
      >
        EXPERIENCE
      </h1>

        {exp.map((item, index) => (
          <Experience
            key={index}
            id={item.id}
            num={item.num}
            judul={item.judul}
            deskripsi={item.deskripsi}
          />
        ))}
      
    </div>
  )
}

export default Page4
