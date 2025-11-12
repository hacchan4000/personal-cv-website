import React from 'react'
import Link from 'next/link'

const Blog = ({ title, desc, image, category, id }) => {
  return (
    <Link href={`/blogs/${id}`} className="">
      <div className="flex flex-col border-2 border-white bg-black rounded-2xl 
                      w-[320px] h-[400px] p-4 hover:ring-4 
                      transition-all duration-300 overflow-hidden my-5">
        
        <img 
          src={image} 
          alt={category} 
          className="w-full h-[180px] rounded-lg object-cover shadow-md"
        />
        
        <div className="flex flex-col justify-between flex-1 mt-3">
          <div>
            <h2 className="text-2xl font-semibold line-clamp-2">{title}</h2>
            <p className="text-sm mt-2 text-gray-300 line-clamp-3">
              {desc}
            </p>
          </div>

          <span className="text-blue-200 text-sm mt-3 hover:underline">
            Read More →
          </span>
        </div>
      </div>
    </Link>
  )
}

export default Blog
