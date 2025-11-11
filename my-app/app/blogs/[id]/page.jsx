// page untuk masing-masing blog page
'use client'
import React, { useEffect, useState } from 'react'
import { blogs, blogs2 } from '@/public/Assets/blogs_data' //ini blog data

const page = ({params}) => {
  const [data,setData] = useState(null);
  const fetchBlogData = () => {
    for (let index = 0; index < blogs.length; index++) {
      if (params.id == blogs[index].id) {
        const element = array[index];
      }
      
    }
  }
  useEffect(()=> {
    fetchBlogData();
  },[])

  return (
    <div className='text-white'>
      {params.id}
    </div>
  )
}

export default page
