"use client";

import React from "react";
import { Timeline } from "./Timeline";
import { data } from "@/public/Assets/assets";
import Image from 'next/image'


const Page3 = () => {
  
  return (
    <div
      id="about"
      className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-start overflow-hidden"
    >
      {/* Title */}
      <h1
        className="
          mt-10 
          text-center font-extrabold 
          text-[clamp(3rem,10vw,10rem)] 
          text-white 
          tracking-tight
        "
      >
        ABOUT ME
      </h1>

      {/* Timeline Section */}
      <div className="w-full max-w-6xl px-4 md:px-5">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default Page3;
