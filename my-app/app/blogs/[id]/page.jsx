'use client';
import React, { useEffect, useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/app/components/Footer';
import { IoLogoFacebook, IoLogoTwitter, IoLogoGoogle } from "react-icons/io5";
import { assets } from '@/public/Assets/assets';

const Page = ({ params }) => {
  const { id } = React.use(params);
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    try {
      const res = await fetch(`/api/blog?id=${id}`);
      const json = await res.json();
      setData(json.blog);
    } catch (error) {
      console.error("Failed to fetch blog:", error);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [id]);

  if (!data) {
    return (
      <div className="text-white text-center py-20">
        <p>Loading blog...</p>
      </div>
    );
  }

  const formatted = new Date(data.date).toLocaleDateString();

  return (
    <>
      <div className="text-white py-5 px-5 md:px-12 lg:px-28">
        <Link href={'/'}>
          <h1 className='absolute text-[30px]'>HOME</h1>
        </Link>

        <div className='flex justify-end items-center'>
          <button className='flex items-center gap-2 py-1 px-3 sm:py-3 sm:px-6 border-2 border-white rounded-full'>
            Subscribe
          </button>
          <Image src={assets.menu} alt='' className='w-13 ml-8' />
        </div>

        <div className='text-center my-20'>
          <h3 className='my-10'>{data.category}</h3>
          <h1 className='text-[50px] sm:text-5xl max-w-[700px] mx-auto'>{data.title}</h1>
          <h2 className='mt-10'>By {data.author}</h2>
          <h2>{formatted}</h2>
          <img src={data.image} width={600} height={600} alt={data.title} className='mx-auto mt-6'/>
        </div>
      </div>

      <div className='mx-5 max-w-[800px] md:mx-auto mb-5 font-serif text-justify'>
        <p>{data.description}</p>

        <div className='my-20'>
          <p className='my-4'>Share this article on social media</p>
          <div className='flex text-3xl gap-5'>
            <IoLogoFacebook />
            <IoLogoTwitter />
            <IoLogoGoogle />
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Page;
