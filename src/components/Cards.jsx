import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full mt-20 '>
        <div className='max-w-screen-xl mx-auto flex gap-1  py-32'>
          <Card/>
          <Card/>
        </div>
      
    </div>
  )
}

export default Cards
