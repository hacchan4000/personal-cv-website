'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/public/Assets/assets'

const Page = () => {
  const [image, setImage] = useState(null)

  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Technology",
    author: "John Doe",
  })

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prev => ({ ...prev, [name]: value }));
  }

  // 🟢 Upload function
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      // 1️⃣ Upload the image (if available)
      let imagePath = "";
      if (image) {
        const formData = new FormData();
        formData.append("file", image);

        const imageUpload = await fetch("/api/blog", {
          method: "POST",
          headers: {
            "Content-Type": image.type, // let the backend detect binary upload
          },
          body: image,
        });

        const imageResponse = await imageUpload.json();
        if (imageResponse.image) {
          imagePath = imageResponse.image;
        } else {
          alert("Image upload failed");
          return;
        }
      }

      // 2️⃣ Send blog data (text part)
      const blogData = { ...data, image: imagePath };

      const res = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      const result = await res.json();
      if (result.success) {
        alert("✅ Blog uploaded successfully!");
        setData({
          title: "",
          description: "",
          category: "Technology",
          author: "John Doe",
        });
        setImage(null);
      } else {
        alert("❌ Upload failed: " + result.error);
      }

    } catch (error) {
      console.error("Upload error:", error);
      alert("Something went wrong!");
    }
  }

  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        className="pt-5 px-5 sm:pt-12 sm:pl-16 text-black"
      >
        <p className='text-xl'>UPLOAD THUMBNAIL</p>
        <label htmlFor="image">
          <Image
            className='mt-4'
            src={
              !image
                ? assets.upload
                : URL.createObjectURL(image)
            }
            width={140}
            height={70}
            alt='upload'
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id='image'
          hidden
          required
        />

        <p className='text-xl mt-4'>BLOG TITLE</p>
        <input
          name='title'
          onChange={onChangeHandler}
          value={data.title}
          className='w-full sm:w-[500px] mt-4 px-4 py-3 border-2 border-black rounded-2xl'
          type="text"
          placeholder='type here'
          required
        />

        <p className='text-xl mt-4'>BLOG DESCRIPTION</p>
        <textarea
          name='description'
          onChange={onChangeHandler}
          value={data.description}
          className='w-full sm:w-[500px] mt-4 px-4 py-3 border-2 border-black rounded-2xl resize-none'
          type="text"
          placeholder='write here'
          rows={6}
          required
        />

        <p className='text-xl mt-4'>BLOG CATEGORY</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className='w-[500px] mt-4 px-4 py-3 border-2 rounded-2xl'
        >
          <option value="Technology">Technology</option>
          <option value="Fashion">Fashion</option>
          <option value="Machine Learning">Machine Learning</option>
        </select>
        <br />

        <button
          type='submit'
          className='mt-8 w-40 h-12 bg-black text-white rounded-2xl'
        >
          ADD
        </button>
      </form>
    </>
  )
}

export default Page;
