"use client"
import Navbar from '@/components/Navbar'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Blank = () => {

  // useGSAP(()=>{

  //   gsap.from(".nav",{
  //     opacity:0,
  //     y:-200,
  //     delay:4.5,
  //     duration:2,
  //     ease:"power3.out",
  //     stagger:0.5
  //   })

  // })

  return (
    <div className='w-full h-[95vh] sm:h-[97vh]'>
      <div className='nav fixed w-full top-0 z-20'>
      <Navbar/>
      </div>
    </div>
  )
}

export default Blank
