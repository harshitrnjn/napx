import Circle from '@/components/Circle'
import React from 'react'

const Three = () => {
  return (
    <div className='sm:w-full lg:h-screen md:h-[75vh] bg-white  relative w-[100vw] h-[125vh]'>
      <div className='w-full lg:h-[23vw] md:h-[30vh] h-[50vh] flex  justify-center items-center'>
      <Circle/>
     </div>
     <div className='w-full sm:h-[22vw]  flex flex-col h-[110vh]  items-center sm:gap-y-5 sm:mt-8 mt-10 text-customBlue gap-y-[4vh]
      text-center  '>
        <h1 className='sm:text-2xl font-semibold text-2xl w-[85%]'>FEEL THE DIFFERENCE WITH EVERY TOUCH</h1>
        <h1 className='sm:text-[6vw] font-semibold tracking-tighter text-7xl sm:mt-0'>INDULGE IN PURE BLISS</h1>
        <p className="sm:text-3xl sm:w-[85%] w-[90%] text-[5vw] leading-[7vw] text-center sm:mt-0 mt-5">At NAPX Tissues, we transform everyday essentials into extraordinary experiences. Our tissues are crafted with the finest materials, offering a level of softness and strength that feels like pure bliss. Choose NAPX Tissue and treat yourself to the ultimate comfort you deserve.</p>
     </div>
    </div>
  )
}

export default Three
