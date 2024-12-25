import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-55 gap-9'>
      <h1 className='font-extrabold text-[50px] text-center mt-16'
      >
        <span className='text-[#f56551]'>Plan Your Perfect Trip with AI:</span>
         Personalized Itineraries at Your Fingertips 
      </h1>
      <p className='text-xl text-gray-500 text-center'>
      Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
      </p>
      
      <Link to={'/create-trip'}>
      <Button>Get Started, It's Free</Button>
      </Link>

      {/* <img src='/landing.png' className='-mt-20'/> */}

      <img src='/DALL·E 2024-12-24 16.48.12 - A realistic user interface displayed on a laptop screen showcasing a trip planning platform for Vancouver, BC, Canada. The interface includes a main b.webp.png' className='-mt-20'/>
    </div>
  )
}

export default Hero




