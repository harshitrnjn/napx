import React from 'react'
import Landing from './Landing'
import One from './One'
import Two from './Two'
import Blank from './Blank'
import Three from './Three'
import Four from './Four'
import Five from './Five'
import Blank2 from './Footer'

const Main = () => {
  return (
   <div className='relative w-full h-screen'>
   <Landing/>
   <Blank/>
   <One/>
   <Two/>
   <Three/>
   <Four/>
   <Five/>
   <Blank2/>
   </div>
  )
}

export default Main
