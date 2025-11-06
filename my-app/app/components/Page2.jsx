// untuk display skills n sertifikatku pake moving bento box
import React from 'react'
import Image from 'next/image'
import { skills } from '@/public/Assets/Skills'

const Page2 = () => {
  return (
    <div>
      <div className='flex space-x-16 '>
        <Image loading='lazy' src={skills.React_Logo} alt="React" className="max-w-none"/>
        <Image loading='lazy' src={skills.Next_js_logo} alt="Next" className="max-w-none"/>
        <Image loading='lazy' src={skills.HTML5_logo} alt="HTML5_logo" className="max-w-none"/>
        <Image loading='lazy' src={skills.CSS_logo} alt="CSS_logo" className="max-w-none"/>
        <Image loading='lazy' src={skills.PHP_Logo} alt="PHP_Logo" className="max-w-none"/>
        <Image loading='lazy' src={skills.Laravel_logo} alt="Laravel_logo" className="max-w-none"/>
        <Image loading='lazy' src={skills.Logo_Blender} alt="Logo_Blender" className="max-w-none"/>
        <Image loading='lazy' src={skills.MySQL_logo} alt="MySQL_logo" className="max-w-none"/>
        <Image loading='lazy' src={skills.godot_logo} alt="godot_logo" className="max-w-none"/>
        <Image loading='lazy' src={skills.Unity_logo} alt="Unity_logo" className="max-w-none"/>
        <Image loading='lazy' src={skills.Tailwind_logo} alt="Tailwind_logo" className="max-w-none"/>
      </div>
    </div>
  )
}

export default Page2
