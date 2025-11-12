//page untuk projects

import React from 'react'
import Project from './Project.jsx'
import { projects } from '@/public/Assets/assets'


const Page5 = () => {
   
  return (
    <div id="project" className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-start">
        <h1 className="mt-20 mb-10 top-20 text-center font-extrabold text-[clamp(3rem,10vw,10rem)] tracking-tight">
            PROJECTS
        </h1>
        {/* Container must be taller than screen */}
        <div className="relative w-full flex flex-col items-center h-[650vh]">
            {projects.map((proyek, index) => {
                return <Project key={index} no={proyek.no} title={proyek.title} desc={proyek.desc} link={proyek.link}/>
            })}

            
        </div>
        <div className="h-50"></div>
    </div>
  )
}

export default Page5
