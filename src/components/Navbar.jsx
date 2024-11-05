import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='max-w-screen-xl p-3 py-3 mx-auto flex justify-between items-center text-white border-b-[1px] border-zinc-700'>
   <div className='n-left flex items-center'>
   <div className='image-section flex'>
        <img 
          src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6669a1a4bcfb20e56e7cdd97_refokus_keyvisual_purple_animation_alpha_2800x1680_00.webp"
          className='w-6 h-6 my-1' 
          alt="Refokus logo" 
        />
        <h1 className='mx-2 text-2xl font-bold font-mono '>
          Refokus
        </h1>
      </div>
      
      {/* Nav Link Section */}
      <div className='Links flex gap-14 items-center  ml-20 '>
        {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
          <React.Fragment key={index}>
            {elem.length === 0 ? (
              <span className='w-[2px] h-10 bg-zinc-700'></span>
            ) : (
              <a className='text-sm' href="#">
                {index === 1 && (
                  <span 
                    style={{boxShadow: "0 0 0.75em #00FF19"}} 
                    className='inline-block w-1.5 h-1.5 mb-[2.3px] mx-1 rounded-full bg-green-500'
                  ></span>
                )}
                {elem}
              </a>
            )}
          </React.Fragment>
        ))}
      </div>
   </div>
   <Button/>
    </div>
  )
}

export default Navbar
