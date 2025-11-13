
// page untuk display blogs
//ini page bloglist
'use client'
import React, { useState, useEffect } from "react";
import { blogs2 } from '@/public/Assets/blogs_data' //ini blog data
import Blog from './Blog.jsx'
import { get } from "http";




const Page6 = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blog", { //untuk kirim data pake API
        method: "GET",
      });

      const data = response.json();

      if (Array.isArray(data.blogs)) {
        setBlogs(data.blogs);
        console.log(response.data.blogs)
      } else {
        console.error("No blogs found in response:", data);
        setBlogs([]);
      }
    } catch (error) {
      console.error("Failed to fetch blogs:", err);
    }
    
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="relative w-full h-420 bg-black text-white flex flex-col items-center overflow-hidden rounded-4xl">
      <h1
        className="mt-10 mb-0 text-center font-extrabold 
        text-[clamp(3rem,10vw,10rem)] tracking-tight"
      >
        BLOGS
      </h1>
      <div className="text-center">
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">This is my personal blog post where is share many stories that caught my interest. Feel free to browse around and even subscribe if you want to keep being updated and receive plenty opportunities.</p>

        
        
      </div>

      <div className="flex justify-center gap-10 my-10">
        <button onClick={() => setMenu('All')} className={menu ==="All" ? "py-1 px-4 rounded-full border-2 border-white text-black bg-white": "py-1 px-4 rounded-full border-2 border-white"}>All</button>
        <button onClick={() => setMenu('Technology')} className={menu ==="Technology" ? "py-1 px-4 rounded-full border-2 border-white text-black bg-white": "py-1 px-4 rounded-full border-2 border-white"}>Technology</button>
        <button onClick={() => setMenu('Fashion')} className={menu ==="Fashion" ? "py-1 px-4 rounded-full border-2 border-white text-black bg-white": "py-1 px-4 rounded-full border-2 border-white"}>Fashion</button>
        <button onClick={() => setMenu('Machine Learning')} className={menu ==="Machine Learning" ? "py-1 px-4 rounded-full border-2 border-white text-black bg-white": "py-1 px-4 rounded-full border-2 border-white"}>Machine Learning</button>
      </div>

      <div className="relative w-full py-6 z-20">
        <div className="flex space-x-8 overflow-x-auto px-10 scrollbar-hide">

          {blogs.filter((blog) => menu==="All"?true:blog.category===menu).map((blog, index) => {
            return <Blog key={index} id={blog.id} image={blog.img} title={blog.title} desc={blog.desc} category={blog.category}/>
          })}

        </div>

        <div className="flex space-x-8 overflow-x-auto px-10 scrollbar-hide">

          {blogs2.filter((blog) => menu==="All"?true:blog.category===menu).map((blog, index) => {
            return <Blog key={index} id={blog.id} image={blog.img} title={blog.title} desc={blog.desc} category={blog.category}/>
          })}

        </div>

        

      </div>
    </div>
  );
};

export default Page6;
