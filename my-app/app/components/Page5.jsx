//page display projectku
import React from 'react'

const Page5 = () => {
  return (
    <div id='project' className='relative w-full h-250 bg-black text-white flex flex-col items-center justify-start overflow-hidden rounded-4xl'>
      <h1 className='mt-10 mb-0 
          text-center font-extrabold 
          text-[clamp(3rem,10vw,10rem)] 
          tracking-tight'
          >PROJECTS
      </h1>

      <div className='overflow-scroll'>
        <div className="sticky w-[1050px] h-[550px] mb-5">
            <svg
                width="100%"
                height="100%"
                className="rounded-3xl shadow-lg shadow-white/50"
            >
                <rect
                width="100%"
                height="100%"
                className="stroke-white fill-black"
                strokeWidth="4"
                rx="25"
                />
            </svg>

            {/* Overlayed HTML */}
            <div className="absolute top-5 left-5 flex text-white">
                <h1 className="text-[80px] font-bold">01</h1>
                <div>
                    <p className="text-4xl mt-4 mx-4">NAWASENA</p>
                    <p className="text-md mx-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, vitae..</p>
                </div>

                <div className='absolute left-200'>
                    <button className="border-2 border-white rounded-3xl px-5 w-50 
                        hover:bg-white hover:text-black transition-all duration-300"
                    >
                        <span className=" text-[30px] font-semibold">
                            Live Project
                        </span>
                    </button>
                </div>
                
                <div className='relative bg-white w-220 h-90 top-30 right-105 rounded-2xl'></div>
                <div className='relative bg-white w-70 h-90 top-30 right-100 rounded-2xl'>
                    
                </div>
                
            
            </div>
        </div>
        <div className="sticky w-[1050px] h-[550px]">
            <svg
                width="100%"
                height="100%"
                className="rounded-3xl shadow-lg shadow-white/50"
            >
                <rect
                width="100%"
                height="100%"
                className="stroke-white fill-black"
                strokeWidth="4"
                rx="25"
                />
            </svg>

            {/* Overlayed HTML */}
            <div className="absolute top-5 left-5 flex text-white">
                <h1 className="text-[80px] font-bold">01</h1>
                <div>
                    <p className="text-4xl mt-4 mx-4">NAWASENA</p>
                    <p className="text-md mx-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, vitae..</p>
                </div>

                <div className='absolute left-200'>
                    <button className="border-2 border-white rounded-3xl px-5 w-50 
                        hover:bg-white hover:text-black transition-all duration-300"
                    >
                        <span className=" text-[30px] font-semibold">
                            Live Project
                        </span>
                    </button>
                </div>
                
                <div className='relative bg-white w-220 h-90 top-30 right-105 rounded-2xl'></div>
                <div className='relative bg-white w-70 h-90 top-30 right-100 rounded-2xl'>
                    
                </div>
                
            
            </div>
        </div>
      </div>
      

      
    </div>
    
  )
}

export default Page5
