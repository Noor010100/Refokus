import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto flex gap-2  p-20'>
          <Card width={"basis-1/3"} start={false} para={true} isRight={false} />
          <Card width={"basis-2/3"} start={true} para={false} isRight={true} hover={"bg-violet-600"} />
        </div>
      
    </div>
  )
}

export default Cards
