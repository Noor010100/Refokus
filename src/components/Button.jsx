import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const Button = () => {
  return (
    <div className='w-48 px-5 py-[7px] bg-zinc-100 text-black flex items-center justify-between rounded-full'>
     <span className='text-sm font-medium'> Get Started</span>
     <FaArrowRightLong />
    </div>
  )
}

export default Button
