// page untuk blogs
import React from 'react'

const Page6 = () => {
  return (
    <div className='relative w-full h-screen bg-black text-white flex flex-col items-center justify-start overflow-hidden rounded-4xl'>
      <h1 className='mt-10 mb-0 
          text-center font-extrabold 
          text-[clamp(3rem,10vw,10rem)] 
          tracking-tight'
          >BLOGS
      </h1>

      <div className='relative top-3 left-0 w-full overflow-hidden py-6 z-20'>
        <div className=' absolute flex justify-between items-center w-full px-10 top-40'>
          <button className='text-[30px]'>⬅️</button>
          <button className='text-[30px]'>➡️</button>
        </div>
          <div>
            <div className='flex space-x-16 overflow-hidden w-800 '>
            <div className='rounded-2xl w-200 h-80 border-2 border-white bg-black mx-2 my-2'></div>
            <div className='rounded-2xl w-200 h-80 border-2 border-white bg-black mx-2 my-2'></div>
            <div className='rounded-2xl w-200 h-80 border-2 border-white bg-black mx-2 my-2'></div>
            <div className='rounded-2xl w-200 h-80 border-2 border-white bg-black mx-2 my-2'></div>
            <div className='rounded-2xl w-200 h-80 border-2 border-white bg-black mx-2 my-2'></div>
                                  
          </div>
                            
          </div>
        
      </div>
      

    </div>
  )
}

export default Page6
