'use client'
import React, { useState, useEffect } from "react";
import Blog from './Blog.jsx';
import { blogs2 } from '@/public/Assets/blogs_data';

const Page6 = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  // ✅ Fetch blogs from your MongoDB via API
  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blog", { method: "GET" });
      const data = await res.json();

      if (Array.isArray(data.blogs)) {
        setBlogs(data.blogs);
      } else {
        console.error("No blogs found in response:", data);
        setBlogs([]);
      }
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    }
  };

  // ✅ Fetch blogs on first render
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="relative w-full h-420 bg-black text-white flex flex-col items-center overflow-hidden rounded-4xl">
      <h1 className="mt-10 mb-0 text-center font-extrabold text-[clamp(3rem,10vw,10rem)] tracking-tight">
        BLOGS
      </h1>

      <div className="text-center">
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          This is my personal blog post where I share many stories that caught my interest.
          Feel free to browse around and subscribe if you want to keep being updated.
        </p>

        
      </div>

      {/* Filter buttons */}
      <div className="flex justify-center gap-10 my-10">
        {["All", "Technology", "Fashion", "Machine Learning"].map((cat) => (
          <button
            key={cat}
            onClick={() => setMenu(cat)}
            className={`py-1 px-4 rounded-full border-2 border-white ${
              menu === cat ? "bg-white text-black" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blogs from MongoDB */}
      <div className="relative w-full py-6 z-20">
        <div className="flex space-x-8 overflow-x-auto px-10 scrollbar-hide">
          {blogs
            .filter((blog) => menu === "All" || blog.category === menu)
            .map((blog, index) => (
              <Blog
                key={index}
                id={blog._id}
                image={blog.image}
                title={blog.title}
                desc={blog.description}
                category={blog.category}
              />
            ))}
        </div>

        {/* Optional: Blogs from local data */}
        <div className="flex space-x-8 overflow-x-auto px-10 scrollbar-hide">
          {blogs2
            .filter((blog) => menu === "All" || blog.category === menu)
            .map((blog, index) => (
              <Blog
                key={index}
                id={blog._id}
                image={blog.img}
                title={blog.title}
                desc={blog.desc}
                category={blog.category}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page6;
