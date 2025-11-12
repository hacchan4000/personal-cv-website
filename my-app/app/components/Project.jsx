import React from 'react'

const Project = ({no, title, desc, link}) => {
     const lihatProyek = ({link}) => {
        window.open(link, '_blank')
    }
  return (
    <>
    <div className="sticky top-30 h-190 w-[80%] md:w-[70%] bg-black rounded-3xl border-2 border-white p-5 shadow-lg shadow-white/10">
                
        <div className='flex justify-start items-start top-0'>
            <h1 className="relative font-bold left-0 text-[70px] -mt-4">{no}</h1>
            <div className='px-5'>
                <h2 className="text-3xl font-bold ">{title}</h2>
                <p className="text-gray-300">{desc}</p>
                       
            </div>
            <button className='relative bg-black border-2 border-white rounded-full p-2 px-5 ml-160 z-10 cursor-pointer hover:bg-white hover:text-black transition-all duration-300' onClick={lihatProyek(link)}>
                Live Project
            </button>
                    
        </div>
               
    </div>
            {/* Spacer to allow scroll */}
    <div className="h-80"></div>
    </>
  )
}

export default Project
