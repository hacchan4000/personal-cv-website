// page untuk hubungin aku
import React from 'react'

const Page7 = () => {
  return (
    <div id='connect' className='relative w-full h-200 bg-white text-black flex flex-col overflow-hidden '>
      <div className='w-full h-10 bg-black rounded-b-4xl'></div>

      <div className='relative flex justify-center items-center '>
          <div className='absolute top-30 left-50'>

            <h1 className='mt-10 mb-20 
              text-center font-extrabold 
              text-[100px] 
              max-w-20 tracking-tight '
              >LETS CONNECT
            </h1>
          </div>

          {/* form untuk ngirim email ke aku */}
          <div className='absolute top-35 flex-col max-w-20 justify-center items-center'>
            <form action="">
              <input type="text" placeholder='Email' className='bg-[#D9D9D9]/20 h-10 w-150 my-5 drop-shadow-lg rounded-4xl p-3'/>
              <input type="text" placeholder='Phone Number' className='bg-[#D9D9D9]/20 h-10 w-150 my-5 drop-shadow-lg rounded-4xl p-3'/>
              <input type="text" placeholder='Socials' className='bg-[#D9D9D9]/20 h-10 w-150 my-5 drop-shadow-lg rounded-4xl p-3'/>
              <textarea name="" placeholder='Message' id=""  className='bg-[#D9D9D9]/20 h-50 w-150 my-5 drop-shadow-lg p-3 rounded-4xl' ></textarea>
            </form>

            <button type='submit' className='absolute bg-[#75CFFF] px-20 py-3 rounded-full text-white drop-shadow-lg left-55'>Send</button>
          </div>


      </div>


      

      

      <div className='absolute w-full bottom-0 h-10 bg-black rounded-t-4xl'></div>
      
    </div>
  )
}

export default Page7
