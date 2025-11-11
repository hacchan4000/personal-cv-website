// page my-app/app/components/Page7.jsx untuk hubungi aku
'use client'
import { assets } from '@/public/Assets/assets'
import React, { FormEvent, useEffect, useRef, useState } from "react";
import Image from 'next/image'


const Page7 = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [pesan, setPesan] = useState('')

 const onSubmited = async (e) => {
  e.preventDefault();
  console.log("berhasil ngirim data", name);

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, number, pesan }),
    });

    if (res.ok) {
      alert('Message sent successfully!');
      setName('');
      setEmail('');
      setNumber('');
      setPesan('');
    } else {
      alert('Failed to send message');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong!');
  }

};

  return (
    <div id='connect' className='relative w-full h-200 bg-white text-black flex flex-col overflow-hidden '>
      <div className='w-full h-10 bg-black rounded-b-4xl'></div>

      <div className='flex-col'>
        <Image src={assets.nookie} alt='nook' className='absolute w-100 justify-center items-center'/>
        <Image src={assets.adamHello} alt='adam' className=' absolute w-100 justify-center items-center top-90'/>

      </div>

      <div className='relative flex justify-center items-center '>
          <div className='absolute top-30 left-50'>

            <h1 className='mt-10 mb-20 ml-25
              text-center font-extrabold 
              text-[100px] 
              max-w-20 tracking-tight '
              >LETS CONNECT
            </h1>
          </div>

          {/* form untuk ngirim email ke aku */}
          <div className='absolute top-35 flex-col max-w-20 justify-center items-center'>
            <form action="" onSubmit={onSubmited}>
              <input value={name} onChange={(e => setName(e.target.value))} type="text" placeholder='Name' className='bg-[#D9D9D9]/20 h-10 w-150 my-5 drop-shadow-lg rounded-4xl p-3'/>
              <input value={email} onChange={(e => setEmail(e.target.value))} type="email" placeholder='Email' className='bg-[#D9D9D9]/20 h-10 w-150 my-5 drop-shadow-lg rounded-4xl p-3'/>
              <input value={number} onChange={(e => setNumber(e.target.value))} type="text" placeholder='Phone Number' className='bg-[#D9D9D9]/20 h-10 w-150 my-5 drop-shadow-lg rounded-4xl p-3'/>
              <textarea value={pesan} onChange={(e => setPesan(e.target.value))} placeholder='Message' id=""  className='bg-[#D9D9D9]/20 h-50 w-150 my-5 drop-shadow-lg p-3 rounded-4xl' ></textarea>
              <button type='submit' className='absolute bg-[#75CFFF] px-20 py-3 rounded-full text-white drop-shadow-lg left-55 cursor-pointer active:bg-[#69bae6]'>Send</button>

            </form>

          </div>


      </div>

      <div className='absolute w-full bottom-0 h-10 bg-black rounded-t-4xl'></div>
      
    </div>
  )
}

export default Page7
