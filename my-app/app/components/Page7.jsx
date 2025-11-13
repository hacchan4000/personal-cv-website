
'use client'
//for contact
import { assets } from '@/public/Assets/assets'
import React, { useState } from 'react'
import Image from 'next/image'

const Page7 = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [pesan, setPesan] = useState('')

  const onSubmited = async (e) => {
    e.preventDefault()
    console.log('berhasil ngirim data', name)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, number, pesan }),
      })

      if (res.ok) {
        alert('Message sent successfully!')
        setName('')
        setEmail('')
        setNumber('')
        setPesan('')
      } else {
        alert('Failed to send message')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong!')
    }
  }

  return (
    <div id="connect" className="relative w-full bg-white text-black flex flex-col overflow-hidden">
      {/* Top bar */}
      <div className="w-full h-10 bg-black rounded-b-4xl"></div>

      {/* Main section */}
      <div className="relative flex flex-col md:flex-row justify-baseline items-center md:items-start px-6 md:px-30 py-12">
        
        {/* Left images (hidden on small screens to save space) */}
        <div className="relative hidden md:flex flex-col">
          <Image
            src={assets.nookie}
            alt="nook"
            className="w-80 object-contain "
          />
          <Image
            src={assets.adamHello}
            alt="adam"
            className="w-80 object-contain absolute top-20 right-30"
          />
        </div>

        {/* Title */}
        <h1
          className=" font-extrabold text-center md:text-left
          text-[80px] sm:text-5xl md:text-7xl lg:text-8xl
          tracking-tight md:max-w-[40%] 2xl:max-w-[10%]"
        >
          LET'S CONNECT
        </h1>

        {/* Contact Form */}
        <div className="w-full max-w-md ml-0 2xl:ml-50">
          <form
            onSubmit={onSubmited}
            className="flex flex-col items-center justify-center space-y-4 sm:space-y-5"
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              className="bg-[#D9D9D9]/20 h-10 w-full drop-shadow-lg rounded-4xl p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#75CFFF]"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="bg-[#D9D9D9]/20 h-10 w-full drop-shadow-lg rounded-4xl p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#75CFFF]"
            />

            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="text"
              placeholder="Phone Number"
              className="bg-[#D9D9D9]/20 h-10 w-full drop-shadow-lg rounded-4xl p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#75CFFF]"
            />

            <textarea
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              placeholder="Message"
              className="bg-[#D9D9D9]/20 h-40 w-full drop-shadow-lg p-3 rounded-4xl text-sm sm:text-base resize-none focus:outline-none focus:ring-2 focus:ring-[#75CFFF]"
            ></textarea>

            <button
              type="submit"
              className="bg-[#75CFFF] px-10 py-3 rounded-full text-white drop-shadow-lg 
              cursor-pointer active:bg-[#69bae6] text-sm sm:text-base transition-all duration-300 hover:scale-105"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute w-full bottom-0 h-10 bg-black rounded-t-4xl"></div>
    </div>
  )
}

export default Page7
