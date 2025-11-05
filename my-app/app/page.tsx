'use client'
import {Mohave} from 'next/font/google';

//page untuk header
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-black text-white w-full">
      {/* NAVBAR */}
      <nav
        aria-label="Global" className="flex items-center justify-between p-6 px-8 w-full mx-10"
      >
        {/* Desktop Nav Links */}
        <PopoverGroup className="hidden md:flex md:gap-x-50 lg:gap-x-70 xl:gap-x-80 transition-all duration-300">
          <a href="#" className="text-base md:text-lg lg:text-xl font-bold hover:text-gray-300 transition">ABOUT</a>
          <a href="#" className="text-base md:text-lg lg:text-xl font-bold hover:text-gray-300 transition">BLOGS</a>
          <a href="#" className="text-base md:text-lg lg:text-xl font-bold hover:text-gray-300 transition">PROJECTS</a>
          <a href="#" className="text-base md:text-lg lg:text-xl font-bold hover:text-gray-300 transition">CONTACT</a>
        </PopoverGroup>

        {/* Right side — Menu button (mobile only) */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* ✅ Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
        <div className="fixed inset-0 z-50 bg-black/70" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 left-0 z-50 w-full max-w-sm bg-gray-900 p-6 overflow-y-auto">
          <div className="flex items-center justify-left">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="mt-6 flex flex-col space-y-4">
            <a href="#" className="text-lg font-semibold hover:text-gray-300">ABOUT</a>
            <a href="#" className="text-lg font-semibold hover:text-gray-300">BLOGS</a>
            <a href="#" className="text-lg font-semibold hover:text-gray-300">PROJECTS</a>
            <a href="#" className="text-lg font-semibold hover:text-gray-300">CONTACT</a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
