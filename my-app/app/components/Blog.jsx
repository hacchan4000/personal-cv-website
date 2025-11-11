// ini blog item??
import React from 'react'
import Link from 'next/link'


const Blog = ({title, desc, image, category, id}) => {
  return (
    <div className="flex flex-col border-2 border-white bg-black rounded-2xl min-w-[300px] max-w-[320px] p-2 hover:ring-4 my-7 transition-all duration-300">
  
      <img src={image} alt={category} className='w-full sm:w-auto h-40 rounded-lg object-cover shadow-md' />
      
      
      <h2 className="text-4xl mt-4 font-semibold">{title}</h2>
      <p className="text-sm mt-2">{desc}</p>
      <Link href={`/blogs/${id}`} className="inline-flex items-center py-2 text-center">
          Read More →
      </Link>
    </div>
  )
}

export default Blog
