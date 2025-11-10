'use client'
import React from 'react'

const Page5 = () => {
  return (
    <div id="project" className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-start">
        <h1 className="mt-20 mb-10 top-20 text-center font-extrabold text-[clamp(3rem,10vw,10rem)] tracking-tight">
            PROJECTS
        </h1>
        {/* Container must be taller than screen */}
        <div className="relative w-full flex flex-col items-center h-[320vh]">
            {/* Card 1 */}
            <div className="sticky top-30 h-190 w-[80%] md:w-[70%] bg-black rounded-3xl border-2 border-white p-5 shadow-lg shadow-white/10">
                
                <div className='flex justify-start items-start top-0'>
                    <h1 className="relative font-bold left-0 text-[70px] -mt-4">01</h1>
                    <div className='px-5'>
                        <h2 className="text-3xl font-bold ">NAWASENA</h2>
                        <p className="text-gray-300">Description of your first project here.</p>
                       
                    </div>
                    <button className='relative bg-black border-2 border-white rounded-full p-2 px-5 ml-160 z-10 cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>
                            Live Project
                    </button>
                    
                </div>
               
            </div>
            {/* Spacer to allow scroll */}
            <div className="h-80"></div>


            {/* Card 2 */}
            <div className="sticky top-40 h-190 w-[80%] md:w-[70%] bg-black rounded-3xl border-2 border-white p-5 shadow-lg shadow-white/10">
                
                <div className='flex justify-start items-start top-0'>
                    <h1 className="relative font-bold left-0 text-[70px] -mt-4">02</h1>
                    <div className='px-5'>
                        <h2 className="text-3xl font-bold ">ASAH CAPSTONE</h2>
                        <p className="text-gray-300">Description of your first project here.</p>
                       
                    </div>
                    <button className='relative bg-black border-2 border-white rounded-full p-2 px-5 ml-158 z-10 cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>
                            Live Project
                    </button>
                    
                </div>
               
            </div>
            {/* Spacer to allow scroll */}
            <div className="h-80"></div>

            {/* Card 3 */}
            <div className="sticky top-50 h-190 w-[80%] md:w-[70%] bg-black rounded-3xl border-2 border-white p-5 shadow-lg shadow-white/10">
                
                <div className='flex justify-start items-start top-0'>
                    <h1 className="relative font-bold left-0 text-[70px] -mt-4">03</h1>
                    <div className='px-5'>
                        <h2 className="text-3xl font-bold ">ADITYA'S WORLD</h2>
                        <p className="text-gray-300">Description of your first project here.</p>
                       
                    </div>
                    <button className='relative bg-black border-2 border-white rounded-full p-2 px-5 ml-158 hover:bg-white hover:text-black transition-all duration-300'>
                            Live Project
                    </button>
                    
                </div>
               
            </div>

            {/* Spacer to allow scroll */}
            <div className="h-80"></div>
            {/* Card 4 */}
            <div className="sticky top-60 h-190 w-[80%] md:w-[70%] bg-black rounded-3xl border-2 border-white p-5 shadow-lg shadow-white/10">
                
                <div className='flex justify-start items-start top-0'>
                    <h1 className="relative font-bold left-0 text-[70px] -mt-4">04</h1>
                    <div className='px-5'>
                        <h2 className="text-3xl font-bold ">GO And Start the Street</h2>
                        <p className="text-gray-300">Description of your first project here.</p>
                       
                    </div>
                    <button className='relative bg-black border-2 border-white rounded-full p-2 px-5 ml-147 hover:bg-white hover:text-black transition-all duration-300'>
                            Live Project
                    </button>
                    
                </div>
               
            </div>

            {/* Spacer to allow scroll */}
            <div className="h-80"></div>
            
        </div>
    </div>
  )
}

export default Page5
