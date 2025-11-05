'use client'
// eksport library 
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

export default function Example() { //
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return ( 
    <header className="bg-black text-white">
      
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8">

        {/* ini komen dalem jsx */} 
        <div className="flex lg:hidden w-full justify-end">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>


        {/* Desktop Nav Links */} 
        <PopoverGroup className="hidden md:flex md:gap-x-10 lg:gap-x-40 xl:gap-x-60 2xl:gap-x-90 transition-all duration-300">
          <a href="#" className="text-base md:text-lg lg:text-xl font-bold hover:text-gray-300 transition">ABOUT</a> 
          <a href="#" className="text-base md:text-lg lg:text-xl font-bold hover:text-gray-300 transition">BLOGS</a>
          <a href="#" className="text-base md:text-lg lg:text-xl font-bold hover:text-gray-300 transition">PROJECTS</a>
          <a href="#" className="text-base md:text-lg lg:text-xl font-bold hover:text-gray-300 transition">CONTACT</a>
        </PopoverGroup>
      </nav>

      {/* ✅ Mobile Menu (opens when icon is clicked) */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/70" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-gray-900 p-6 overflow-y-auto">
          <div className="flex items-center justify-end">

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <XMarkIcon className="h-6 w-6 ml-auto" aria-hidden="true" />
            </button>
          </div>

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
