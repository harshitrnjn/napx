import Slider from '@/components/Slider'
import React from 'react'
import PageTwoRight from "@/assests/PageTwoRight.png"
import {datas} from "@/assests/data"

const Two = () => {
  const data1 = "";
  return (
    <div className='sm:w-full w-[100vw] sm:min-h-screen  min-h-[300vh] '>
{
  datas.map((data)=>(
    <Slider key={data.id} color={data.bgColor} textColor={data.textColor} source={data.src} content={data.content} tag={data.tag} title={data.title} 
    position={data.position}
    />
  ))
}
    </div>
  )
}

export default Two
