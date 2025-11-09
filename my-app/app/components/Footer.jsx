import React from "react";
import Image from "next/image";
import { assets, icons } from "@/public/Assets/assets";

const Footer = () => {
  return (
    <div className="absolute w-full h-30 bg-black rounded-2xl">
      <div className="relative flex items-center justify-between mx-5 bg-black">
        
        {/* Logo / Text */}
        <div>
          <Image
            src={assets.TextFooter}
            alt="adit"
            className="w-110 px-8 ml-10"
          />
        </div>

        {/* Socials & Contacts */}
        <div className="flex my-10 mx-10 bg-black">
          
          {/* Socials */}
          <div className="mx-20">
            <h2 className="text-[min(18vw,38px)] mb-2">SOCIALS</h2>
            <ul className="space-y-1">
              <li><a href="https://www.instagram.com/chdra.blend?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">INSTAGRAM</a></li>
              <li><a href="">TWITTER</a></li>
              <li><a href="https://www.linkedin.com/in/aditya-chandra-cs/">LINKEDIN</a></li>
              <li><a href="https://www.youtube.com/@adityaAnimations-s7g">YOUTUBE</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="mx-10">
            <h2 className="text-[min(18vw,38px)] mb-2">CONTACTS</h2>
            <ul className="space-y-1">
              <li><a href="">WHATSAPP</a></li>
              <li><a href="">DISCORD</a></li>
              <li><a href="">LINE</a></li>
              <li><a href="">TELEGRAM</a></li>
            </ul>
          </div>

        </div>
        
      </div>
      <div className="flex space-x-20 justify-between overflow-hidden bg-black">
            <Image src={icons.img1} alt="img" className="max-w-none h-30 w-auto object-contain"/>
            <Image src={icons.img2} alt="img" className="max-w-none h-30 w-auto object-contain"/>
            <Image src={icons.img3} alt="img" className="max-w-none h-30 w-auto object-contain"/>
            <Image src={icons.img4} alt="img" className="max-w-none h-30 w-auto object-contain"/>
            <Image src={icons.img5} alt="img" className="max-w-none h-30 w-auto object-contain"/>
            <Image src={icons.img6} alt="img" className="max-w-none h-30 w-auto object-contain"/>
            <Image src={icons.img7} alt="img" className="max-w-none h-30 w-auto object-contain"/>
            <Image src={icons.img8} alt="img" className="max-w-none h-30 w-auto object-contain"/>
            <Image src={icons.img9} alt="img" className="max-w-none h-30 w-auto object-contain"/>
            <Image src={icons.img10} alt="img" className="max-w-none h-30 w-auto object-contain"/>

          </div>
    </div>
  );
};

export default Footer;
