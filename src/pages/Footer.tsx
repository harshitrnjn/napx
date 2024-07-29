import Image from 'next/image'
import React from 'react'
import Logo from "@/assests/Logo.png"

const Blank2 = () => {
  return (
    <div className='sm:w-full w-[100vw] sm:h-[20vw] h-[60vh] bg-black text-zinc-400/75 p-5 flex flex-col'>
      <div className='up w-full sm:h-[85%] h-full flex sm:flex-row flex-col  justify-evenly items-center  sm:gap-y-5
      '>
        <div className='logo sm:w-[18%] sm:h-[13vw] w-[45%] h-[15vh] '>
          <Image
          src={Logo}
          alt='Logo_404'
          className='w-full h-full'
          />
        </div>
        <div className='tags w-[70%] sm:h-[13vw] h-[35%] flex justify-center items-center sm:gap-x-3  gap-x-[15vw]'>
          <div className='tagBox w-[16vw] h-full   flex flex-col justify-center items-center sm:text-lg font-semibold sm:leading-[2vw] leading-[3.5vh] text-sm' >
            <ul>
              <li>About</li>
              <li>Theme</li>
              <li>NAPX Items</li>
              <li>Inspiration</li>
            </ul>
          </div>
          <div className='tagBox w-[16vw] h-full  flex flex-col justify-center items-center sm:text-lg font-semibold sm:leading-[2vw] leading-[3.5vh] text-sm' >
              <ul>
                <li>PRESS</li>
                <li>INSTAGRAM</li>
                <li>FACEBOOK</li>
                <li>TWITTER</li>
                <li>LINKEDIN</li>
              </ul>
          </div>
          <div className='tagBox w-[16vw] h-full  flex flex-col justify-center items-center sm:text-lg font-semibold sm:leading-[2vw] leading-[3.5vh] text-sm' >
            <ul>
              <li>FAQ</li>
              <li>HELP CENTER</li>
              <li>CAREERS</li>
              <li>CONTACT</li>
              <li>ACCEPTABLE USE</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='down w-full h-[15%] flex justify-between items-center sm:px-[8vw] px-0 sm:text-lg text-xs '>
        <h1>LOGO &copy; 2024 </h1>
          <div className='flex justify-center items-center sm:gap-x-[4vw] gap-x-2'>
              <h1>CREATOR TERM</h1>
              <h1>PRIVACY POLICY</h1>
              <h1>COOKIES POLICY</h1>
          </div>
      </div>
    </div>
  )
}

export default Blank2
