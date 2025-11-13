
//this is my-app/app/components/Page2.jsx
import React from 'react'
import Image from 'next/image'
import { skills , certificates } from '@/public/Assets/assets'
import { div } from 'three/src/nodes/TSL.js'

const Page2 = () => {
  return (
    <div className='bg-black'>
      
      <div className="relative top-3  w-full overflow-hidden py-6 z-10 bg-black -rotate-3 ">
              {/* My Skills */}
              <div className='flex space-x-16 overflow-hidden'>
                <div className="flex space-x-16 animate-loop-scroll bg-black">
                  <Image loading='lazy' src={skills.React_Logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.Tailwind_logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.HTML5_logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.CSS_logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.PHP_Logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.JS_logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.Java_logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.Laravel_logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.Logo_Blender} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.Unity_logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.godot_logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.Python_logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.C_logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.MySQL_logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                </div>
                <div className="flex space-x-16 animate-loop-scroll bg-black" aria-hidden="true">
                  <Image loading='lazy' src={skills.React_Logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.Tailwind_logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.HTML5_logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.CSS_logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.PHP_Logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.JS_logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.Java_logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.Laravel_logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.Logo_Blender} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.Unity_logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.godot_logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.Python_logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.C_logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                  <Image loading='lazy' src={skills.MySQL_logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
                </div>
              </div>
              
              {/* Bento box */}
              <div className='flex space-x-16 overflow-hidden my-10 w-750'>
                  <div className=' flex space-x-10 overflow-hidden animate-loop-scroll2'>
                      <Image loading='lazy' src={certificates.sertif1} alt='sertif' className='max-w-none h-80 w-auto object-contain rounded-xl'/>
                      <Image loading='lazy' src={certificates.sertif2} alt='sertif' className='max-w-none h-80 w-auto object-contain rounded-xl'/>
                      <Image loading='lazy' src={certificates.sertif3} alt='sertif' className='max-w-none h-80 w-auto object-contain rounded-xl'/>
                      <Image loading='lazy' src={certificates.sertif4} alt='sertif' className='max-w-none h-80 w-auto object-contain rounded-xl'/>
                      <Image loading='lazy' src={certificates.sertif4} alt='sertif' className='max-w-none h-80 w-auto object-contain rounded-xl'/>
                      <Image loading='lazy' src={certificates.sertif4} alt='sertif' className='max-w-none h-80 w-auto object-contain rounded-xl'/>
                     
                  </div>
                  <div className=' flex space-x-10 overflow-hidden animate-loop-scroll2' >
                      <Image loading='lazy' src={certificates.sertif5} alt='sertif' className='max-w-none h-80 w-auto object-contain rounded-xl'/>
                      <Image loading='lazy' src={certificates.sertif6} alt='sertif' className='max-w-none h-80 w-auto object-contain rounded-xl'/>
                      <Image loading='lazy' src={certificates.sertif7} alt='sertif' className='max-w-none h-80 w-auto object-contain rounded-xl'/>
                      <Image loading='lazy' src={certificates.sertif7} alt='sertif' className='max-w-none h-80 w-auto object-contain rounded-xl'/>
                      <Image loading='lazy' src={certificates.sertif7} alt='sertif' className='max-w-none h-80 w-auto object-contain rounded-xl'/>
                      
                  </div>
                  
              </div>
              
             
              
      
      </div>
    </div>
  )
}

export default Page2
